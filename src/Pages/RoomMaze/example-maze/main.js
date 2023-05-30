/* eslint-disable  */

/** noise values */
//enable/disable noise
const NOISE_STATE=false

// frequency of the wave. Diffuse. How big the wave is
const df= 10,
// amplitude. How strong is the effect
noiseScale= 0.8;
// the current shape of the wave 
let zoff=1
// zoff inrement amount
const noiseInc=0.001

let currentSeed=1
let generatedMaze={}
/** maze values */
// size of the maze (square). smaller values will result in a smaller less detailed maze
const mazeSize=20



async function generateNew(s=currentSeed){
    // currentSeed=s
    // ({vertices,points}= GenerateMaze(size, 0))
    generatedMaze = GenerateMaze(mazeSize, s)
}

document.getElementById('seed').addEventListener('mouseup', (e)=>{
    generateNew(+e.target.value)
})



function draw(pts){
    ctx.clearRect(0, 0, window.outerWidth, window.outerHeight)
    let xRatio = 1*cnv.width / mazeSize;
    let yRatio = 1*cnv.height / mazeSize;

    for (let i = 0; i < pts.length; i++) {
        const{p1,p2}=pts[i];
        ctx.strokeStyle="gray"
        ctx.lineWidth=2
        ctx.beginPath();
        ctx.moveTo(p1.x * xRatio, p1.y * yRatio);
        ctx.lineTo(p2.x * xRatio, p2.y * yRatio);
        ctx.closePath();
        ctx.stroke();

        point(p1.x * xRatio, p1.y * yRatio, 5, "blue")
    }
}

function getNoise(x,y){
    const value = noise.perlin3((x%mazeSize)/df,  (y%mazeSize)/df,  zoff)
    const angle = ((1 + value) * 1.1 * 128) / (Math.PI * 2)
    const v = rotateVector(x * noiseScale, y*noiseScale, angle)
    return{
        _x:x+v.x,
        _y:y+v.y
    }
}

function noiseafy(){
    if(!NOISE_STATE) return generatedMaze.vertices
    const res=[]
    for(let i of generatedMaze.vertices){
        const {_x:x1,_y:y1} = getNoise(i.p1.x,i.p1.y)
        const {_x:x2,_y:y2} = getNoise(i.p2.x,i.p2.y)

        res.push({
        p1:{
            x:x1,
            y:y1
        },
        p2:{
            x:x2,
            y:y2
        }})
    }
    return res
}

async function animate(){
    draw(noiseafy())
    zoff+=noiseInc
    requestAnimationFrame(animate)
}
generateNew()
animate()
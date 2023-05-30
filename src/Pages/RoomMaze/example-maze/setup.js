
/* eslint-disable  */

/**
 * @author Jonatan Verstraete
 */
const cnv = document.querySelector('canvas')
const ctx = cnv.getContext('2d')

cnv.height = window.innerHeight*0.8 
cnv.width = window.innerWidth*0.8 

function fillText(txt, x, y, color, s = null ) {
    if (s) font(s, color||ctx.fillStyle)
    ctx.fillText(txt, x, y)
}

function circle(x = Xmid, y = Ymid, r = 200,  fill) {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fillStyle = fill
    ctx.fill();

}

function point(x, y, s = 10, fill) {
    circle(x, y, s / 2, fill)
}


function markPoint(x, y, s = 20, stroke = "red") {
    ctx.lineWidth = 3

    ctx.strokeStyle = stroke
    ctx.beginPath();
    ctx.rect(x-s/2, y-s/2, s, s)
    ctx.stroke()
    ctx.closePath();

    circle(x, y, s/4, stroke)
}

function copy(a){
    return JSON.parse(JSON.stringify(a))
}


function sleep(s = 0.1) {
    return new Promise(resolve => setTimeout(resolve, s * 1000));
}

const degRad = (i) => i * (Math.PI / 180)

function rotateVector(x, y, angle, rad = 1) {
    let _x = degRad(x)
    let _y = degRad(y)
    // ? numbers that make is somehow even rotations
    const ang = -angle - 50.5

    const cs = Math.cos(ang) * rad;
    const sn = Math.sin(ang) * rad;
    return {
        x: _x * cs - _y * sn,
        y: _x * sn + _y * cs,
    };
};


function mapNums(inp, minInput, maxInput, minOutput, maxOutput) {
    return (inp - minInput) * (maxOutput - minOutput) / (maxInput - minInput) + minOutput;
}
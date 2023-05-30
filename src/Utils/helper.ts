import { Euler, Vector3 } from "three";
import { VectorArr } from "Types/World";
import { degToRad } from "three/src/math/MathUtils";
import { ROOM_CONFIG } from "Configs/roomConfig";



/**
 * @author jonatan verstraete
 * @param a any,preferebly a class
 * @returns boolean
 */
function isClass(a:any):boolean{
    return (a.__proto__.constructor.name!=='Object')
}

const flipObj=(obj:object):object=>{
    const flipped = Object
        .entries(obj)
        .map(([key, value]) => [value, key]);
    return Object.fromEntries(flipped);
}

function isObject(item:any):boolean {
    return (item && typeof item === 'object' && !Array.isArray(item));
}




// const logOriginal=copy(console.log)
// const DEV=true
// console.log = (...args:any)=>{
//     if(DEV) logOriginal(...args)
// }

/**
 * deepMerge
 * @return Object
 * @inpiration https://stackoverflow.com/a/37164538
 */
function deepMerge(target:any, source:any):any {
    const output = Object.assign({}, target);
    if (isObject(target) && isObject(source)) {
      Object.keys(source).forEach(key => {
        const sk=source[key]
        if (isObject(sk)&& !isClass(sk)) {
            if (!(key in target))
                Object.assign(output, { [key]: sk });
            else
                output[key] = deepMerge(target[key], sk);
        } else {
            Object.assign(output, { [key]: sk });
        }
      });
    }
    return output;
}

function isRoomId(n:string):boolean{
    return Object.values(ROOM_CONFIG.ROOM_ID).includes(String(n))
}

function copy(a:any):any{
    return JSON.parse(JSON.stringify(a))
}

function rotateVector(x:number=0,y:number=0,z:number=0):Euler{
    return new Euler(degToRad(x), degToRad(y), degToRad(z));
}


class RandomId {
    private last:string=""
    private memory:Set<string>=new Set()
    private count:number=0

    get(data:string):string{
        // return data+this.count++
        return window.btoa(data+String(new Date().getTime())+this.count++)
    }
}

class VectorOverflow extends Vector3 {
    private maxCount:number
    constructor(x:number=0,y:number=0,z:number=0){
        super(x,y,z)
        this.maxCount = 360//* (Math.PI / 180)

    }
    /**
     * makes number range from -max to +max, eg. -360 to 360
     * @param i number
     * @returns number
     */
    private overcount(i:number):number {
        if (i >= this.maxCount) i -= this.maxCount
        if (i <= -this.maxCount) i +=this.maxCount
        return i
    }
    public addRotation(other:Vector3):void{
        this.add(other)
        // this.x= this.overcount(this.x)
        // this.y= this.overcount(this.y)
        // this.z= this.overcount(this.z)
    }
}

function paddX(arr:any):VectorArr{
    const r=arr[0]+0.001
    return [r,arr[1],arr[2]]
}

function paddY(arr:any):VectorArr{
    const r=arr[1]+0.001
    return [arr[0],r,arr[2]]
}

function paddZ(arr:any):VectorArr{
    const r=arr[2]+0.001
    return [arr[0],arr[1],r]
}






export{
    flipObj,
    copy,
    rotateVector,
    deepMerge,
    isRoomId,
    RandomId,
    VectorOverflow,
    paddX,
    paddY,
    paddZ,
    isObject,
    isClass
}
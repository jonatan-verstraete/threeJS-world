/**
 * Basic global types
 */

import { Vector3 } from "@react-three/fiber";
import { Euler } from "three";

export type Direction = 'left'|'right'|'front'|'back';

export type DirectionItem ={
    [key in Direction]?:Vector|VectorArr;
}


export type Vector = [number,number,number] | object | Euler | Vector3
export type VectorArr = [number,number,number]



export type Size = [number,number];
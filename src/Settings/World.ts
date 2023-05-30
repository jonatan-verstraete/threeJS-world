

import { Direction, DirectionItem, Vector } from "Types/World"
import { rotateVector } from "Utils/helper"


export const Directions: Array<Direction> = ['front','left', 'right', 'back']



export const Rotations2d: DirectionItem  = {
  'front': rotateVector(0, 0, 0),
  'right': rotateVector(0, -90, 0),
  'back':  rotateVector(0, 180, 0),
  'left':  rotateVector(0, 90, 0)
}


export const RotationReverse = {
  x:rotateVector(-180,0, 0),
  y:rotateVector(0, -180, 0),
  z:rotateVector(0, 0,-180),

}


export const Positions: DirectionItem = {
  'front': [0, 0, -1],
  'right': [1, 0, 0],
  'back':  [0, 0, 1],
  'left':  [-1, 0, 0],
}

export function createPostion(size:number):DirectionItem{
  return {
    'front': [0, 0, -1*size],
    'right': [1*size, 0, 0],
    'back':  [0, 0, 1*size],
    'left':  [-1*size, 0, 0],
  }
}


export const RotationNull:Vector  = rotateVector(0, 0, 0)


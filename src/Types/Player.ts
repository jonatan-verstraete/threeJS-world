import { Vector3 } from "three"
import { VectorArr } from "./World"

export type Player={
    MASS: number,
    POSITION: VectorArr|Vector3,
    SIZE: number,
    VELOCITY: {
        FORWARD_DIRECTION: number,
        RIGHT_DIRECTION: number,
        UP: number,
    },
    TYPE: 'fixed'|'dynamic'
}
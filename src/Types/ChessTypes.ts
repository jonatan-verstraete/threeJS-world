import { MeshStandardMaterial } from 'three'
import { GLTF } from 'three-stdlib'

export enum Colors {
    WHITE = "white",
    BLACK = "black",
}

export enum Figures {
    BISHOP = 'castle',
    KING = 'king',
    KNIGHT = 'knight',
    PAWN = 'pawn',
    QUEEN = 'queen',
    ROOK = 'rook',
}

export interface FigureData {
    id: string,
    name: Figures,
    x: number,
    y: number,
    color: Colors
}

export type FiguresPropsType = {
    color: 'w' | 'b'
    position?: { x: number, y: number }
    type?:'p'|'n'|'b'|'r'|'q'|'k'|null
    square?:string
}

export type FigureProps = {
    figure: FiguresPropsType | null
    position: { x: number, y: number }
  }
  

export type GLTFResult = GLTF & {
    nodes: {
        Cylinder: THREE.Mesh
    },
    materials:{
        ['default']: MeshStandardMaterial
    }
};

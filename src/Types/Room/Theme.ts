import { Vector } from "Types/World";

export type ThemeItem={
    color?: any;
    transparent?:boolean;
    opacity?:number;
    position?:Vector;
    rotation?:Vector;
    texture?:Vector;

}

export type Theme={
    door?: ThemeItem,
    floor?: ThemeItem,
    wall?: ThemeItem,
    skybox?: ThemeItem,
}
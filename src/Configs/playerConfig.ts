import { Player } from "Types/Player";

export const PLAYER:Player = {
  MASS: 1,//75, // kg
  POSITION: [0,2,0],//new Vector3(0, 2, 2),
  SIZE: 0.5, // radius in m
  VELOCITY: {
    FORWARD_DIRECTION: 4,
    RIGHT_DIRECTION: 3,
    UP: 0.5,
  },
  TYPE:'dynamic',
};

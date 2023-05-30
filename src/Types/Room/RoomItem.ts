import { LightingElement } from 'Types/LightingElement';
import { Player } from 'Types/Player';
import { Vector, VectorArr } from 'Types/World';
import { DoorItem } from './Door'

import { Theme } from './Theme';

export type RoomId = {
  [key: string]: string
}

export type Physics={
  lightIntencity?: any,
  gravity?: VectorArr
}


// export type Info={
//   // label on door to room
//   label?: string;
//   // description, will be given with instructions
//   description?:string;
//   // image of the room (screenshot)
//   poster?:string;
// }



/**
 * fillable configuration for user
 */
export type ConfigFillables= Partial<Omit<RoomConfigItem, 'playerCollider'>>


/**
 * RoomConfigItem
 * a configuration file for each room and world
 */
export type RoomConfigItem = {
  /**
   * unique id
   */
  id: string;
  /**
   * description
   * can be given with instructions
   * @beta
   */
  description:string;
  /**
   * label for a door
   * Make it 2-8 characters
   */
  label: string;
  /**
   * image as poster on door, not required.
   * Funny extra
   */
  poster?:string;
  /**
   * height of walls.
   * Could be 0 if no walls are needed
   */
  wallHeight: number;
  /**
   * the ground level of the room
   * Could be aftered for platforms
   */
  ground0:number;
  /**
   *  size or scale.
   *  Will influence every room's components scale
   */
  size: number;
  /**
   * position of room in 3d space
   * @beta
   */
  location: Vector;
  /**
   * all avalable doors in that room. To use walls you need minimum 1 door
   */
  doors: DoorItem;
  /**
   * change physics of Layout
   */
  physics:Physics
  /**
   * color theme for all room components
   */
  theme: Theme;
  /**
   * change the standard player configuration
   */
  player: Partial<Player>,
  /**
   * the player collider, middleman in interactions
   */
  playerCollider: object|any
  /**
   * Lighting
   * @beta
   */
  lighting?: LightingElement
};


/**
 * Room Item
 * holds an RoomConfigItem
 */
export type RoomItem = {
  [id:string]:RoomConfigItem
};



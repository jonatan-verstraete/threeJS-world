import { RoomConfigItem, RoomItem,ConfigFillables, RoomId } from "Types/Room/RoomItem";
import { Themes } from "Settings/Themes";
import { deepMerge, copy } from "Utils/helper";
import { playerCollider } from "Events/PlayerCollision";


/**
 * ROOM_CONFIG
 * @Description 
 * Global config values that can be used in all Components without the for multiple context providers
 */
export namespace ROOM_CONFIG {

  /** 
   * Room id
   * @Warning "ROOM_ID" needs to be unique
   * @Warning make it url proof
    Why use as url?
      Because it will determin which configuration to load. more at Pages/Rooms
  */
  export const ROOM_ID:Readonly<RoomId> = {
    NOT_FOUND: "404",
    HOME: "home",

    ROOM_MAZE: "maze",
    ROOM_SPACE: "space",
    ROOM_DEATH: "death",

    ROOM_SECRET: "home",
  }


  /** Default room propperties
   * see: RoomConfigItem
   * Do not change!
  */
  export const DefaultRoom:RoomConfigItem = {
      label: "default",
      description: "a default room",
      id: "no-id",
      wallHeight: 5,
      ground0: -2.50001,
      size: 10,
      location: [0, 0, 0],
      doors: {
        right: ROOM_ID.HOME,
      },
      physics:{
        lightIntencity:1,
        gravity: [0,-9.80665,0],
      },
      theme:Themes.Light,
      player:{
        TYPE:'dynamic',
      },
      playerCollider:playerCollider
  }

  // merges default config
  const constructRoom=(room:ConfigFillables):RoomConfigItem=>{
    const a=deepMerge(copy(DefaultRoom),room)
    a.playerCollider=playerCollider
    return a
  }


  /**
   * ROOMS
   * overview of custom room values. Only add values that differ from "DefaultRoom"
   * The point would be a single json file for each room.
   * @Warning changing size might change behaviour off its content
   * @Warning a single door is required (home)
   * 
   * @suggestion If the configuration gets too big here, you can put it in a sepperate file in you Pages/<name>
   * and import it here. 
   */
  //useMemo<RoomItem>(()=>Object({
  export const ROOMS: RoomItem = {
    // room: home
    [ROOM_ID.HOME]: constructRoom({
      label: "Home",
      id:ROOM_ID.HOME,
      location: [0, 0, 0],
      size: 10,
      doors: {
        front: ROOM_ID.ROOM_SPACE,
        right: ROOM_ID.ROOM_MAZE,
        back: ROOM_ID.NOT_FOUND,
        left: ROOM_ID.ROOM_DEATH,        
      },
    }),


    // room: 404
    [ROOM_ID.NOT_FOUND]: constructRoom({
      label: "404",
      id:ROOM_ID.NOT_FOUND,
      location: [0, 0, 0],
      size: 10,
      // wallheight 0 results in no walls
      wallHeight:0,
      doors: {
        front: ROOM_ID.HOME,
      },
      theme:{
        floor: {
          color: 0xffffff,
          transparent:true,
          opacity:0.1,
        },
        wall: {
          color: 0xffffff,
          transparent:true,
          opacity:0,
        },
      }
    }),


    // room, Space
    [ROOM_ID.ROOM_SPACE]: constructRoom({
      label: "Space",
      id:ROOM_ID.ROOM_SPACE,
      poster: 'Images/poster-space.jpeg',
      location: [0, 1, 0],
      // in space room the size defines the size of the earth
      size: 5,
      player:{
        POSITION: [0,0,0],
        TYPE: 'fixed'
      },
      physics:{
        gravity:[0,-1,0]
      },
    }),


    // room, Maze
    [ROOM_ID.ROOM_MAZE]: constructRoom({
      id:ROOM_ID.ROOM_MAZE,
      label: "Maze",
      poster: 'Images/poster-maze.png',
      size: 20,
      doors: {
        front: ROOM_ID.ROOM_SECRET,
        back: ROOM_ID.HOME,
      },
      theme:Themes.Gray,
      player:{
        // match maze size
        POSITION: [0,0,19],
      }
    }),


    // room, chess/death
    [ROOM_ID.ROOM_DEATH]: constructRoom({
      id:ROOM_ID.ROOM_DEATH,
      label: "Death",
      poster: 'Images/poster-seventhseal.png'
    }),
  }

};
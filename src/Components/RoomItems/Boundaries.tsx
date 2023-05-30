
import { useContext } from "react";

import { Directions, Rotations2d, createPostion } from 'Settings/World'
import { RoomContext } from "Pages/Rooms";

import Door from "Components/Door/Door";
import OuterWall from "../Wall/OuterWall";

/**
 * Boundaries of the room and Doors
 * 
 */
const Boundaries = (props:any) => {
  const roomConfig = useContext(RoomContext)
  const {size, wallHeight, doors:roomDoors, theme={} } = roomConfig

  // extra caution, if no doors (fals configuration)
  if(!Object.values(roomDoors||{}).length) return (<></>)


  const wallScale = [size*2, wallHeight] as [number, number];
  const Positions = createPostion(size)

  const allSides =[]
  const allDoors =[]

  // iterating all Directions
  for(let i of Directions){
    const _rot=Rotations2d[i] as any

    // adds walls (if there is wallheight)
    if(wallHeight) allSides.push(
        <OuterWall   
          size={wallScale}
          bodyOptions={Object({
            rotation:_rot,
            position:Positions[i]
          })}
          options={theme.wall}

          key={"rigidbody-outerwall-"+i}
        />
    )

    // adds (possible) doors
    if(roomDoors[i]) {
      const target = roomDoors[i]
      allDoors.push(
        <Door
          target={target??""}
          bodyOptions={Object({
            rotation:_rot,
            position: Positions[i]
          })}
          key={'door-key-'+i+target}
        />
      )
    }
  }


  return (
    <>
      {allSides}
      {allDoors}
    </>
  );
};

export default Boundaries

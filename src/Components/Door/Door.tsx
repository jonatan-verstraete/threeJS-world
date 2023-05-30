/* eslint-disable */
import { CuboidCollider, RigidBody } from "@react-three/rapier";
import { INTERACTION_GROUPS } from "Configs/collisionGroups";

import { RoomContext } from "Pages/Rooms";
import { lazy, useContext,useState } from "react";
import { NAMES } from "Configs/names";
import LightBoxSign from "Components/Door/DoorLightBox";
import { urlToLabel } from "Utils/conversion";
import { Vector } from "Types/World";
import DoorPoster from "./DoorPoster";
import RoomConfirmation from "Components/Html/RoomConfirmation";

type DoorProps={
  position?: Vector|any
  rotation?: Vector|any
}

const LoadedDoorModel = lazy(() => import("./DoorModel"));

/**
 * Door
 */
const Door = ({bodyOptions, target}:{bodyOptions?:DoorProps, target:string}) =>{
  const roomConfig = useContext(RoomContext)
  const {playerCollider, ground0}:any = roomConfig
  const [active,setActive]= useState<boolean>(false)

  const [doorHovered,setDoorHovered]= useState<boolean>(false)


  // scale and positionning of door
  const scale=1.7
  const label=urlToLabel(target)

  /** On enter roomboundaries
   * indicator when getting close
   * when clicked (and close), go to target
   */
  const toggleState=({ other }:any)=>{
    const name= other.rigidBodyObject.name
    if(name !== NAMES.Player1) return 
    setActive(active?false:true)
  }

  const HandelInteraction=(event:any):void=>{
    if(!active)return
    //const conf=confirm("continue to page "+label+"?")
    playerCollider.changeRoom(target)
    //event.stopPropagation()
  }



  return (
    <>
      {
        active?? <RoomConfirmation roomId={target}/>
      }
    <mesh
        key={"door-"+target}
        name={"door-group-"+target}
        {...bodyOptions}
      >

      <LightBoxSign text={label} state={active}  
        color={active?(doorHovered? 0x11ff33 : 0xc88b0a):0x000000}
        position={[
          0, 
          0.5+scale/2,
          -0.1
        ]}
      />
      <mesh 
        position={[0,ground0+scale,0]}
        onPointerOver={() => setDoorHovered(true)}
        onPointerOut={() => setDoorHovered(false)}
        onClick={(e)=> HandelInteraction(e)}

      >
        <RigidBody 
          collisionGroups={INTERACTION_GROUPS.GROUP_1}
          onCollisionEnter={HandelInteraction}
          type={'fixed'}
        >
          <LoadedDoorModel scale={scale}/>
        </RigidBody>

        <DoorPoster roomId={target} />
        
        <CuboidCollider
            args={[scale,scale,scale] as any}
            position={[0,0,scale]}
            sensor
            // onIntersectionEnter={()=>setActive(true)}
            // onIntersectionExit={()=>setActive(false)}
            onIntersectionEnter={toggleState}
            onIntersectionExit={toggleState}
            collisionGroups={INTERACTION_GROUPS.GROUP_1}
          />
      </mesh>

    </mesh>
    </>
  );
};

export default Door

/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  PointerLockControls,
  Sphere,
  useKeyboardControls,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";
import { createContext, useRef, useState } from "react";
import { Vector3 } from "three";

import { PLAYER } from "Configs/playerConfig";
import { INTERACTION_GROUPS } from "Configs/collisionGroups";
import { NAMES } from "Configs/names";
import { VectorArr } from "Types/World";
import { LayoutProps } from "Types/LayoutProps";
import { useContext } from "react";
import { RoomContext } from "Pages/Rooms";
import { RoomConfigItem } from "Types/Room/RoomItem";
// import BB8 from "Components/Decoration/BB8";
import { VectorOverflow } from "Utils/helper";
import { Player as PlayerType } from "Types/Player";

const PlayerContext = createContext({})


// tood:: dont fall through floor
const PlayerFirstPerson = ({ children }:LayoutProps):JSX.Element => {
  const [freeze,setFreeze]=useState(false)
  const [openManual,setOpenManual]=useState(false)


  const {player:roomConfPlayer} = useContext(RoomContext!) as RoomConfigItem
  const isDynamic =!!((roomConfPlayer!.TYPE||'dynamic') ==='dynamic')

  const _PLAYER={
    ...PLAYER,
    ...roomConfPlayer
  }! as PlayerType



  const playerRef = useRef<any>({
    rotation: isDynamic?[0,0,0]:new VectorOverflow(0,0,0),
    position:[0,0,0],
  });
  const pointerRef = useRef<any>(null!);

  const playerProvider = useRef({
    rotation: new Vector3(0,0,0),//isDynamic?[0,0,0]:new VectorOverflow(0,0,0),
    freeze: setFreeze,
    openManual: setOpenManual
  })



  const moveBackwardOn = useKeyboardControls((state) => state.moveBackward);
  const moveForwardOn = useKeyboardControls((state) => state.moveForward);
  const moveLeftOn = useKeyboardControls((state) => state.moveLeft);
  const moveRightOn = useKeyboardControls((state) => state.moveRight);

  const moveJumpOn = useKeyboardControls((state) => state.jump)

  const fixedMoveVelocity = 0.01
  //  messy way to seperate 'fixed' and 'dynamic' player movement
  useFrame(() => {
    if(freeze)return
    const camera = pointerRef.current.getObject();
    const player = playerRef.current;

    // moveable player
    if(isDynamic) {
      const playerVelocity = player.linvel(); // Get linear velocity.

      const velocityVector = new Vector3(
        (moveRightOn ? 1 : moveLeftOn ? -1 : 0) * _PLAYER.VELOCITY!.RIGHT_DIRECTION!,
        0, // Camera quaternion should not affect velocity on gravity axis.
        (moveForwardOn ? -1 : moveBackwardOn ? 1 : 0) * _PLAYER.VELOCITY!.FORWARD_DIRECTION!
      );
      // Match velocityVector direction to Camera direction.
      velocityVector.applyQuaternion(camera.quaternion);
      velocityVector.y = playerVelocity.y; // Add velocity on gravity axis back after applying camera quaternion.
      // jump (spacious)
      //velocityVector.y += +(moveJumpOn && playerVelocity.y>0? 1: 0) * _PLAYER.VELOCITY!.UP!
      // Reset player angular velocity if no movement detected.
      if (!moveBackwardOn && !moveForwardOn && !moveLeftOn && !moveRightOn && !moveJumpOn) {
        player.setAngvel(new Vector3());
      }
      // Apply linear velocity to Player.
      player.setLinvel(velocityVector);
    } 

    // fixedplayer
    else {
      const velocityVector= new Vector3(
        (moveRightOn ? 1 : moveLeftOn ? -1 : 0) * fixedMoveVelocity,0,
        (moveForwardOn ? -1 : moveBackwardOn ? 1 : 0) * fixedMoveVelocity
      );
      velocityVector.applyQuaternion(camera.quaternion);
      //playerProvider.current.rotation.addRotation(velocityVector)
      playerProvider.current.rotation.add(velocityVector)

    }

    // Match Camera position to Player position.
    camera.position.copy(player.translation());
    camera.position.y += 1.25; // 1.75m
  });






  return (
    <>
      <group name="Player">
        <PointerLockControls ref={pointerRef} />
        <RigidBody
          type={isDynamic?"dynamic":'fixed'}
          colliders="ball"
          mass={_PLAYER.MASS}
          position={_PLAYER.POSITION as VectorArr}
          ref={playerRef}
          collisionGroups={INTERACTION_GROUPS.PLAYER}
          name={NAMES.Player1}
        >
          <Sphere args={[_PLAYER.SIZE, 4, 4]}>
            <meshBasicMaterial color={0x00ff00} wireframe={true} />
          </Sphere>

        </RigidBody>
      </group>

      {/* 
      <mesh scale={[0.5,0.5,0.5]} position={_PLAYER.POSITION as VectorArr } ref={playerRef}>
          <BB8/>
        </mesh> 
      */}

      <PlayerContext.Provider value={playerProvider.current}>
        {children}
      </PlayerContext.Provider>

    </>
  );
};

export {PlayerContext}
export default PlayerFirstPerson;

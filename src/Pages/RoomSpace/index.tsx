/* eslint-disable  */
import { GroupProps, useFrame } from "@react-three/fiber";
import { useContext, useRef, useState } from "react";

import { Cloud, Reflector, Sky, Sphere, Stars, useTexture } from "@react-three/drei";

import Earth from "Components/Planets/Earth";
import Text2D from "Components/Text/Text2d";

import FloatingPlanet from "Components/Planets/FloatingPlanet";
import Door from "Components/Door/Door";
import SinisterLighting from "Components/Lighting/SinisterLighting copy";




const RoomSpace = (props: GroupProps) => {
    return (
        <>
          {/* <RoomSetup /> */}
          <SinisterLighting/>
          <Stars speed={0} factor={3}/>
          {/* <Sky /> */}
          <fog attach="fog" color="gray" near={1} far={50} />

          <FloatingPlanet planet={'venus'} position={[50,20,0]} size={5} />
          <FloatingPlanet planet={'jupiter'} position={[-20,50,0]} size={12} />
          <FloatingPlanet planet={'mars'} position={[-40,20,20]} size={3} />
          <Cloud />

          {/* Objects not correct position, does not really work */}
          <Earth>
            {/* <Door target={''}/> */}
          </Earth>
      </>
    )
};


export default RoomSpace

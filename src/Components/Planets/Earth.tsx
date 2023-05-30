import { useTexture,Sphere } from "@react-three/drei";
import { useContext, useRef, useState } from "react";


import {VectorArr}from 'Types/World'
import { useFrame } from "@react-three/fiber";
import { Attractor, RigidBody } from "@react-three/rapier";
import { INTERACTION_GROUPS } from "Configs/collisionGroups";
import { PlayerContext } from 'Components/Player/PlayerFirstPerson'
import { Euler } from "three";
import { RoomContext } from "Pages/Rooms";



const Earth= ({children}:any) =>{
  const {size}:{size:number} =useContext(RoomContext)
  const [rotation,setRotation]=useState<VectorArr>([0,0,0])
  const playerConfig = useContext(PlayerContext) as any

  const refLight=useRef({
    rotation: new Euler(0,0,0)
  }) as any



  const [colorMap, normal] = useTexture([
    "Textures/Earth/earth.jpeg",
    "Textures/Earth/normal.png",
  ])


  useFrame(() => {
    const {x,y,z}=playerConfig.rotation
    setRotation([-z,y,x])
    // refLight.current.rotation.x+=0.1
    // refLight.current.rotation.z+=0.1
  })


  return(
    <group >
      <mesh       
        scale={[size,size,size]}
        position={[0,-size*5,0]}
        rotation={rotation}
        // ref={ref}
        // rotation={rotationRef.current}
        // rotation={rotateVector(0,180,180)}
      >
        <RigidBody 
          //position={[0,0,0]} 
          mass={0} 
          collisionGroups={INTERACTION_GROUPS.GROUP_1} 
          colliders='ball'
        >
          <Sphere args={[size, size*20,size*20]}>
              <meshPhysicalMaterial 
                color={"white"}
                map={colorMap}
                normalMap={normal}
                roughnessMap={normal}
              />
          </Sphere>
        </RigidBody>

        <Attractor 
            type="linear"
            range={size*4} 
            strength={100} 
            collisionGroups={INTERACTION_GROUPS.GROUP_1} 
          />

        <mesh position={[0,-size,0]} ref={refLight!} >
          <directionalLight
            color={0xfda822}
            intensity={5}
          />
        </mesh>
      </mesh>

      <mesh >
      {
          children
        }
      </mesh>

    </group>
  );
}
  
export default Earth;
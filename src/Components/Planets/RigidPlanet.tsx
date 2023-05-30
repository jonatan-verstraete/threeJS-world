import { useTexture,Sphere } from "@react-three/drei";
import { useContext, useRef, useState } from "react";


import {VectorArr}from 'Types/World'
import { useFrame } from "@react-three/fiber";
import { planets, planetArgs } from "Configs/planetsConfig";
import { Attractor, RigidBody } from "@react-three/rapier";
import { INTERACTION_GROUPS } from "Configs/collisionGroups";
import { PlayerContext } from 'Components/Player/PlayerFirstPerson'
import Text2D from "Components/Text/Text2d";
import { Vector3 } from "three";


const RigidPlanet= ({size=1, position=[0,0,0],planet="earth",light=true}:
  {position?:VectorArr, size?:number,planet?:planetArgs,light?:boolean}) =>{

  const ref = useRef({rotation:new Vector3(0,0,0)})
  const refLight = useRef({}) as any


  const [rotation,setRotation]=useState<VectorArr>([0,0,0])
  const playerConfig = useContext(PlayerContext) as any

  const conf=planets[planet]


  const [colorMap, normal, roughness] = useTexture([
    "Textures/Planet/"+conf.path,
    "Textures/Planet/normal.jpg",
    "Textures/Planet/roughness.png",
  ])


  useFrame(() => {
    //ref.current.rotation=playerConfig.rotation.scale(0.01)
    const {x,y,z}=playerConfig.rotation
    setRotation([-z,y,x])
  })


  // return (<></>)


  return(
    <mesh       
      position={position}
      scale={[size,size,size]}
      // ref={ref}
      // rotation={rotationRef.current}
      // rotation={rotateVector(0,180,180)}
      rotation={rotation}
    >
      <Text2D 
        text={"rotation:"+JSON.stringify(rotation.map(i=>+i.toFixed(3)))} 
      optionsFont={Object({
        fontSize:5,
        color:"black"
      })}
      options={Object({
        position:[0,1,-size*2],
      })}/>
      <RigidBody 
        //position={[0,0,0]} 
        mass={0} 
        collisionGroups={INTERACTION_GROUPS.GROUP_1} 
        colliders='ball'
        // ref={rotationRef}
      >
        <Sphere args={[size, size*2,size*2]}>
            <meshPhysicalMaterial 
              color={conf.color}
              map={colorMap}
              normalMap={normal}
              //roughnessMap={roughness}
            />
        </Sphere>
      </RigidBody>

      <Attractor 
          type="linear"
          range={size*4} 
          strength={100} 
          // position={[-size/4, -size/4, -size/4]} 
          collisionGroups={INTERACTION_GROUPS.GROUP_1} 

        />

      <mesh 
      //ref={refLight} 
      position={[0,-size,0]}>
        <directionalLight
          color={light ? 0xfda822:0x000000}
          intensity={5}
        />
      </mesh>
    </mesh>
  );
}
  
export default RigidPlanet;
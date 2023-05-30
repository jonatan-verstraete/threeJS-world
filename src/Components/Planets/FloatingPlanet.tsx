import { useTexture } from "@react-three/drei";
import { useRef } from "react";


import {VectorArr}from 'Types/World'
import { useFrame } from "@react-three/fiber";
import { planets, planetArgs } from "Configs/planetsConfig";


type FloatingArgs={
  position?:VectorArr
  size?:number
  planet:planetArgs
  light?:boolean
}

const FloatingPlanet= ({size=1, position=[0,0,0],planet="earth",light=true}:FloatingArgs) =>{
  const ref = useRef({}) as any
  const refLight = useRef({}) as any

  const rotX=0.0002//(size*2)
  const rotY=rotX*0.5

  const conf=planets[planet]

  // const colorMap = useLoader(TextureLoader, earthImg)


  const [colorMap] = useTexture([
    "Textures/Planet/"+conf.path,

  ])

  useFrame(() => {
    if(!ref.current)return
    if(light){
      if(refLight.current) refLight.current.rotation.x += 0.001
    }
    ref.current.rotation.x+= rotX
    ref.current.rotation.y+= rotY
  })


  // const targ= new Object3D()
  // targ.position.set(0,0,0)
  
  return(
    <mesh name={"planet"+planet}>
      <mesh scale={[size,size,size]} position={position}>
        {
          <mesh ref={refLight} position={[0,-size/2,0]}>
            <directionalLight
              color={light ? 0xdd8844:0x000000}
              intensity={2}
              // target={targ}
              position={[0,-1.5,0]} 
              />
          </mesh>
        }

        <mesh ref={ref} >
          <sphereGeometry attach="geometry" args={[1, 32, 32]} />
          <meshStandardMaterial
            map={colorMap}
            color={conf.color} />
        </mesh>
      </mesh>
    </mesh>
    );
}
  
export default FloatingPlanet;
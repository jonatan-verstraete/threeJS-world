import { useGLTF } from "@react-three/drei";
import { useRef } from "react";

import { rotateVector } from "Utils/helper";


const DoorModel= ({scale}:{scale:number}) =>{
    const groupRef=useRef() as any
    const {materials, nodes }:any = useGLTF('./Models/Door/Door.gltf');

    return (
      <>
        <group 
          ref={groupRef}  
          dispose={null} 
          position={[scale/2,0, 0]}
          rotation={rotateVector(90,0,0)}
          scale={1}
        >
          <mesh geometry={nodes.Door.geometry} material={materials.basic}
              rotation={rotateVector(180,0,0)}
              scale={[scale/2,0.1,scale]}
          />
        </group>
      </>
    );
}
  
export default DoorModel;
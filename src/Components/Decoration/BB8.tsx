
import { RigidBody } from "@react-three/rapier";
import LoadModel from "Components/Model/LoadModel";
import { NAMES } from "Configs/names";
import { VectorArr } from "Types/World";
import { rotateVector } from "Utils/helper";



const BB8= ({rotationBody=[0,0,0], rotationHead=[0,0,0]}:{rotationBody?:VectorArr, rotationHead?:VectorArr}) =>{
    return (
        <mesh scale={[.03,.03,.03]} position={[0,-2,5]}>
            <mesh position={[0,-1,1]} rotation={rotateVector(-90,0,0)} >
                <LoadModel path='./Models/BB-8/head.glb' />
            </mesh>
            {/* <mesh rotation={rotationBody}>
                <LoadModel path='./Models/BB-8/body.glb' />
            </mesh> */}
        </mesh>
    );
}
  
export default BB8;
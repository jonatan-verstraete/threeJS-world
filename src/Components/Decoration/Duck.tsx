import { RigidBody } from "@react-three/rapier";
import LoadModel from "Components/Model/LoadModel";


const Duck= (args:any) =>{
    return (
      <>
        <RigidBody gravityScale={.1} {...args}>
            <LoadModel path='./Models/Duck/Duck.gltf' />
        </RigidBody>
      </>
    );
}
  
export default Duck;
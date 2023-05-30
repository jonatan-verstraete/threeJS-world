import { RigidBody } from "@react-three/rapier";
import LoadModel from "Components/Model/LoadModel";



const Rock = (args:any) =>{
    const scale=20
    return (
      <mesh scale={[scale,scale,scale]} position={[4,-8,0]}>
        <RigidBody
            // collisionGroups={INTERACTION_GROUPS.GROUP_1} 
            colliders={'hull'}
            gravityScale={0}
            mass={0}
            >
            <LoadModel path='./Models/Rock/rock.glb' />
        </RigidBody>
      </mesh>
    );
}

export default Rock;
import { RigidBody } from "@react-three/rapier";
import { Empty } from "Components/Material/Standard";

import { INTERACTION_GROUPS } from "Configs/collisionGroups";



const MazeWall = ({position, rotation, size}:{position:any, rotation:any, size:any}) => {


  return (
    <RigidBody 
      type="fixed" 
      mass={1}
      collisionGroups={INTERACTION_GROUPS.GROUP_1}
      >
        <mesh
          rotation={rotation} 
          position={position}
          material={Empty}
        >
          <boxGeometry attach="geometry" args={size} />
        </mesh>

    </RigidBody>
  );
};

export default MazeWall;

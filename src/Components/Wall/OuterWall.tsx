import { RigidBody } from "@react-three/rapier";
import { DoubleSide } from "three";

import { INTERACTION_GROUPS } from "Configs/collisionGroups";

/**
 * OuterWall of the room
 */
const OuterWall = ({size, bodyOptions, options}:any) => {
  return (
    <RigidBody
    collisionGroups={INTERACTION_GROUPS.GROUP_1}
      {...bodyOptions}  
    >
      {/* <Plane args={size} >
        <meshBasicMaterial {...options} side={DoubleSide} />
      </Plane> */}

      <mesh receiveShadow>
        <planeBufferGeometry  attach="geometry" args={size} />
        <meshStandardMaterial attach="material" {...options} side={DoubleSide} />
      </mesh>
    </RigidBody>
  );
};

export default OuterWall

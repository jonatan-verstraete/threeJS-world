import { RigidBody } from "@react-three/rapier";
import { useContext } from "react";

import { RoomContext } from "Pages/Rooms";
import { rotateVector } from "Utils/helper";
import { RoomConfigItem } from "Types/Room/RoomItem";

const Floor = (argz:any) => {
  const {size, ground0, theme={}}:any = useContext(RoomContext) as RoomConfigItem
  
  return (
    <RigidBody position={[0, ground0, 0]} >
      <mesh receiveShadow rotation={rotateVector(-90,0,0) as any} >
        <planeBufferGeometry attach="geometry" args={[size*2, size*2] as [number, number]} />
        <meshStandardMaterial attach="material" {...theme.floor} />
      </mesh>
    </RigidBody>
  );
};

export default Floor;

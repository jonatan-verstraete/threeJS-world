import { Plane } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { useContext } from "react";
import { DoubleSide} from "three";

import { RoomContext } from "Pages/Rooms";
import { rotateVector } from "Utils/helper";

const Floor = ({size=2}:{size:number}) => {
  const config = useContext(RoomContext)
  const {ground0, theme={}}:any = config as any
  
  const args = [size*2, size*2] as [number, number];
  const rotation = rotateVector(-90, 0, 0) as any;

  return (
    <RigidBody position={[0, ground0, 0]} >
      <Plane args={args} rotation={rotation}  >
        <meshBasicMaterial attach="material" {...theme.floor}  side={DoubleSide} />
      </Plane>
    </RigidBody>
  );
};

export default Floor;

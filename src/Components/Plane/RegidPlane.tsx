import { Plane } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { DoubleSide } from "three";
import { Vector } from "Types/World";

const RegidPlane = ({size=[10, 10],position=[0,0,0],options={}, rotation=[-90,0,0], bodyOptions={}}:{size:[number, number],position:Vector, rotation:Vector, options?:Object, bodyOptions?:object}) => {

  return (
    <RigidBody position={position as any} {...bodyOptions}>
      <Plane args={size} rotation={rotation as any}  >
        <meshBasicMaterial attach="material" {...options}  side={DoubleSide} />
      </Plane>
    </RigidBody>
  );
};

export default RegidPlane;

import { Plane } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { DoubleSide, Euler, MathUtils } from "three";



const Top = ({roomConfig}:{roomConfig:any}) => {
  const {size} = roomConfig
  
  const args = [size*2, size*2] as [number, number];
  const rotation = new Euler(MathUtils.degToRad(-90), 0, 0);

  return (
    <RigidBody>
      <Plane args={args} rotation={rotation}>
        <meshBasicMaterial color={0x1111ff} opacity={0.90} transparent={true} side={DoubleSide} />
      </Plane>
    </RigidBody>
  );
};

export default Top;

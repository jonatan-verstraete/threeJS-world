import { RigidBody } from "@react-three/rapier";
import { Box } from "@react-three/drei";
import { Euler, MathUtils } from "three";

const Stairs = (props: any) => {
  const angleSlope = 35;
  const angle = MathUtils.degToRad(-90 + angleSlope);
  const args = [1, 10, 0.2] as [number, number, number];

  return (
    <RigidBody type="fixed">
      <Box args={args} rotation={new Euler(angle, 0, 0)}>
        <meshBasicMaterial color={0x999999} attach="material" opacity={0.25} transparent={true} />
      </Box>
    </RigidBody>
  );
};

export { Stairs };

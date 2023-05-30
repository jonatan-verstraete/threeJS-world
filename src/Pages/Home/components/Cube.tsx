import { RigidBody } from "@react-three/rapier";
import { Box } from "@react-three/drei";

const Cube = () => { //{ x = 0, y = 0, z = 0}: {x:number, y:number, z:number}

  const p1 = [3, 0, 0] as [number, number, number];
  const p2 = [2, 0, -0.5] as [number, number, number];

  return (
    <RigidBody type="fixed">
      <mesh rotation={[0, 10, -2]} position={p1}>
        <boxGeometry attach="geometry"/>
        <meshStandardMaterial attach="material" color={"#aa0000"} />
      </mesh>
      <boxGeometry attach="geometry"/>
      <Box  args={[6, .1]} position={p2} />
    </RigidBody>
  );
};

export { Cube };

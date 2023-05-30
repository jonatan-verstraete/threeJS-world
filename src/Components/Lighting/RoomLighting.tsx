import { Object3D } from "three";
import { VectorArr } from "Types/World";


const RoomLighting=({intencity=1}:{intencity?:number}) =>{
  const targ= new Object3D()
  targ.position.set(0,0,0)

  return (
    <group>
      <directionalLight
        color={0x00a5ff}
        position={[10,10,5] as VectorArr}
        intensity={0.01*intencity}
        target={targ}
      />
      <directionalLight
        color={0xffa500}
        position={[-10,10,-5] as VectorArr}
        intensity={0.01*intencity}
        target={targ}
        />
      <pointLight 
        position={[0,20,0] as VectorArr}
        intensity={0.3*intencity} 
        // distance={20}
        color={0xeeeeff}
        // decay={-4}
        />
    </group> 
  );
}

export default RoomLighting
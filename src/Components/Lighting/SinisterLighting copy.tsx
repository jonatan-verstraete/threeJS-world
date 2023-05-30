import { Object3D } from "three";
import { VectorArr } from "Types/World";


const SinisterLighting=({intencity=1}:{intencity?:number}) =>{
  const targ= new Object3D()
  targ.position.set(0,0,0)

  return (
    <group>
      <directionalLight
        color={0x39025e}
        position={[12,10,8] as VectorArr}
        intensity={0.01*intencity}
        target={targ}
      />
      <directionalLight
        color={0xfcb045}
        position={[-9,4,-10] as VectorArr}
        intensity={0.01*intencity}
        target={targ}
        />
    </group> 
  );
}

export default SinisterLighting
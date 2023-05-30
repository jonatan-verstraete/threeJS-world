import { EffectComposer, GodRays } from "@react-three/postprocessing";
import { useRef } from "react";
import { Mesh, MeshBasicMaterial, SphereGeometry } from "three";



      
const GodRaySun = (args:any) =>{
  const ref=useRef() as any
  const sunMaterial = new MeshBasicMaterial({
    color: 0xffddaa,
    transparent: true,
    fog: true,
  });
  const sunGeometry = new SphereGeometry(0.75, 32, 32);
  // sunGeometry.translate(0,0,10)
  const sun = new Mesh(sunGeometry, sunMaterial);
  //sun.translateZ(10)


  return (
    <mesh ref={ref}>
      <EffectComposer>
        <GodRays
          sun={sun}
          samples={30}
          density={0.97}
          decay={0.96}
          weight={0.6}
          exposure={.4}
          clampMax={1}
          // width={Resizer.AUTO_SIZE}
          // height={Resizer.AUTO_SIZE}
          // kernelSize={KernelSize.SMALL}
          blur={20}
        />
      </EffectComposer>

    </mesh>
  );
}
      

export default GodRaySun
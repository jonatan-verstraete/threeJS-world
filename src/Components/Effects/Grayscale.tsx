import { EffectComposer, HueSaturation } from "@react-three/postprocessing";
import { MathUtils } from "three";

const Grayscale = () => {


  return (    
    <EffectComposer>
      <HueSaturation
         hue={MathUtils.degToRad(180)}
         saturation={100}
       />
    {/* <EffectComposer>
    {/* <DepthOfField focusDistance={0} focalLength={0.02} bokehScale={2} height={480} /> */}
    {/* <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} /> */}
    {/* <Noise opacity={0.02} /> */}
    {/* <Vignette eskil={false} offset={0.1} darkness={1.1} /> */}
    </EffectComposer>
  );
};

export default Grayscale

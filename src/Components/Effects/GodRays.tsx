import { GodRays, EffectComposer } from "@react-three/postprocessing";


const GodRaysEffect = ({sunRef}:any) => {


  return (
      <>
        <EffectComposer >
          <GodRays
            sun={sunRef.current}
            // blendFunction={BlendFunction.Screen}
            samples={30}
            density={0.97}
            decay={0.96}
            weight={0.6}
            exposure={0.4}
            clampMax={1}
            // width={Resizer.AUTO_SIZE}
            // height={Resizer.AUTO_SIZE}
            // kernelSize={KernelSize.SMALL}
            blur={2}
          />
        </EffectComposer>
      </>
  );
};

export default GodRaysEffect

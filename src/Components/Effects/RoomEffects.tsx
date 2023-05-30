import { EffectComposer, DepthOfField } from "@react-three/postprocessing";

const RoomEffects = () => {


  return (
    <EffectComposer>
      <DepthOfField focusDistance={0} focalLength={0.02} bokehScale={2} height={480} />
    </EffectComposer>
  );
};

export default RoomEffects

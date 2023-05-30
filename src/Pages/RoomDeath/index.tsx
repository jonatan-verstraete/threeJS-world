import { ROOM_CONFIG } from "Configs/roomConfig";

import Door from "Components/Door/Door";
import Grayscale from "Components/Effects/Grayscale";


import SkyBox from "Components/SkyBox/Skybox";
import Chess from "Components/Chess/Chess";
import Rock from "./components/Rock";
import PointSun from "Components/Lighting/PointSun";
import { rotateVector } from "Utils/helper";




const PageDeath = () => {
    return (
      <>
        <PointSun/>
          {/* <hemisphereLight
            groundColor={0xffffff}
            intensity={0.04}
            position={[5, 20, 5]}
          /> */}

          <SkyBox path={'.Textures/ocean-clouds.jpeg'}/>

          <fog attach="fog" color="white" near={1} far={50} />

          <Chess scale={10}/>
          <Grayscale/>

          <group position={[0,0,10]} rotation={rotateVector(0,180)} >
            <Rock/>
            <Door target={ROOM_CONFIG.ROOM_ID.HOME} bodyOptions={Object({position:[4,-2,0]})} />
          </group>



      </>
    )
};
export default PageDeath

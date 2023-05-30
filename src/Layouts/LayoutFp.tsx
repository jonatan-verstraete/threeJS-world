import { KeyboardControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Debug, Physics } from "@react-three/rapier";
import { createContext, Suspense, useContext, useRef } from "react";

import { KEYBINDINGS } from "Configs/keybindings";

import { LayoutProps } from "Types/LayoutProps";
import { RoomConfigItem } from "Types/Room/RoomItem";

import { RoomContext } from "Pages/Rooms";
import PlayerFirstPerson from "Components/Player/PlayerFirstPerson";
import LoadingScreen from "Components/Loading/LoadingScreen";






/**
 * Layout for a scene with Rapier physics engine for First Person view.
 *
 * @param {LayoutProps} props
 * @returns {JSX.Element}
 */

const GlobalContext = createContext({})

const LayoutFp = ({ children }: LayoutProps): JSX.Element => {

  // use phisycs of roomConfig
  const roomConf =useContext(RoomContext) as RoomConfigItem



  // todo:: add all physics of roomConfig somehow
  const globalConf=useRef({
    gravity: roomConf.physics.gravity,// as VectorArr,
    showDebug: false,
    paused: false,
  })


  return (
    <>
      <Canvas
        camera={undefined}
        // flat={flat}
        // frameloop={frameloop}
        // linear={linear}
        // orthographic={false}
        shadows={true}
        // shadowMap-type={PCFSoftShadowMap}
      >
        <Suspense fallback={<LoadingScreen/>}>

          <KeyboardControls map={KEYBINDINGS.UNIVERSAL}>
            <Physics
              // colliders={undefined}
              gravity={globalConf.current.gravity}


              paused={globalConf.current.paused}
              // timeStep="vary"
              // updatePriority={undefined}
            >
              <GlobalContext.Provider value={globalConf.current}>
                {/* <OrbitControls/> */}
                <PlayerFirstPerson >
                  {children}
                  {globalConf.current.showDebug && <Debug />}
                </PlayerFirstPerson>
              </GlobalContext.Provider>

            </Physics>
          </KeyboardControls>
        </Suspense>
      </Canvas>
    </>
  );
};

export {LayoutFp, GlobalContext}

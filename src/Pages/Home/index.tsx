/* eslint-disable  */
import { GroupProps } from "@react-three/fiber";
import RoomSetup from "Components/RoomItems/RoomSetup";

import Duck from "Components/Decoration/Duck";
import RoomLighting from "Components/Lighting/RoomLighting";
import Chess from "Components/Chess/Chess";
import { RoomContext } from "Pages/Rooms";
import { useContext } from "react";
import Cursor from "Components/Cursor/Cursor";
import Rigid3dText from "Components/Text/Rigid3dText";
import { rotateVector } from "Utils/helper";
import { Stars } from "@react-three/drei";




const PageHome = (props: GroupProps) => {
  const {ground0} = useContext(RoomContext)
  
  return (
    <>
        {/* <Cursor state={false}/> */}
        <Stars />
        <RoomLighting/>
        <RoomSetup />
        <Duck position={[-2,ground0,-3]} />
        <Chess scale={0.1} position={[2,ground0+0.05,2]} />

        <group position={[2,ground0,-7]} rotation={rotateVector(0,-30,0)} scale={[.8,.8,.8]} >
          <group position={[0,1,0]}>
            <Rigid3dText text={"Jonatan"} />
          </group>
          <Rigid3dText text={"Verstraete"} />
        </group>
    </>
  )
};
export default PageHome
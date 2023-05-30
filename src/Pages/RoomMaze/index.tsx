/* eslint-disable  */
import { GroupProps } from "@react-three/fiber";
import RoomSetup from "Components/RoomItems/RoomSetup";

import Maze from "./components/Maze";
import { useContext } from "react";
import { RoomContext } from "Pages/Rooms";
import { Sparkles, Stars } from "@react-three/drei";
import RoomLighting from "Components/Lighting/RoomLighting";



const PageMaze = (props: GroupProps) => {
    const roomConfig= useContext(RoomContext) as any
    const {size} = roomConfig

    return (
      <>
        <RoomLighting intencity={3}/>
        <RoomSetup playerStartPosition={[0,0,size-1]}/>
        <Stars />
        <Maze/>
        <Sparkles count={200} size={size*2} position={[0, 0.9, 0]} scale={[size,size,size]} speed={0.3} />
      </>
    )
};
export default PageMaze

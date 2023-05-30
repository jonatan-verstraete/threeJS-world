/* eslint-disable  */
import { GroupProps } from "@react-three/fiber";

import RoomSetup from "Components/RoomItems/RoomSetup";
import { useContext } from "react";

import { RoomContext } from "Pages/Rooms";
import { Stars } from "@react-three/drei";
import Text2D from "Components/Text/Text2d";
import { rotateVector } from "Utils/helper";
import RoomLighting from "Components/Lighting/RoomLighting";
import Planet from "Components/Planets/FloatingPlanet";





const Page404 = (props: GroupProps) => {
    const roomConfig= useContext(RoomContext) as any

    const {ground0,size}=roomConfig

    const message="Welcome to\n page\n 404.\n Enjoy!"
    // todo:: font in frontConfig (h1, h2..)


    return (
        <>
          <Stars saturation={100}speed={0.1} fade={false} factor={2}/>
          <RoomSetup />
          <RoomLighting/>
          <Text2D 
            text={message} 
            options={Object({
              position:[0,ground0+0.01,-size*0.2], 
              rotation:rotateVector(-90,0,0),
            })}
            optionsFont={Object({
              fontSize:21, 
              color:"white"
            })}
          />

          <Planet planet={'earth'}/>
          <Planet 
            position={[-30,20,-40]} 
            size={10} 
            planet={'jupiter'}
          />
      </>
    )
};


export default Page404

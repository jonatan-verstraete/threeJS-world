import { Text3D } from "@react-three/drei"
import Text3d from "Components/Text/Text3d"
import { useState } from "react"

const DoorConfirm=({label}:{label:string})=>{
    const [hovered,setHover]=useState(false)
    return(
        <group
            onPointerOver={() => setHover(true)}
            onPointerOut={() => setHover(false)}
            scale={[.6,.6,.6]}
            position={[0,0,1]}
        >
            <Text3D font={'Fonts/Space-Grotesk-Light_Regular.json'} >
                {
                    "Go"
                }
                <meshStandardMaterial color={hovered?0xffffff:0x8888ff} />
            </Text3D>
        </group>
    )
}

export default DoorConfirm
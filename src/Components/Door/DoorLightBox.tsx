import { Text } from "@react-three/drei"
import { DoubleSide } from "three"

import {DefaultOptions as defFontOptions} from 'Settings/Fonts/settings'
import { VectorArr } from "Types/World"

type LightBoxProps={
    text:string
    state:boolean
    position:VectorArr
    color:any
}
const LightBoxSign=({text,state, position=[0,0,0],color=0xc88b0a}:LightBoxProps)=>{

    const boxSize=[1,0.5,0.1] as VectorArr
    // centering
    const pos=[...position] as VectorArr
    pos[1]+=boxSize[1]/2
    pos[2]+=0.2



    return (
        <mesh position={pos}>
            <Text
                {...Object({
                    ...defFontOptions,
                })}
                position={[0,0,0.11]}
            >
                {text}
            </Text>

            <pointLight 
                position={pos}
                intensity={15} 
                distance={20}
                color={state? color:0x000000}
                //target={[0,0,0]as any}
                decay={10}
            />
            <mesh >
                <boxGeometry attach="geometry" args={boxSize} />
                <meshStandardMaterial attach="material" 
                    color={0xffffff}
                    side={DoubleSide}
                    transparent
                    opacity={0.9}
                />
            </mesh>
        </mesh>
    )
}

export default LightBoxSign
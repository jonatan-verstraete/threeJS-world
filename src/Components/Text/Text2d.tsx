import { Text } from '@react-three/drei'

import {DefaultOptions} from 'Settings/Fonts/settings'
import { FontOptions } from "Types/Fonts/FontOptions";


const Text2D=({text, optionsFont, options}:{text:string, optionsFont?:object, options?:object}) =>{
//const Text2D=({text}:{text:string}) =>{

  const _optionsFont:FontOptions={
    ...DefaultOptions,
    ...optionsFont
  };

  const _options={
    ...options
  };

  return (
    <mesh {..._options}>
      <Text
        {..._optionsFont as any}
      >
        {text}
      </Text>
    </mesh>
  )
//  <Html center={true}  position={[0,-1.5,0]}>
// <h1>{text}</h1>
// </Html>
}

export default Text2D
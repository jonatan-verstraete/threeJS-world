import { useAspect } from "@react-three/drei"
import { useLoader } from "@react-three/fiber"
import { Euler, TextureLoader } from "three"
import { VectorArr } from "Types/World"




type DefaultArgs={
    position?:VectorArr
    rotation?:VectorArr|Euler
    size?:[number,number,number]
    path:string
}

const defaultScale=[
  1024, // Pixel-width
  512, // Pixel-height
  1
] as DefaultArgs['size']


const LoadScaledImage =({path, size=defaultScale,position=[0,0,0],rotation=[0,0,0]}:DefaultArgs):JSX.Element =>{


    const texture = useLoader(TextureLoader, path)
    const _scale = useAspect(...size!)
    return (
      <mesh
      position={position}
      rotation={rotation}
      scale={_scale}
      >
        <planeBufferGeometry attach="geometry" />
        <meshBasicMaterial attach="material" map={texture} />
      </mesh>
    )
}

export default LoadScaledImage
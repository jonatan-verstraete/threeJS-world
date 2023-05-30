import { useLoader } from "@react-three/fiber"
import { Euler, TextureLoader } from "three"
import { VectorArr } from "Types/World"

type DefaultArgs={
    position?:VectorArr
    rotation?:VectorArr|Euler
    scale?:number
    path:string
}


const LoadImage =({path,position=[0,0,0],scale=1,rotation=[0,0,0]}:DefaultArgs):JSX.Element =>{
    const texture = useLoader(TextureLoader, path)
    return (
      <mesh
      position={position}
      scale={scale}
      rotation={rotation}
      >
        <planeBufferGeometry attach="geometry" args={[3, 3]} />
        <meshBasicMaterial attach="material" map={texture} />
      </mesh>
    )
}

export default LoadImage
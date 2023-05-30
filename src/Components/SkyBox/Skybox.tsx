import { useTexture } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { WebGLCubeRenderTarget } from "three";
// import img from './stars.jpeg'

function SkyBox({path}:{path:string}) {
    const {gl} = useThree();
    
    const texture = useTexture(path)
    const formatted = new WebGLCubeRenderTarget(texture.image.height).fromEquirectangularTexture(gl, texture)
    return(
        <primitive attach="background" object={formatted.texture} />
    )
    }

export default SkyBox
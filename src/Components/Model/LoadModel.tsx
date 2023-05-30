import { useGLTF } from "@react-three/drei"
import { useLoader } from "@react-three/fiber"
import { useMemo } from "react"
import { GLTFLoader } from "three-stdlib"

const LoadModel=({ path }:{path:string}) => {
    const { scene } = useGLTF(path)
    return <primitive object={scene} />
}


export const LoadModelClone = ({ path}:{path:string}) => {
    const { scene } = useLoader(GLTFLoader, path)
    const copiedScene = useMemo(() => scene.clone(), [scene])
  
    return <primitive object={copiedScene} />
};




// const LoadMode2l = ({ path }:{path:string}) => {
//     const [ gltf ]: any = useLoader(GLTFLoader, path, loader => {
//      const dracoLoader = new DRACOLoader();
//      dracoLoader.setDecoderPath('/draco/gltf/');
//      loader.setDRACOLoader(dracoLoader);
//     });
   
//     return <primitive object={gltf.scene} />;
// }

export default LoadModel
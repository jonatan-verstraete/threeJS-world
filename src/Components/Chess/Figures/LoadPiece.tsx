
import { useLoader } from "@react-three/fiber"

import { GLTFLoader } from "three-stdlib"
import { GLTFResult } from "Types/ChessTypes"

type loadTypes ={
    path:string,
    color: "w"|"b"
}



export const LoadPiece = ({path, color}:loadTypes):JSX.Element => {
    const { nodes } = useLoader(GLTFLoader, path) as GLTFResult

    return (
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder.geometry}
            material={nodes.Cylinder.material}
        >
            {/* <meshStandardMaterial roughness={0.1} metalness={0.7} color={color === "w" ? 0xffeeee : 0x333355} /> */}
            <meshPhongMaterial 
                shininess={100}
                color={color === "w" ? 0xffeeee : 0x88888f}
                flatShading={true}
            />
        </mesh>
    )
};


export default LoadPiece
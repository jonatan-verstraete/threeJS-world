import { useFrame, useThree } from "@react-three/fiber"
import { useRef } from "react"


type CusorProps={
    state:boolean,
    type?: 'pointer'|'grab'
}
/**
 * Cursor
 * Object that follows mouse
 * @param param0 
 * @returns 
 */
const Cursor=({state=false, type="pointer"}:CusorProps)=>{
    const ref = useRef(null!) as any
    // const player=useContext(PlayerContext) as any

    const { camera } = useThree()

    // const texture = useTexture(`Images/${type}.png`)

    // useFrame(({ mouse }) => {
    //     if(!ref.current)return
    //     const x = (mouse.x * viewport.width) / 2
    //     const y = (mouse.y * viewport.height) / 2
    //     ref.current.position.set(x, y, 0)
    //     ref.current.rotation.set(-y, x, 0)
    // })
    useFrame(({ mouse }) => {
        
        // const vector = new Vector3(mouse.x, mouse.y, 0);
        // vector.unproject(camera);
        ref.current.position.set(camera.position.x, camera.position.y, camera.position.z+2);
        ref.current.rotation.set(camera.rotation.x, camera.rotation.y, camera.rotation.z);

        //player.position?console.log(camera.getWorldDirection(player.position as Vector3)):console.log(player)
        // console.log([vector.x, vector.y, camera.rotation.x].map(i=>i.toFixed(3)))
    })


    return (
    <mesh ref={ref} scale={[.1,.1,.1]}>
        <sphereGeometry attach="geometry" args={[1, 32, 32]} />
          <meshStandardMaterial
            color={"red"} />
        {/* <primitive attach="material" object={texture} /> */}
    </mesh>
    )
}

export default Cursor
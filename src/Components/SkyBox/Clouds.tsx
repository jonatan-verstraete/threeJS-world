import { useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three'

export function Skybox({ fog=true, path = '.Textures/earth/earth.jpeg', rotation = [0, -Math.PI / 2, 0] }) {
  const map = useLoader(TextureLoader, path)
  return (
    // @ts-expect-error
    <mesh rotation={rotation}>
      <sphereBufferGeometry args={[1000, 300, 300]} />
      <meshBasicMaterial fog={fog} map={map} />
    </mesh>
  )
}
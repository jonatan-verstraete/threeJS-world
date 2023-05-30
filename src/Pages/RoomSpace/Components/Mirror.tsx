import { Reflector, useTexture } from "@react-three/drei"

const Mirror=(args:any)=> {
    const [roughness, normal] = useTexture(['Textures/floor.jpeg', 'Textures/normal-scratches.jpeg'])
    return (
      // <Reflector blur={[400, 100]} resolution={512} args={[10, 10]} mirror={0.5} mixBlur={6} mixStrength={1.5} rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
      //   {(Material:any, props:any) => <Material color="" metalness={0.4} roughnessMap={floor} normalScale={[2, 2] as any} normalMap={normal}  {...props} />}
      // </Reflector>
      <Reflector 
        resolution={1024} 
        args={[10, 10]}
        mirror={0.9} 
        // blur={[400, 400]} 
        // mixBlur={6} 
        mixStrength={10} 
        {...args}
        // rotation={rotateVector(-90,0,90)}
        // position={[0,ground0+1,0]}
        >
      {(Material:any, props:any) => 
      <Material 
        color="#aaf" 
        metalness={0.4} 
        roughnessMap={roughness} 
        normalScale={[2, 2] as any} 
        normalMap={normal}  
        // side={DoubleSide}
        {...props} />
        }
    </Reflector>
    )
  }
export default Mirror
import { Text3D } from '@react-three/drei'

const Text3d=({text='test',textOptions}:{text:string,textOptions?:any})=>{

    return (
        <Text3D {...textOptions} font={'Fonts/Space-Grotesk-Light_Regular.json'}>
            {
                text
            }
            <meshNormalMaterial />
        </Text3D>
    )
}

export default Text3d
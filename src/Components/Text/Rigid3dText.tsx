import { RigidBody } from '@react-three/rapier'
import { useMemo } from 'react'
import Text3d from './Text3d'

const Rigid3dText=({text}:{text:string})=>{

    const letters = useMemo(()=>
        text.split('').map((i:string,idx:number)=><RigidBody key={'rigidletter'+text+'-'+idx}>
            <Text3d text={i}  textOptions={Object({position:[idx*0.8,0,0]})}/>
        </RigidBody>)
    ,[text])

    return (
    <>
        {
            letters
        }
    </>
    )
}

export default Rigid3dText
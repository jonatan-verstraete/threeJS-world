import LoadImage from "Components/Image/LoadImage"
import { ROOM_CONFIG } from "Configs/roomConfig"
import { useMemo } from "react"


const DoorPoster=({roomId}:{roomId:string})=>{

    const posters=useMemo(()=>
        Object.fromEntries(Object.values(ROOM_CONFIG.ROOMS).map((i)=>
            [i.id,i.poster ? <LoadImage path={i.poster}/> : null]
        ).filter(i=>i[1]))
    ,[])

    if(!posters[roomId])return<></>

    return(
        <mesh position={[0,0.4,0.2]} scale={[.4,.4,1]} rotation={[0,0,0]} >
            {
                posters[roomId]
            }
        </mesh>
    )
}

export default DoorPoster
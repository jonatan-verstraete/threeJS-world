/* eslint-disable @typescript-eslint/no-unused-vars */
import { Html } from "@react-three/drei";
import { ROOM_CONFIG } from "Configs/roomConfig"
import { useMemo, useRef, useState } from "react"

import { rotateVector } from 'Utils/helper'




const RoomConfirmation=({roomId=''}:{roomId:string})=>{

    // const conf=useMemo(()=>Object({
    //     ...Object.values(ROOM_CONFIG.ROOMS).map(r=>{
    //         return {
    //             description: r.description,
    //             title: r.label,
    //             poster: r.poster
    //         }
    //     })
    // }),[])


    // extract roomconfig properties
    // could be made into a useRoom(roomId) hook
    // maybe useless but lightweightobject should be faster?
    const conf=useMemo(()=>Object.fromEntries(
        Object.entries(ROOM_CONFIG.ROOMS).map((entry)=>{
            const [key,val]=entry
            return [[key],{
                description: val.description,
                title: val.label,
                poster: val.poster
            }]
        })
    ),[])


    // const scene = useRef(null!);
    // const [rot,setRot]=useState([0,0,0])
    //   useFrame(() => {
    //     if(!scene.current)return
    //     setRot(scene.current.rotation)
    //   });


    if(!roomId)return (<></>)
    const {description, label:title}=conf[roomId]

    return(
        <Html 
            sprite
            // rotation={rotateVector(45,90,0)} 
            position={[2,0,1]}
            >
            <div id="overlay">
                <div className="content">
                    <h1 className="title">{ title }</h1>
                    <p>
                        {
                            description
                        }
                    </p>  
                    {/* <button onClick={start}>Start</button>
                    <button onClick={pause}>Pause</button> */}
                </div>
            </div>
        </Html>
    )
}

export default RoomConfirmation
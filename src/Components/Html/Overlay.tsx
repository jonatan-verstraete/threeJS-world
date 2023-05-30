import { Html } from "@react-three/drei"

type Props={
    children:any,
    state?:boolean
}

const HTMLOverlay=({children, state=true}:Props)=>{
    return (

            <div className={(state?'hide':'')} id="overlay">
                {
                    children
                }
            </div>

    )
}


export default HTMLOverlay
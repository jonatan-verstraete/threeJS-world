import {  Stars,OrbitControls } from "@react-three/drei";
import Floor from "Components/Plane/Floor";



/**
 * PageDev
 * Example page for page without configuration and ROOM_ID
 * but added in routing
 * @returns JSX.Element
 */
const PageDev = ():JSX.Element => {

    return (
      <>
        <Floor size={20}/>
        <Stars />
        <OrbitControls/>
      </>
    )
};
export default PageDev
import { Plane } from "@react-three/drei";
import { DoubleSide} from "three";
import Text2D from "Components/Text/Text2d";

/**
 * Instructions component
 */
// todo:: make this
const Instructions = ({title,children}:{title:string,children:any}) => {
  const size=10//useRef()
  const args = [size, size] as [number, number];

  return (
      <Plane args={args} rotation={[0, 0, 0]} >
        <Text2D text={title} />
        {children}
        <meshBasicMaterial attach="material" color={'lightbrown'}  side={DoubleSide} />
      </Plane>
  );
}
 
 export default Instructions
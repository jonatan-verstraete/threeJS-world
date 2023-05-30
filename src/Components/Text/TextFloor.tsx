import Text2D from "./Text2d";
import { rotateVector } from "Utils/helper";





const TextFloor = ({position, text}:{position:any, text:string}) => {
    return (
          <Text2D 
            text={text} 
            options={Object({
              position:position,
              rotation:rotateVector(-90,0,0),
            })}
            optionsFont={Object({
              fontSize:21, 
              color:"white"
            })}
          />
    )
};


export default TextFloor

import { MeshStandardMaterial } from "three";


const Standard = (args:any): JSX.Element => {
  return (
    <meshStandardMaterial attach="material" {...args} />
  );
};
const Empty=new MeshStandardMaterial()
const Red=(<Standard color={'red'}/>)
const Blue=(<Standard color={'blue'}/>)



export{
  Empty,
  Red,
  Blue
}
export default Standard

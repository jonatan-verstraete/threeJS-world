
import MazeWall from "Components/Wall/MazeWall";
import { RoomContext } from "Pages/Rooms";
import { ReactComponentElement, useContext, useMemo, useRef} from "react";

import { degToRad } from "three/src/math/MathUtils";
import { GenerateMaze } from "../functions/generateMaze";








const Maze = (args:any):ReactComponentElement<any> => {
  const roomConfig= useContext(RoomContext) as any
  const {size, ground0, wallHeight} = roomConfig
  const seed=2//const [seed, setSeed]=useState(19)
  const mWallheight=wallHeight*0.8



  const refWalls = useRef([]) as any;


  useMemo(() => {
    if(!refWalls.current) return
    const maze2d=GenerateMaze({size:size, seed:seed})
    const wallSize=[0.2, mWallheight || 5, 2]

    for(let cell of maze2d){
      // y-> z  is  2d-> 3d
      const {x, y:z,rotate}=cell as any

      refWalls.current.push(<MazeWall 
        position={[x*2, wallSize[1]/2, z*2]} 
        rotation={[0,!rotate?degToRad(90):0,0]} 
        size={wallSize}
        key={'maze-wall-item-'+maze2d.indexOf(cell)}
      />)
    }

  },[mWallheight, seed, size]);




  return (
    <>
    <group name="maze-walls" position={[-(size-1), ground0+0.001, -(size-1)]}>
      {
        refWalls.current
      }
    </group>
    </>
  )
};


export default Maze
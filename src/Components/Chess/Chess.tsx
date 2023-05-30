import { RoomContext } from "Pages/Rooms"
import { useContext, useMemo } from "react"
import { VectorArr } from "Types/World"
import Board from "./Board/Board"
import { FiguresPropsType } from "Types/ChessTypes"


/**
 * @param scale number
 * @param position [number,number,number] 
 * @returns ChessBoard
 * 
 * 
 * @feature_updates anhance with chess.js and it's AI, but lerp smooth motion of the pieces
 */



const Chess = ({scale=1, position}:{scale?:number,position?:VectorArr}) => {
  const figures = useMemo<Array<Array<FiguresPropsType|null>>>(()=>[[{square:"a8",type:"r",color:"b"},{square:"b8",type:"n",color:"b"},{square:"c8",type:"b",color:"b"},{square:"d8",type:"q",color:"b"},{square:"e8",type:"k",color:"b"},{square:"f8",type:"b",color:"b"},{square:"g8",type:"n",color:"b"},{square:"h8",type:"r",color:"b"}],[{square:"a7",type:"p",color:"b"},{square:"b7",type:"p",color:"b"},{square:"c7",type:"p",color:"b"},{square:"d7",type:"p",color:"b"},{square:"e7",type:"p",color:"b"},{square:"f7",type:"p",color:"b"},{square:"g7",type:"p",color:"b"},{square:"h7",type:"p",color:"b"}],[null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null],[{square:"a2",type:"p",color:"w"},{square:"b2",type:"p",color:"w"},{square:"c2",type:"p",color:"w"},{square:"d2",type:"p",color:"w"},{square:"e2",type:"p",color:"w"},{square:"f2",type:"p",color:"w"},{square:"g2",type:"p",color:"w"},{square:"h2",type:"p",color:"w"}],[{square:"a1",type:"r",color:"w"},{square:"b1",type:"n",color:"w"},{square:"c1",type:"b",color:"w"},{square:"d1",type:"q",color:"w"},{square:"e1",type:"k",color:"w"},{square:"f1",type:"b",color:"w"},{square:"g1",type:"n",color:"w"},{square:"h1",type:"r",color:"w"}]],[])
  const board = useMemo<Array<Array<string>>>(()=>[["a8","b8","c8","d8","e8","f8","g8","h8"],["a7","b7","c7","d7","e7","f7","g7","h7"],["a6","b6","c6","d6","e6","f6","g6","h6"],["a5","b5","c5","d5","e5","f5","g5","h5"],["a4","b4","c4","d4","e4","f4","g4","h4"],["a3","b3","c3","d3","e3","f3","g3","h3"],["a2","b2","c2","d2","e2","f2","g2","h2"],["a1","b1","c1","d1","e1","f1","g1","h1"]],[])

  const config = useContext(RoomContext)
  const {ground0} = config as any


  return (
      <mesh 
        position={position?position:[0,ground0,0]} 
        scale={[scale,scale,scale]}
      >
        <Board
          board={board}
          figures={figures}
        />
      </mesh>
  )
}

export default Chess

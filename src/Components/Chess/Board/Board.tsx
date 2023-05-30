import { FC, Fragment } from 'react'
import Cell from './Cell'
import Figure from '../Figures/Figure'
import { RigidBody } from '@react-three/rapier'

type BoardPropsType = {
  board: any
  figures: Array<Array<any>>
}


const Board: FC<BoardPropsType> = ({ board, figures }) => {
  return (
    <group position={[-3.5, -0.5, 3.5]} >
      <RigidBody type='fixed'>
        {
          board.map((row:any, rowIndex:number) => (
            <Fragment key={rowIndex}>
              {
                row.map((cell:any, cellIndex:number) => (
                  <Cell
                    key={rowIndex.toString() + cellIndex.toString()}
                    cell={cell}
                    color={(cellIndex + rowIndex) % 2 === 0 ? 'white' : 'black'}
                    position={{ x: rowIndex, y: -cellIndex }}
                  />
                ))
              }
            </Fragment>
          ))
        }
      </RigidBody>

      {
        figures.map((row, rowIndex) => (
          <Fragment key={rowIndex}>
            {
              row.map((figure, cellIndex) => (
                <Figure
                  key={rowIndex.toString() + cellIndex.toString()}
                  position={{ x: rowIndex, y: -cellIndex }}
                  figure={figure}
                />
              ))
            }
          </Fragment>
        ))
      }
    </group>
  )
}

export default Board

import { FC } from 'react'
import { FigureProps } from 'Types/ChessTypes'
import LoadPiece from './LoadPiece'
import { RigidBody } from '@react-three/rapier'



const paths={
  p:'pawn',
  n:'knight',
  b:'rook',
  r:'castle',
  q:'queen',
  k:'king',
}


const Figure: FC<FigureProps> = ({ figure, position }) => {
  if(!figure || !figure.type) return null

  return(
    <RigidBody
      colliders={'cuboid'}
      // colliders={'trimesh'}
      position={[position.x, 0.4, position.y]}
      scale={[0.3, 0.3, 0.3]}
      key={JSON.stringify(Math.random())}
      // gravityScale={0.01}
      mass={2}
      lockRotations={true}
      restitution={0}
    >
      <LoadPiece path={`Models/Chess/${paths[figure.type]}.gltf`} color={figure.color} />
    </RigidBody>
  )
}

export default Figure
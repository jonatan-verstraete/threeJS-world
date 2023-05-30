import { FC } from 'react'

type CellPropsType = {
  cell: any
  position: { x: number, y: number }
  color: 'white' | 'black'
}

const Cell: FC<CellPropsType> = ({color,position}) => {
  return (
    <>

      <mesh
        scale={[1, 1, 0.1]}
        position={[position.x, 0, position.y]}
        rotation={[Math.PI / -2, 0, 0]}
        receiveShadow
        >
        <meshStandardMaterial roughness={.1} metalness={0.4} color={color} />
        <boxGeometry />
      </mesh>
      
    </>
  )
}

export default Cell

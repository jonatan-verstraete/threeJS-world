
import { BoxGeometry, MeshLambertMaterial, Object3D } from "three";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const tempBoxes = new Object3D();

const Boxes = ({width=5,height=5 }) => {
  const material = new MeshLambertMaterial({ color: "red" });
  const boxesGeometry = new BoxGeometry(0.5, 0.5, 0.5);
  const ref = useRef() as any;

  useFrame(({ clock }) => {
    let counter = 0;
    const t = clock.oldTime * 0.001;
    for (let x = 0; x <width; x++) {
      for (let z = 0; z <height; z++) {
        const id = counter++;
        tempBoxes.position.set(width / 2 - x, 0,height / 2 - z);
        tempBoxes.rotation.y = t;
        tempBoxes.updateMatrix();
        ref.current.setMatrixAt(id, tempBoxes.matrix);
      }
    }
    ref.current.instanceMatrix.needsUpdate = true;
  });

  return <instancedMesh ref={ref} args={[boxesGeometry, material,width *height]} />;
};
  

export default Boxes
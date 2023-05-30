

const Glass = (args:any): JSX.Element => {
  //https://codesandbox.io/s/glas-transmission-fresnel-enx1u
  const v={
        roughness: 0.5,
        thickness: 0.5,
        transmission: 1.0,
        ior: 1.5,
        color: 0xffffff,
        envMapIntensity: 17,
        transparent:true,
        opacity:0.6,
        ...args
    }

  return (
    <meshPhysicalMaterial
      {...v}
    />
  );
};

export default Glass

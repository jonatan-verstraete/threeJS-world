const PointSun=(props:any)=>{

    //     mapSize:{
    //         width: 256,
    //         height: 256
    //     },
    //     camera:{
    //         near: 0.5,
    //         far: 25,
    //         left: -10,
    //         right: 10,
    //         top: 10,
    //         bottom: -10,
    //     },
    //     radius: 5,
    //     blurSamples: 25

    return(
        <pointLight 
            position={[0,2,40]}
            intensity={0.3} 
            color={0xffffff}
            //decay={400}
            castShadow
            shadow-mapSize={[1024,1024]}
            // shadow-mapSize-width={512}
            // shadow-mapSize-height={512}
            shadow-camera-far={100}


            // shadow-camera-left={-10}
            // shadow-camera-right={10}
            shadow-camera-top={10}
            // shadow-camera-bottom={-10}

            shadow-radius={-1}
            shadow-bias={-0.0001}
            shadow-blurSamples={0}
        />
    )
}

export default PointSun
// import { ClimbingBoxLoader } from "react-spinners";
import { Html, useProgress } from '@react-three/drei'
import HTMLOverlay from 'Components/Html/Overlay'




const LoadingScreen = ()=> {
  const { progress } = useProgress()
  return (
    <Html fullscreen>
      <div className="text-white fcenter" id='overlay'>

          <div className="scale2">
            <div className="loader_a"></div>
            <div className='loader_a-progess'>{progress ? progress.toFixed(1) : "0.0"} % loaded</div>
            
          </div>
        </div>
    </Html>
  )
}

export default LoadingScreen


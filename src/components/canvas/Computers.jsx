import {Suspense,useEffect,useState} from 'react';
import { Canvas } from '@react-three/fiber';
// To draw in canvas
// useGLTF : render 3d Models
import { OrbitControls, Preload, useGLTF} from '@react-three/drei';
import CanvasLoader from "../Loader";
const Computers = ({isMobile}) => {
  const computer = useGLTF('./desktop_pc/scene.gltf')
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1}/>
      <spotLight 
      position={[-20,50,10]}
      angle={0.12}
      penumbra={1}
      intensity={1}
      castShadow
      shadow-mapSize={1024}
      />
      <primitive 
      object={computer.scene}
      scale={isMobile ? 0.7 : 0.75}
      position={isMobile ? [0,-3,-2.2] :[0,-3.25,-1.5]}
      rotation={[-0.01,-0.2,-0.1]}

      />
    </mesh>
  )
}
const ComputerCanvas =()=>{
  const [isMobile, setIsMobile] = useState(false)

  useEffect(()=>{
    // Add Event listener for changes to the screen Size
    const mediaQuery = window.matchMedia('(max-width:500px)')
    // Set the init value of th 'isMobile' state variable
    setIsMobile(mediaQuery.matches)

    // Define a callback to handle changes to the media query
    const handleMediaQueryChange = (event)=>{
      setIsMobile(event.matches)
    }
    // Add callback as a listener for changes to the media query 
    mediaQuery.addEventListener('change', handleMediaQueryChange)
    
    // Remove a listener when component unmount
    return () =>{
      mediaQuery.removeEventListener('change', handleMediaQueryChange)
    }
  },[])
  return(
    <Canvas
      frameloop='demand'
      shadows
      camera={{position:[20,3,5], fov:25}}
      gl={{preserveDrawingBuffer:true}}
    >
      {/* Come from React! -> Allow to have loader */}
      <Suspense fallback={<CanvasLoader />}>
      {/* <Suspense > */}
        <OrbitControls
          enableZoom={false}
          // Arround with specific axis not 360
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
         />
         <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />

    </Canvas>
  )
}
export default ComputerCanvas
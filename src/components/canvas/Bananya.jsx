import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from '../Loader'

const Bananya = ({ isMobile }) => {
  const bananya = useGLTF('./bananya/scene.gltf')

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <pointLight intensity={1} />
      <spotLight 
        position={[80,30,30]}
        angle={0.12}
        penumbra={1}
        intensity={0.25}
        castShadow
        shadow-mapSize={1024}

      />
      <primitive 
      object={bananya.scene} 
      scale={isMobile ? 0.5 : 2.25}
      position={isMobile ? [0, 0.4, 0] : [0, 0.4, 0]}
      rotation={[0, 1.7, 0]}
      />
    </mesh>
  )
}

const BananyaCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500)');

    setIsMobile(mediaQuery.matches);
    
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
    frameloop='demand'
    shadows
    camera={{ position: [20, 3, 5], fov: 25 }}
    gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
        enableZoom={false} 
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        />
        <Bananya isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default BananyaCanvas
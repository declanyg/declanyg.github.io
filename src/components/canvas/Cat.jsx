import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from '../Loader'

const Cat = () => {
    const cat = useGLTF('./cat_lamp/scene.gltf')
    return (
        <mesh>
        <hemisphereLight intensity={0.15} groundColor='black' />
        <pointLight intensity={1} />
        <spotLight 
          position={[0, 0, 0]}
          angle={0.12}
          penumbra={1}
          intensity={1}
          castShadow
          shadow-mapSize={1024}
  
        />
        <primitive 
        object={cat.scene} 
        scale={0.75}
        position={[0, 0, 0]}
        rotation={[-0.01, -0.2, -0.1]}
        />
      </mesh>
    )
  }

  const CatCanvas = () => {
    return (
      <Canvas
        shadows
        frameloop="demand"
        gl={{ preserveDrawingBuffer: true }}
        camera= {{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [0, 0, 0]
        }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls 
            // autoRotate
            enableZoom={false}
            maxPolarAngle={Math.PI/2}
            minPolarAngle={Math.PI/2}
          />
          <Cat />
        </Suspense>
      </Canvas>
    )
  }
  
  export default CatCanvas
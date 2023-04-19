import React, { Suspense, useEffect, useState } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, Preload, PresentationControls, useGLTF, Stage } from "@react-three/drei";
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import CanvasLoader from '../Loader'

const Cat = () => {
    const cat = useGLTF('./cat_lamp/scene.gltf')
    //const cat = useLoader(OBJLoader, './cat_lamp/scene.obj');
    return (
        <mesh>
        <hemisphereLight intensity={0.15} groundColor='black' />
        <pointLight intensity={0} />
        <spotLight 
          position={[0, 0, 0]}
          angle={0}
          penumbra={1}
          intensity={1}
          castShadow
          shadow-mapSize={1024}
  
        />
        <primitive 
        object={cat.scene} 
        scale={0.1}
        position={[0, 0, 0]}
        rotation={[0, 0, 0]}
        />
      </mesh>
    )
  }

  const CatCanvas = () => {
    return (
      <Canvas dpr={[1,2]} shadows camera={{fov: 45}} >
        <PresentationControls speed={1.5} zoom={.5} polar={[-Math.PI/2, Math.PI/4]}>
          <Stage >
            <Cat scale={0.1} />
          </Stage>
        </PresentationControls>
      </Canvas>
    )
  }
  
  export default CatCanvas
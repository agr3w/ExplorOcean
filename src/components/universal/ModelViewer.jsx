import React, { Suspense, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, useGLTF } from '@react-three/drei';

function Model({ url }) {
  const { scene } = useGLTF(url);
  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.material.metalness = 0.8;
        child.material.roughness = 0.1;
      }
    });
  }, [scene]);
  return <primitive object={scene} scale={2} />;
}

export default function ModelViewer({ modelUrl, backgroundPreset }) {
  return (
    <Canvas style={{ height: 400, background: '#02101a', borderRadius: 12 }}>
      <ambientLight intensity={0.2} />
      <Suspense fallback={null}>
        <Model url={modelUrl} />
        {backgroundPreset ? <Environment preset={backgroundPreset} background /> : null}
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
}
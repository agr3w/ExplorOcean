import React, { Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF } from "@react-three/drei";

function Model({ url, scale = 2, position = [0, 0, 0] }) {
  const { scene } = useGLTF(url);
  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.material.metalness = 0.8;
        child.material.roughness = 0.9;
      }
    });
  }, [scene]);
  return <primitive object={scene} scale={scale} position={position} />;
}

export default function ModelViewer({
  modelUrl,
  backgroundPreset,
  modelScale,
  modelPosition,
}) {
  return (
    <Canvas style={{ height: 400, background: "#02101a", borderRadius: 12 }}>
      <ambientLight intensity={0.2} />
      <Suspense fallback={null}>
        <Model url={modelUrl} scale={modelScale} position={modelPosition} />
        {backgroundPreset ? (
          <Environment preset={backgroundPreset} background />
        ) : null}
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
}

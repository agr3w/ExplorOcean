import React, { useRef, Suspense } from 'react';
import { useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import useSlowRotation from '../../hooks/useSlowRotation';

function EarthGlobeInner() {
  const earthTexture = useLoader(THREE.TextureLoader, '/assets/earthmap1k.jpg');
  const meshRef = useRef();
  // useSlowRotation(meshRef, 0.0001);

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[4, 64, 64]} />
      <meshStandardMaterial map={earthTexture} />
    </mesh>
  );
}

export default function EarthGlobe() {
  return (
    <Suspense fallback={null}>
      <EarthGlobeInner />
    </Suspense>
  );
}
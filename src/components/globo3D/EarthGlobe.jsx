import React, { useRef } from 'react';
import { useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import useSlowRotation from '../../hooks/useSlowRotation';

export default function EarthGlobe() {
  const earthTexture = useLoader(THREE.TextureLoader, '/src/assets/earthmap1k.jpg');
  const meshRef = useRef();
  // useSlowRotation(meshRef, 0.0001);

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[4, 64, 64]} />
      <meshStandardMaterial map={earthTexture} />
    </mesh>
  );
}
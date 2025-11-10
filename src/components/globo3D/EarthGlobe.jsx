import React, { useRef, Suspense, useState, useEffect } from 'react';
import { useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import { Html } from '@react-three/drei';
import { CircularProgress } from '@mui/material';

function EarthGlobeInner() {
  const [textureError, setTextureError] = useState(false);
  const meshRef = useRef();
  let earthTexture;

  try {
    earthTexture = useLoader(THREE.TextureLoader, '/assets/earthmap1k.jpg');
  } catch (error) {
    earthTexture = null;
  }

  useEffect(() => {
    if (!earthTexture) setTextureError(true);
  }, [earthTexture]);

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[4, 64, 64]} />
      <meshStandardMaterial map={earthTexture} color={textureError ? "gray" : undefined} />
      {textureError && (
        <Html center>
          <div style={{
            background: 'rgba(0,0,0,0.7)',
            color: 'white',
            padding: '16px',
            borderRadius: '8px',
            fontSize: '1.2rem'
          }}>
            Não foi possível carregar a textura do globo.
          </div>
        </Html>
      )}
    </mesh>
  );
}

export default function EarthGlobe() {
  return (
    <Suspense fallback={<CircularProgress color="info" />}>
      <EarthGlobeInner />
    </Suspense>
  );
}
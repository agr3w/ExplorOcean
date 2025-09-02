// src/components/Globe3D/StarField.jsx

import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

const StarField = () => {
  const ref = useRef();
  const starCount = 5000;
  const radius = 50; // Aumente o raio para as estrelas ficarem bem distantes
  const positions = useMemo(() => {
    const coords = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount; i++) {
      const i3 = i * 3;
      // Gerar posições aleatórias em uma esfera para uma distribuição uniforme
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);
      coords[i3] = x;
      coords[i3 + 1] = y;
      coords[i3 + 2] = z;
    }
    return coords;
  }, []);

  useFrame((state, delta) => {
    // Diminua a velocidade para um movimento sutil
    ref.current.rotation.x -= 0.0001; 
    ref.current.rotation.y -= 0.0001;
  });

  return (
    <Points ref={ref} positions={positions} stride={3}>
      <PointMaterial
        transparent
        color="#ffffff"
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </Points>
  );
};

export default StarField;
import React, { useState } from 'react';
import { Html } from '@react-three/drei';

export default function MarianaTrenchPin({ onClick, radius = 2.05 }) {
  const [hovered, setHovered] = useState(false);
  const phi = (11 * Math.PI) / 180;
  const theta = (142 * Math.PI) / 180;
  const x = radius * Math.cos(phi) * Math.cos(theta);
  const y = radius * Math.sin(phi);
  const z = radius * Math.cos(phi) * Math.sin(theta);

  return (
    <mesh
      position={[x, y, z]}
      onClick={onClick}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <sphereGeometry args={[0.09, 16, 16]} />
      <meshStandardMaterial color="red" emissive="orange" emissiveIntensity={0.7} />
      {hovered && (
        <Html center style={{ pointerEvents: 'none', background: 'rgba(30,60,120,0.85)', color: '#fff', padding: '6px 12px', borderRadius: 8, fontSize: 14 }}>
          Fossa das Marianas
        </Html>
      )}
    </mesh>
  );
}
import React, { useState } from 'react';
import { Html } from '@react-three/drei';
import { geoTo3dPosition } from '../../../utils/geoTo3dPosition';

export default function MarianaTrenchPin({ onClick, radius = 4 }) {
  const [hovered, setHovered] = useState(false);
  const position = geoTo3dPosition(11, 142, radius);

  return (
    <mesh
      position={position}
      onClick={onClick}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <sphereGeometry args={[0.12, 16, 16]} />
      <meshStandardMaterial color="red" emissive="orange" emissiveIntensity={0.7} />
      {hovered && (
        <Html center style={{ pointerEvents: 'none', background: 'rgba(30,60,120,0.85)', color: '#fff', padding: '6px 12px', borderRadius: 8, fontSize: 14 }}>
          Fossa das Marianas
        </Html>
      )}
    </mesh>
  );
}
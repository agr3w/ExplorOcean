import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, Html } from '@react-three/drei';
import * as THREE from 'three';

function latLonToVector3(lat, lon, radius) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);
  return new THREE.Vector3(x, y, z);
}

export default function GenericPin({ pin, onClick }) {
  const [hovered, setHovered] = useState(false);
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime();
      const scale = 1 + Math.sin(time * 2 + pin.lat) * 0.15;
      meshRef.current.scale.set(scale, scale, scale);
    }
  });

  const position = latLonToVector3(pin.lat, pin.lon, 4.1);

  return (
    <Sphere
      ref={meshRef}
      position={position}
      args={[0.08, 16, 16]}
      onClick={(e) => { e.stopPropagation(); onClick(pin); }}
      onPointerOver={(e) => { e.stopPropagation(); setHovered(true); }} // Adicione stopPropagation
      onPointerOut={() => setHovered(false)}
    >
      <meshStandardMaterial
        color={hovered ? '#ff6b6b' : '#36d1e0'}
        emissive={hovered ? '#ff6b6b' : '#36d1e0'}
        emissiveIntensity={0.8}
        toneMapped={false}
      />
      
      {/* 2. ADICIONE O LABEL HTML AQUI */}
      {hovered && (
        <Html
          position={[0, 0.40, 0]} // Posição ligeiramente acima do pino
          center // Centraliza o conteúdo
          distanceFactor={10} // Faz o label diminuir de tamanho realisticamente
        >
          <div style={{
            padding: '4px 8px',
            background: 'rgba(2, 16, 26, 0.8)',
            backdropFilter: 'blur(5px)',
            border: '1px solid rgba(54, 209, 224, 0.5)',
            borderRadius: '8px',
            color: 'white',
            fontSize: '14px',
            whiteSpace: 'nowrap', // Impede que o nome quebre a linha
          }}>
            {pin.label}
          </div>
        </Html>
      )}
    </Sphere>
  );
}
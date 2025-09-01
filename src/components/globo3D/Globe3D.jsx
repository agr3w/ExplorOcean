// src/components/Globe3D/Globe3D.jsx (Versão Atualizada)

import React from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import StarField from './StarField';

// Componente do globo
function EarthGlobe() { // Renomeado para evitar conflito com o wrapper Globe3D
  const earthTexture = useLoader(THREE.TextureLoader, '/src/assets/earthmap1k.jpg');
  return (
    <mesh>
      <sphereGeometry args={[2, 64, 64]} />
      <meshStandardMaterial map={earthTexture} />
    </mesh>
  );
}

// Pino da Fossa das Marianas
function MarianaTrenchPin({ onClick }) {
  const phi = (11 * Math.PI) / 180;
  const theta = (142 * Math.PI) / 180;
  const radius = 2.05;
  const x = radius * Math.cos(phi) * Math.cos(theta);
  const y = radius * Math.sin(phi);
  const z = radius * Math.cos(phi) * Math.sin(theta);
  return (
    <mesh position={[x, y, z]} onClick={onClick}>
      <sphereGeometry args={[0.09, 16, 16]} />
      <meshStandardMaterial color="red" emissive="orange" emissiveIntensity={0.7} />
    </mesh>
  );
}

// Linha da Placa do Pacífico
function PacificPlate({ onClick }) {
  const plateCoords = [
    [0, -135],
    [30, -150],
    [-15, -120],
    [-30, -100],
    [-45, -80],
  ];
  const radius = 2.05;
  const points = plateCoords.map(([lat, lon]) => {
    const phi = (lat * Math.PI) / 180;
    const theta = (lon * Math.PI) / 180;
    const x = radius * Math.cos(phi) * Math.cos(theta);
    const y = radius * Math.sin(phi);
    const z = radius * Math.cos(phi) * Math.sin(theta);
    return new THREE.Vector3(x, y, z);
  });
  const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
  return (
    <line geometry={lineGeometry} onClick={onClick}>
      <lineBasicMaterial color="yellow" linewidth={4} />
    </line>
  );
}

// O componente Globe3D agora é o wrapper do Canvas
const Globe3D = ({ onMarianaClick, onPlateClick }) => {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} />
      <EarthGlobe /> {/* Renderize o globo dentro do Canvas */}
      <MarianaTrenchPin onClick={onMarianaClick} />
      <PacificPlate onClick={onPlateClick} />
      <OrbitControls />
      <StarField /> {/* Renderize o campo de estrelas aqui */}
    </Canvas>
  );
};

export default Globe3D;
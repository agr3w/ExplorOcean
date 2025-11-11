import React from 'react';
import { Canvas } from '@react-three/fiber';
import EarthGlobe from './EarthGlobe';
import StarField from './StarField';
import GenericPin from './GenericPin';
import { OrbitControls } from '@react-three/drei';

const Globe3D = ({ pins, onPinClick }) => {
  return (
    <Canvas camera={{ position: [0, 0, 12], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} />
      <EarthGlobe />
      {pins.map(pin => (
        <GenericPin key={pin.id} pin={pin} onClick={onPinClick} />
      ))}
      <OrbitControls enableZoom minDistance={6} maxDistance={20} enablePan={false} />
      <StarField />
    </Canvas>
  );
};

export default Globe3D;
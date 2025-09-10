import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import EarthGlobe from './EarthGlobe';
import MarianaTrenchPin from './elements/MarianaTrenchPin';
import PacificPlate from './elements/PacificPlate';
import StarField from './StarField';

const Globe3D = ({ showFossas, showPlacas, onMarianaClick, onPlateClick }) => {
  return (
    <Canvas camera={{ position: [0, 0, 12], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} />
      <EarthGlobe />
      {showFossas && <MarianaTrenchPin onClick={onMarianaClick} />}
      {showPlacas && <PacificPlate onClick={onPlateClick} />}
      <OrbitControls enableZoom minDistance={6} maxDistance={20} enablePan={false} />
      <StarField />
    </Canvas>
  );
};

export default Globe3D;
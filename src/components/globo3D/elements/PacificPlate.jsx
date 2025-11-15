import React from 'react';
import * as THREE from 'three';
import { geoTo3dPosition } from '../../../utils/geoTo3dPosition';

export default function PacificPlate({ onClick, radius = 4 }) {
  const plateCoords = [
    [0, -135],
    [30, -150],
    [-15, -120],
    [-30, -100],
    [-45, -80],
  ];
  const points = plateCoords.map(([lat, lon]) =>
    new THREE.Vector3(...geoTo3dPosition(lat, lon, radius))
  );
  const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);

  return (
    <line geometry={lineGeometry} onClick={onClick}>
      <lineBasicMaterial color="yellow" linewidth={4} />
    </line>
  );
}
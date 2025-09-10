import React from 'react';
import * as THREE from 'three';

export default function PacificPlate({ onClick, radius = 2.05 }) {
  const plateCoords = [
    [0, -135],
    [30, -150],
    [-15, -120],
    [-30, -100],
    [-45, -80],
  ];
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
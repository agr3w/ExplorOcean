import React, { useState } from 'react'
import { Canvas, useLoader } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

function Globe() {
  const earthTexture = useLoader(THREE.TextureLoader, '/src/assets/earthmap1k.jpg')
  return (
    <mesh>
      <sphereGeometry args={[2, 64, 64]} />
      <meshStandardMaterial map={earthTexture} />
    </mesh>
  )
}

function MarianaTrenchPin({ onClick }) {
  // Coordenadas aproximadas para a Fossa das Marianas
  const phi = (11 * Math.PI) / 180 // latitude
  const theta = (142 * Math.PI) / 180 // longitude
  const radius = 2.05

  const x = radius * Math.cos(phi) * Math.cos(theta)
  const y = radius * Math.sin(phi)
  const z = radius * Math.cos(phi) * Math.sin(theta)

  return (
    <mesh position={[x, y, z]} onClick={onClick}>
      <sphereGeometry args={[0.09, 16, 16]} />
      <meshStandardMaterial color="red" emissive="orange" emissiveIntensity={0.7} />
    </mesh>
  )
}

// Exemplo de linha representando parte da Placa do Pacífico
function PacificPlate({ onClick }) {
  // Pontos aproximados (latitude, longitude) convertidos para coordenadas esféricas
  const plateCoords = [
    [0, -135],   // Alaska
    [30, -150],  // Pacífico Norte
    [-15, -120], // Pacífico Equatorial
    [-30, -100], // Pacífico Sul
    [-45, -80],  // Perto da Antártida
  ]

  const radius = 2.05
  const points = plateCoords.map(([lat, lon]) => {
    const phi = (lat * Math.PI) / 180
    const theta = (lon * Math.PI) / 180
    const x = radius * Math.cos(phi) * Math.cos(theta)
    const y = radius * Math.sin(phi)
    const z = radius * Math.cos(phi) * Math.sin(theta)
    return new THREE.Vector3(x, y, z)
  })

  const lineGeometry = new THREE.BufferGeometry().setFromPoints(points)

  return (
    <line geometry={lineGeometry} onClick={onClick}>
      <lineBasicMaterial color="yellow" linewidth={4} />
    </line>
  )
}

export default function Globe3D() {
  const [showCard, setShowCard] = useState(false)
  const [cardContent, setCardContent] = useState(null)

  const handleMarianaClick = () => {
    setCardContent({
      title: 'Fossa das Marianas',
      text: 'A Fossa das Marianas é o ponto mais profundo dos oceanos, localizada no Oceano Pacífico. Sua profundidade máxima chega a cerca de 11.000 metros.'
    })
    setShowCard(true)
  }

  const handlePlateClick = () => {
    setCardContent({
      title: 'Placa do Pacífico',
      text: 'A Placa do Pacífico é uma das maiores placas tectônicas do planeta, cobrindo grande parte do Oceano Pacífico e sendo responsável por muitos terremotos e vulcões na região.'
    })
    setShowCard(true)
  }

  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative' }}>
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />
        <Globe />
        <MarianaTrenchPin onClick={handleMarianaClick} />
        <PacificPlate onClick={handlePlateClick} />
        <OrbitControls />
      </Canvas>
      {showCard && (
        <div
          style={{
            color: 'black',
            position: 'absolute',
            top: 40,
            left: 40,
            background: 'white',
            borderRadius: 8,
            boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
            padding: 20,
            maxWidth: 300,
            zIndex: 10,
          }}
        >
          <h3>{cardContent.title}</h3>
          <p>{cardContent.text}</p>
          <button onClick={() => setShowCard(false)}>Fechar</button>
        </div>
      )}
    </div>
  )
}
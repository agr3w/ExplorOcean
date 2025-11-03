import React from 'react';
import { Box, Tooltip } from '@mui/material'; // Importe o Tooltip
import { motion } from 'framer-motion';      // Importe o motion

const MapDisplay = ({ era }) => {
  return (
    <motion.div
      id="timeline-map"
      layoutId="map-container"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }}
      exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.4, ease: 'easeOut' } }}
      style={{
        width: '50%',
        height: '80%',
        minWidth: 260,
        minHeight: 180,
        maxWidth: '100vw',
        maxHeight: '60vh',
        borderRadius: '16px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
        position: 'relative',
        overflow: 'hidden',
        // Responsivo para mobile:
        ...(window.innerWidth < 600 ? {
          // marginTop: '350px',
          width: '95vw',
          height: '40vh',
          minHeight: 160,
          borderRadius: '10px',
        } : {}),
      }}
    >
      {/* Box para a imagem de fundo */}
      <Box sx={{
        width: '100%',
        height: '100%',
        background: `url(${era.mapImage}) no-repeat center center/cover`, // Mudei para cover para preencher
      }} />

      {/* Renderiza os Pontos de Interesse */}
      {era.pointsOfInterest && era.pointsOfInterest.map((point, index) => (
        <Tooltip key={index} title={point.text} arrow placement="top">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: [1, 1.4, 1] }} // Animação de pulsação
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: index * 0.3 }}
            style={{
              position: 'absolute',
              top: point.y,
              left: point.x,
              width: '16px',
              height: '16px',
              borderRadius: '50%',
              backgroundColor: 'rgba(54, 209, 224, 0.8)', // Usando o ciano do projeto
              border: '2px solid rgba(255, 255, 255, 0.9)',
              boxShadow: '0 0 15px rgba(54, 209, 224, 0.9)',
              cursor: 'pointer',
              transform: 'translate(-50%, -50%)', // Centraliza o ponto
            }}
          />
        </Tooltip>
      ))}
    </motion.div>
  );
};

export default MapDisplay;
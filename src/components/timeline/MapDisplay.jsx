import React from 'react';
import { Box, keyframes } from '@mui/material';

// Animação de fade-in
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const MapDisplay = ({ era }) => {
  return (
    <Box
      key={era.id} // Isso força a recriação do componente para a animação
      sx={{
        width: '50%',
        height: '80%',
        background: `url(${era.mapImage}) no-repeat center center/contain`,
        flexShrink: 0,
        borderRadius: 2,
        boxShadow: '0 0 20px rgba(0,0,0,0.5)',
        animation: `${fadeIn} 0.8s cubic-bezier(.17,.67,.83,.67) forwards`,
      }}
    />
  );
};

export default MapDisplay;
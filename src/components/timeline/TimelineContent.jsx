import React from 'react';
import { Box, Typography, keyframes } from '@mui/material';

// Animação de fade-in para o conteúdo
const contentFadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const TimelineContent = ({ era }) => {
  return (
    <Box 
      key={era.id} // Importante para que a animação seja reexecutada
      sx={{ 
        flexGrow: 1, 
        p: 2, 
        maxWidth: '40%', 
        minWidth: '350px',
        animation: `${contentFadeIn} 0.6s ease-out forwards`,
      }}
    >
      <Typography variant="h4" component="h2" gutterBottom>
        {era.label}
      </Typography>
      <Typography variant="h6" color="text.secondary" gutterBottom>
        {era.period}
      </Typography>
      <Typography variant="body1">
        {era.description}
      </Typography>
    </Box>
  );
};

export default TimelineContent;
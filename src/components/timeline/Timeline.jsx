import React from 'react';
import { Box, Typography, IconButton, Tooltip, keyframes } from '@mui/material';
import { styled } from '@mui/material/styles';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// Cores para os Éons
const eonColors = {
  'Pré-cambriano': '#4B0082', // Índigo escuro
  'Fanerozoico': '#228B22', // Verde-floresta
};

// Animação de brilho pulsante
const pulse = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7); }
  70% { box-shadow: 0 0 0 10px rgba(255, 255, 255, 0); }
  100% { box-shadow: 0 0 0 0 rgba(255, 255, 255, 0); }
`;

// Componente estilizado para a linha do tempo
const TimelineLine = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  width: '100%',
  height: '10px',
  borderRadius: '5px',
  backgroundColor: 'rgba(255, 255, 255, 0.2)',
}));

const TimelineEra = styled(Box)(({ theme, width, color }) => ({
  height: '100%',
  backgroundColor: color,
  borderRadius: 'inherit',
  transition: 'width 0.5s ease-in-out',
  width: `${width}%`,
  position: 'relative',
}));

const TimelineMarker = styled(Box)(({ theme, isSelected }) => ({
  width: '16px',
  height: '16px',
  borderRadius: '50%',
  backgroundColor: isSelected ? theme.palette.primary.main : 'white',
  border: `2px solid ${isSelected ? theme.palette.primary.main : 'white'}`,
  cursor: 'pointer',
  position: 'absolute',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  transition: 'all 0.3s ease-in-out',
  zIndex: 2,
  animation: isSelected ? `${pulse} 2s infinite` : 'none',
  '&:hover': {
    transform: 'translate(-50%, -50%) scale(1.2)',
  },
}));

const TimelineLabel = styled(Typography)(({ theme, isSelected }) => ({
  position: 'absolute',
  top: '25px',
  whiteSpace: 'nowrap',
  color: isSelected ? theme.palette.primary.main : 'white',
  fontWeight: isSelected ? 'bold' : 'normal',
  transition: 'color 0.3s ease, transform 0.3s ease',
  textShadow: '0 0 5px rgba(0,0,0,0.5)',
  transform: 'translateX(-50%)',
}));

const Timeline = ({ data, selectedEra, onSelectEra }) => {
  const selectedIndex = data.findIndex(era => era.id === selectedEra.id);

  const handlePrev = () => {
    if (selectedIndex > 0) {
      onSelectEra(data[selectedIndex - 1]);
    }
  };

  const handleNext = () => {
    if (selectedIndex < data.length - 1) {
      onSelectEra(data[selectedIndex + 1]);
    }
  };

  const totalDuration = data.reduce((sum, era) => {
    const match = era.period.match(/(\d+\.?\d*)\s*a\s*(\d+\.?\d*)/);
    if (match) {
      const [end, start] = match.slice(1).map(Number);
      return sum + Math.abs(start - end);
    }
    return sum;
  }, 0);

  let cumulativeWidth = 0;
  const segments = data.map((era) => {
    const match = era.period.match(/(\d+\.?\d*)\s*a\s*(\d+\.?\d*)/);
    const [end, start] = match ? match.slice(1).map(Number) : [0, 0];
    const duration = Math.abs(start - end);
    const widthPercentage = (duration / totalDuration) * 100;

    const startOffset = cumulativeWidth;
    cumulativeWidth += widthPercentage;
    const middleOffset = startOffset + (widthPercentage / 2);

    return {
      ...era,
      widthPercentage,
      middleOffset
    };
  });

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 4 }}>
      <Typography variant="h6" sx={{ mb: 4, color: 'white', textShadow: '0 0 5px rgba(255,255,255,0.2)' }}>
        História Geológica
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', width: '90%' }}>
        <IconButton onClick={handlePrev} disabled={selectedIndex === 0}>
          <ArrowBackIosIcon sx={{ color: 'white' }} />
        </IconButton>
        <Box sx={{ flexGrow: 1, position: 'relative', px: 2, display: 'flex' }}>
          {/* A Linha do tempo colorida */}
          <TimelineLine>
            {segments.map((segment) => (
              <TimelineEra
                key={segment.id}
                width={segment.widthPercentage}
                color={eonColors[segment.eon]}
              />
            ))}
          </TimelineLine>

          {/* Marcadores e Rótulos da linha do tempo */}
          {segments.map((segment) => (
            <Tooltip
              key={segment.id}
              title={`${segment.label}: ${segment.period}`}
              arrow
              placement="top"
            >
              <Box
                onClick={() => onSelectEra(segment)}
                sx={{
                  position: 'absolute',
                  left: `${segment.middleOffset}%`,
                  cursor: 'pointer',
                  zIndex: 3,
                }}
              >
                <TimelineMarker isSelected={selectedEra.id === segment.id} />
                <TimelineLabel isSelected={selectedEra.id === segment.id}>
                  {segment.label}
                </TimelineLabel>
              </Box>
            </Tooltip>
          ))}
        </Box>
        <IconButton onClick={handleNext} disabled={selectedIndex === data.length - 1}>
          <ArrowForwardIosIcon sx={{ color: 'white' }} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Timeline;
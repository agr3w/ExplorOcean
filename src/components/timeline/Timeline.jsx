import React from 'react';
import { Box, Button, Typography, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const TimelineContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(2),
  gap: theme.spacing(2),
  position: 'relative',
  zIndex: 1,
  backgroundColor: 'rgba(255, 255, 255, 0.05)',
  backdropFilter: 'blur(5px)',
  borderRadius: theme.spacing(2),
  margin: theme.spacing(0, 4, 4, 4),
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

  // Agrupando as eras por Éon
  const erasByEon = data.reduce((acc, era) => {
    if (!acc[era.eon]) {
      acc[era.eon] = [];
    }
    acc[era.eon].push(era);
    return acc;
  }, {});

  return (
    <TimelineContainer>
      <IconButton onClick={handlePrev} disabled={selectedIndex === 0}>
        <ArrowBackIosIcon sx={{ color: 'white' }} />
      </IconButton>
      <Box sx={{ display: 'flex', overflowX: 'auto', scrollbarWidth: 'none', msOverflowStyle: 'none', '&::-webkit-scrollbar': { display: 'none' }, gap: 4 }}>
        {Object.keys(erasByEon).map((eon) => (
          <Box key={eon} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)', mb: 1 }}>
              {eon}
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              {erasByEon[eon].map((era) => (
                <Button
                  key={era.id}
                  onClick={() => onSelectEra(era)}
                  variant={era.id === selectedEra.id ? 'contained' : 'text'}
                  sx={{
                    whiteSpace: 'nowrap',
                    backgroundColor: era.id === selectedEra.id ? 'primary.main' : 'rgba(255, 255, 255, 0.1)',
                    color: 'white',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    },
                  }}
                >
                  {era.label}
                </Button>
              ))}
            </Box>
          </Box>
        ))}
      </Box>
      <IconButton onClick={handleNext} disabled={selectedIndex === data.length - 1}>
        <ArrowForwardIosIcon sx={{ color: 'white' }} />
      </IconButton>
    </TimelineContainer>
  );
};

export default Timeline;
// src/pages/TimelinePage.jsx

import React, { useState } from 'react';
import { Box, IconButton } from '@mui/material'; // Importe IconButton
import Navigator from '../components/navigator/Navigator';
import Footer from '../components/footer/footer';
import Timeline from '../components/Timeline/Timeline';
import MapDisplay from '../components/Timeline/MapDisplay';
import TimelineContent from '../components/Timeline/TimelineContent';
import { timelineData } from '../content/timeLine/timelineContent';

// Ícone para o botão
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';

export default function TimelinePage() {
  const [selectedEra, setSelectedEra] = useState(timelineData[0]);
  const [isTimelineVisible, setIsTimelineVisible] = useState(true);

  // Função para alternar a visibilidade
  const toggleTimelineVisibility = () => {
    setIsTimelineVisible(!isTimelineVisible);
  };

  return (
    <Box 
      sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        height: '100vh', 
        backgroundColor: '#000000',
        color: '#ffffff' 
      }}
    >
      <Navigator />
      
      <Box 
        sx={{ 
          flexGrow: 1, 
          display: 'flex', 
          flexDirection: 'row', 
          alignItems: 'center', 
          justifyContent: 'center', 
          p: 4, 
          gap: 4
        }}
      >
        <MapDisplay era={selectedEra} />
        <TimelineContent era={selectedEra} />
      </Box>

      <Box sx={{ position: 'relative', width: '100%' }}>
        {/* Botão de alternância da linha do tempo */}
        <IconButton
          onClick={toggleTimelineVisibility}
          sx={{
            position: 'absolute',
            bottom: '24px',
            right: '24px',
            zIndex: 10,
            color: 'white',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
            },
          }}
        >
          {isTimelineVisible ? <VisibilityOffIcon /> : <VisibilityIcon />}
        </IconButton>

        <Timeline
          data={timelineData}
          selectedEra={selectedEra}
          onSelectEra={setSelectedEra}
          isVisible={isTimelineVisible} // Passa o novo estado
        />
      </Box>

      {/* <Footer depth={0} /> */}
    </Box>
  );
}
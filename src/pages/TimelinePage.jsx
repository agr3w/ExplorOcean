import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import Navigator from '../components/navigator/Navigator';
import Timeline from '../components/Timeline/Timeline';
import MapDisplay from '../components/Timeline/MapDisplay';
import TimelineContent from '../components/Timeline/TimelineContent';
import { timelineData } from '../content/timeLine/timelineContent';
import TimelineTour from '../components/Timeline/TimelineTour'; // Importe seu componente de tour

export default function TimelinePage() {
  const [selectedEra, setSelectedEra] = useState(timelineData[0]);
  const [isTimelineVisible, setIsTimelineVisible] = useState(true);

  // Estado para controlar o tour
  const [runTour, setRunTour] = useState(false);

  // Tour: só roda na primeira visita
  useEffect(() => {
    const tourVisto = localStorage.getItem('hasSeenTimelineTour');
    if (!tourVisto) {
      setTimeout(() => setRunTour(true), 800);
    }
  }, []);

  const handleTourEnd = () => {
    localStorage.setItem('hasSeenTimelineTour', 'true');
    setRunTour(false);
  };

  // Adicione antes do return
  const toggleTimelineVisibility = () => {
    setIsTimelineVisible((prev) => !prev);
  };

  return (
    <Box
      sx={{
        display: 'flex', flexDirection: 'column', height: '100vh',
        maxHeight: '100vh', color: '#ffffff', position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Tour interativo da timeline */}
      <TimelineTour run={runTour} onTourEnd={handleTourEnd} />

      <AnimatePresence>
        <motion.div
          key={selectedEra.id}
          style={{
            position: 'fixed',
            top: 0, left: 0, width: '100vw', height: '100vh',
            backgroundImage: `url(${selectedEra.backgroundUrl})`,
            backgroundSize: 'cover', backgroundPosition: 'center',
            zIndex: 0,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1.5, ease: 'easeInOut' } }}
          exit={{ opacity: 0, transition: { duration: 1.5, ease: 'easeInOut' } }}
        />
      </AnimatePresence>

      <Box sx={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', height: '100%' }}>
        <Navigator />

        <Box sx={{
          position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          zIndex: -1
        }} />

        <Box
          sx={{
            flexGrow: 1, display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center', justifyContent: 'center',
            p: { xs: 2, md: 4 }, gap: { xs: 3, md: 5 },
            overflowY: 'auto', minHeight: 0,
          }}
        >
          <Box sx={{
            flex: '1 1 55%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minWidth: 0,
            height: '100%',
          }}>
            <AnimatePresence mode="wait">
              <MapDisplay key={selectedEra.id} era={selectedEra} />
            </AnimatePresence>
          </Box>

          <Box sx={{
            flex: '0 0 450px',
            height: 'fit-content',
            maxHeight: '100%',
          }}>
            <TimelineContent era={selectedEra} />
          </Box>
        </Box>

        <Timeline
          data={timelineData}
          onSelectEra={setSelectedEra}
          isVisible={isTimelineVisible}
          toggleVisibility={toggleTimelineVisibility}
        />
      </Box>
    </Box>
  );
}
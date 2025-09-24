import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Box, Button, Typography, IconButton, Tooltip } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { keyEventsData } from '../../content/timeLine/keyEventsContent';

// Container principal atualizado
const MotionTimelineContainer = styled(motion.div)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '32px 16px 16px 16px',
  gap: theme.spacing(2),
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  zIndex: 10,
  backgroundColor: 'rgba(25, 35, 45, 0.6)',
  backdropFilter: 'blur(10px)',
  borderRadius: '24px 24px 0 0',
  width: 'calc(100% - 64px)',
  margin: '0 auto',
}));

// Puxador com efeito glow e animação
const TimelineToggleHandle = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: '-20px', // Metade para fora, perfeitamente centralizado
  left: '50%',
  transform: 'translateX(-50%)',
  width: '40px',
  height: '40px',
  borderRadius: '50%', // Circular
  backgroundColor: 'rgba(54, 209, 224, 0.2)',
  backdropFilter: 'blur(5px)',
  color: theme.palette.primary.light,
  border: '1px solid rgba(54, 209, 224, 0.5)',
  boxShadow: '0px -5px 25px rgba(54, 209, 224, 0.3)', // Efeito Glow
  '&:hover': {
    backgroundColor: 'rgba(54, 209, 224, 0.4)',
    transform: 'translateX(-50%) scale(1.1)', // Leve aumento no hover
    boxShadow: '0px -5px 30px rgba(54, 209, 224, 0.5)',
  },
}));

const NavButton = styled(Button)(({ theme, isSelected }) => ({
  whiteSpace: 'nowrap',
  backgroundColor: isSelected ? theme.palette.primary.main : 'rgba(255, 255, 255, 0.1)',
  color: 'white',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
}));

const ScrollContainer = styled(Box)({
  display: 'flex',
  overflowX: 'auto',
  scrollBehavior: 'smooth',
  padding: '24px 0',
  position: 'relative',
  width: '100%',
  '&::-webkit-scrollbar': { display: 'none' },
  scrollbarWidth: 'none',
  msOverflowStyle: 'none',
});
const TimelineTrack = styled(Box)({
  position: 'absolute',
  top: '50%',
  left: 0,
  right: 0,
  height: '2px',
  backgroundColor: 'rgba(255, 255, 255, 0.2)',
  transform: 'translateY(-50%)',
});

const PeriodContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  position: 'relative',
  flexShrink: 0,
  transition: 'min-width 0.4s ease-in-out',
});

const TimelineNode = styled(Box)(({ theme, isSelected }) => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  padding: '0 16px',
  '&::before': {
    content: '""',
    display: 'block',
    width: isSelected ? '20px' : '12px',
    height: isSelected ? '20px' : '12px',
    borderRadius: '50%',
    backgroundColor: isSelected ? theme.palette.primary.main : 'rgba(255, 255, 255, 0.5)',
    border: `2px solid ${isSelected ? theme.palette.primary.dark : 'rgba(255, 255, 255, 0.7)'}`,
    transition: 'all 0.3s ease',
    boxShadow: isSelected ? `0 0 15px ${theme.palette.primary.main}` : 'none',
    zIndex: 1,
  },
  '&:hover::before': {
    transform: 'scale(1.2)',
  }
}));

const EventMarker = styled(Box)({
  position: 'absolute',
  bottom: '25px',
  fontSize: '24px',
  zIndex: 2,
  cursor: 'help',
  transition: 'transform 0.2s ease-out',
  '&:hover': {
    transform: 'scale(1.4)',
  }
});

// VARIANTES DE ANIMAÇÃO ATUALIZADAS
const panelVariants = {
  hidden: { y: 'calc(100% - 40px)', opacity: 1 },
  visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100, damping: 20 } },
};

const Timeline = ({ data, onSelectEra, isVisible, toggleVisibility }) => {
  const [selectedItemId, setSelectedItemId] = useState(data[0].id);
  const scrollContainerRef = useRef(null);
  const nodeRefs = useRef({});

  const { groupedData, dataById } = useMemo(() => {
    const grouped = data.reduce((acc, item) => {
      if (!acc[item.eon]) {
        acc[item.eon] = {};
      }
      if (!acc[item.eon][item.era]) {
        acc[item.eon][item.era] = [];
      }
      acc[item.eon][item.era].push(item);
      return acc;
    }, {});
    const byId = data.reduce((acc, item) => {
      acc[item.id] = item;
      return acc;
    }, {});
    return { groupedData: grouped, dataById: byId };
  }, [data]);

  const selectedItem = dataById[selectedItemId];
  const { eon: selectedEon, era: selectedEra } = selectedItem;
  const periodsInSelectedEra = groupedData[selectedEon][selectedEra];
  const currentPeriodIndex = periodsInSelectedEra.findIndex(p => p.id === selectedItemId);

  const periodSpacings = useMemo(() => {
    const durations = periodsInSelectedEra.map(p => ({
      id: p.id,
      logDuration: Math.log10((p.start - p.end) + 1)
    }));
    const totalLogDuration = durations.reduce((sum, p) => sum + p.logDuration, 0);
    if (totalLogDuration === 0) {
      return { [durations[0].id]: 100 };
    }
    const spacings = {};
    durations.forEach(p => {
      const percentage = (p.logDuration / totalLogDuration) * 100;
      spacings[p.id] = Math.max(percentage, 8);
    });
    return spacings;
  }, [periodsInSelectedEra]);

  useEffect(() => {
    if (selectedItem) {
      onSelectEra(selectedItem);
    }
    const activeNode = nodeRefs.current[selectedItemId];
    if (activeNode) {
      activeNode.scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest',
      });
    }
  }, [selectedItemId, onSelectEra, selectedItem]);

  const handleSelectEon = (eonKey) => {
    const firstEraKey = Object.keys(groupedData[eonKey])[0];
    const firstItem = groupedData[eonKey][firstEraKey][0];
    setSelectedItemId(firstItem.id);
  };

  const handleSelectEra = (eraKey) => {
    const firstItem = groupedData[selectedEon][eraKey][0];
    setSelectedItemId(firstItem.id);
  };

  const handlePrev = () => {
    if (currentPeriodIndex > 0) {
      setSelectedItemId(periodsInSelectedEra[currentPeriodIndex - 1].id);
    }
  };

  const handleNext = () => {
    if (currentPeriodIndex < periodsInSelectedEra.length - 1) {
      setSelectedItemId(periodsInSelectedEra[currentPeriodIndex + 1].id);
    }
  };

  const keyEventsMap = useMemo(() => {
    return keyEventsData.reduce((acc, event) => {
      acc[event.periodId] = event;
      return acc;
    }, {});
  }, []);

  return (
    <MotionTimelineContainer
      variants={panelVariants}
      initial="hidden"
      animate={isVisible ? 'visible' : 'hidden'}
      exit="hidden"
    >
      {/* Puxador animado */}
      {/* <Tooltip title={isVisible ? "Recolher Linha do Tempo" : "Mostrar Linha do Tempo"} arrow> */}
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          style={{ position: 'absolute', top: 0, left: '50%', zIndex: 1 }}
        >
          <TimelineToggleHandle onClick={toggleVisibility}>
            {/* O ícone agora é filho direto do IconButton */}
            {isVisible ? <ExpandMoreIcon /> : <ExpandLessIcon />}
          </TimelineToggleHandle>
        </motion.div>
      {/* </Tooltip> */}

      <Box sx={{ mt: 2, width: '100%' }}>
        {/* Seções de Éons e Eras */}
        <Typography variant="h6" gutterBottom>Éons</Typography>
        <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
          {Object.keys(groupedData).map(eonKey => (
            <NavButton
              key={eonKey}
              onClick={() => handleSelectEon(eonKey)}
              isSelected={selectedItem.eon === eonKey}
            >
              {eonKey}
            </NavButton>
          ))}
        </Box>

        {Object.keys(groupedData[selectedItem.eon]).length > 1 && (
          <>
            <Typography variant="h6" gutterBottom>Eras</Typography>
            <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
              {Object.keys(groupedData[selectedItem.eon]).map(eraKey => (
                <NavButton
                  key={eraKey}
                  onClick={() => handleSelectEra(eraKey)}
                  isSelected={selectedItem.era === eraKey}
                >
                  {eraKey}
                </NavButton>
              ))}
            </Box>
          </>
        )}

        {/* Linha do tempo dos períodos */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, width: '100%', justifyContent: 'center' }}>
          <IconButton onClick={handlePrev} disabled={currentPeriodIndex === 0}>
            <ArrowBackIosIcon sx={{ color: 'white' }} />
          </IconButton>

          <ScrollContainer ref={scrollContainerRef}>
            <TimelineTrack />
            {periodsInSelectedEra.map(item => {
              const keyEvent = keyEventsMap[item.id];
              return (
                <PeriodContainer
                  key={item.id}
                  ref={el => nodeRefs.current[item.id] = el}
                  sx={{ minWidth: `${periodSpacings[item.id]}%` }}
                >
                  {keyEvent && (
                    <Tooltip title={keyEvent.description} arrow placement="top" sx={{ fontSize: '1.0rem' }}>
                      <EventMarker>
                        {keyEvent.icon}
                      </EventMarker>
                    </Tooltip>
                  )}
                  <TimelineNode
                    isSelected={item.id === selectedItemId}
                    onClick={() => setSelectedItemId(item.id)}
                  >
                    <Typography
                      variant="caption"
                      sx={{
                        color: item.id === selectedItemId ? 'primary.main' : 'rgba(255,255,255,0.7)',
                        fontWeight: item.id === selectedItemId ? 'bold' : 'normal',
                        position: 'absolute',
                        top: '25px',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {item.label}
                    </Typography>
                  </TimelineNode>
                </PeriodContainer>
              );
            })}
          </ScrollContainer>

          <IconButton onClick={handleNext} disabled={currentPeriodIndex === periodsInSelectedEra.length - 1}>
            <ArrowForwardIosIcon sx={{ color: 'white' }} />
          </IconButton>
        </Box>
      </Box>
    </MotionTimelineContainer>
  );
};

export default Timeline;
import React, { useState, useEffect } from 'react';
import { Box, Button, Typography, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const TimelineContainer = styled(Box)(({ theme, isVisible }) => ({
  display: isVisible ? 'flex' : 'none',
  flexDirection: 'column',
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

const NavButton = styled(Button)(({ theme, isSelected }) => ({
  whiteSpace: 'nowrap',
  backgroundColor: isSelected ? 'primary.main' : 'rgba(255, 255, 255, 0.1)',
  color: 'white',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
}));

const Timeline = ({ data, onSelectEra, isVisible }) => {
  const [selectedEon, setSelectedEon] = useState(data[0].eon);
  const [selectedEraGroup, setSelectedEraGroup] = useState(data[0].era || data[0].id);
  const [selectedItem, setSelectedItem] = useState(data[0]);

  useEffect(() => {
    onSelectEra(selectedItem);
  }, [selectedItem, onSelectEra]);

  const groupedData = data.reduce((acc, item) => {
    if (!acc[item.eon]) {
      acc[item.eon] = { label: item.eon, eras: {} };
    }
    const eraKey = item.era || 'eonOnly';
    if (!acc[item.eon].eras[eraKey]) {
      acc[item.eon].eras[eraKey] = [];
    }
    acc[item.eon].eras[eraKey].push(item);
    return acc;
  }, {});

  const visibleItems = groupedData[selectedEon].eras[selectedEraGroup];
  const selectedIndex = visibleItems ? visibleItems.findIndex(era => era.id === selectedItem.id) : -1;

  const handlePrev = () => {
    if (selectedIndex > 0) {
      setSelectedItem(visibleItems[selectedIndex - 1]);
    }
  };

  const handleNext = () => {
    if (selectedIndex < visibleItems.length - 1) {
      setSelectedItem(visibleItems[selectedIndex + 1]);
    }
  };

  const handleSelectEon = (eon) => {
    setSelectedEon(eon);
    const eraKeys = Object.keys(groupedData[eon].eras);
    const firstEraKey = eraKeys.includes('eonOnly') && eraKeys.length > 1 ? eraKeys.find(key => key !== 'eonOnly') : eraKeys[0];
    
    setSelectedEraGroup(firstEraKey);
    setSelectedItem(groupedData[eon].eras[firstEraKey][0]);
  };

  const handleSelectEraGroup = (eraKey) => {
    setSelectedEraGroup(eraKey);
    setSelectedItem(groupedData[selectedEon].eras[eraKey][0]);
  };
  
  const showErasSection = selectedEon && Object.keys(groupedData[selectedEon].eras).length > 1;

  return (
    <TimelineContainer isVisible={isVisible}>
      <Typography variant="h6" gutterBottom>
        Éons
      </Typography>
      <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
        {Object.keys(groupedData).map(eonKey => (
          <NavButton
            key={eonKey}
            onClick={() => handleSelectEon(eonKey)}
            isSelected={selectedEon === eonKey}
          >
            {eonKey}
          </NavButton>
        ))}
      </Box>

      {showErasSection && (
        <>
          <Typography variant="h6" gutterBottom>
            Eras
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
            {Object.keys(groupedData[selectedEon].eras)
              .filter(eraKey => eraKey !== 'eonOnly')
              .map(eraKey => (
                <NavButton
                  key={eraKey}
                  onClick={() => handleSelectEraGroup(eraKey)}
                  isSelected={selectedEraGroup === eraKey}
                >
                  {eraKey}
                </NavButton>
              ))}
          </Box>
        </>
      )}

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, width: '100%', justifyContent: 'center' }}>
        <IconButton onClick={handlePrev} disabled={selectedIndex === 0}>
          <ArrowBackIosIcon sx={{ color: 'white' }} />
        </IconButton>
        <Box
          sx={{
            display: 'flex',
            overflowX: 'auto',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            '&::-webkit-scrollbar': { display: 'none' },
            gap: 2,
            p: 1,
          }}
        >
          {visibleItems && visibleItems.map(item => (
            <Button
              key={item.id}
              onClick={() => setSelectedItem(item)}
              variant={item.id === selectedItem.id ? 'contained' : 'text'}
              sx={{
                whiteSpace: 'nowrap',
                backgroundColor: item.id === selectedItem.id ? 'primary.main' : 'rgba(255, 255, 255, 0.1)',
                color: 'white',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                },
              }}
            >
              {item.label}
            </Button>
          ))}
        </Box>
        <IconButton onClick={handleNext} disabled={!visibleItems || selectedIndex === visibleItems.length - 1}>
          <ArrowForwardIosIcon sx={{ color: 'white' }} />
        </IconButton>
      </Box>
    </TimelineContainer>
  );
};

export default Timeline;
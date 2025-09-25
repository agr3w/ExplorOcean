import React from 'react';
import { Box, Typography } from '@mui/material';
import { NavButton } from '../TimelineStyled';

export default function ErasSelector({ groupedData, selectedEon, selectedEra, handleSelectEra }) {
  if (Object.keys(groupedData[selectedEon]).length <= 1) return null;
  return (
    <>
      <Typography variant="h6" gutterBottom>Eras</Typography>
      <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
        {Object.keys(groupedData[selectedEon]).map(eraKey => (
          <NavButton
            key={eraKey}
            onClick={() => handleSelectEra(eraKey)}
            isSelected={selectedEra === eraKey}
          >
            {eraKey}
          </NavButton>
        ))}
      </Box>
    </>
  );
}
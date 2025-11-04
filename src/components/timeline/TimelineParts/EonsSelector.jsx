import React from 'react';
import { Box, Typography } from '@mui/material';
import { NavButton } from '../TimelineStyled';

export default function EonsSelector({ groupedData, selectedEon, handleSelectEon }) {
  return (
    <>
      <Typography variant="h6" gutterBottom>Éons</Typography>
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
    </>
  );
}
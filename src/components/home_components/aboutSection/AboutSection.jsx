import React from 'react';
import { Box, Typography } from '@mui/material';
import AboutHighlights from './aboutHighlights/aboutHighlights';
import AboutImage from './aboutImage/aboutImage';

export default function AboutSection() {
  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: 1100,
        mx: 'auto',
        mt: 8,
        mb: 12,
        display: 'flex',
        alignItems: 'flex-start',
        gap: 6,
        px: 2,
      }}
    >
      {/* Explicative text and highlights */}
      <AboutHighlights />

      {/* Placeholder image/illustration */}
      <AboutImage />

    </Box>
  );
}
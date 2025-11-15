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
        p: 12,
        display: 'flex',
        alignItems: 'flex-start',
        gap: 6,
        px: 2,
        flexDirection: { xs: 'column', md: 'row' },
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 2,
        boxShadow: 3,
        // backgroundColor: '#f5f5f5',
      }}
    >
      {/* Texto explicativo e highlights à esquerda */}
      <Box sx={{ flex: 1, minWidth: 220, width: '100%', textAlign: 'center' }}>
        <AboutHighlights />
      </Box>

      {/* Imagem estilizada à direita */}
      <Box sx={{
        flex: 1,
        minWidth: 220,
        width: '100%',
        display: 'flex',
        justifyContent: { xs: 'center', md: 'flex-end' },
        alignItems: 'center',
      }}>
        <AboutImage />
      </Box>
    </Box>
  );
}
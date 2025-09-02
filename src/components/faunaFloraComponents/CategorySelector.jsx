import React from 'react';
import { Box, Button, Typography } from '@mui/material';

export default function CategorySelector({ selectedCategory, onSelectCategory }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 2,
        p: 2,
      }}
    >
      <Typography variant="h5" sx={{ color: 'white' }}>
        Explore por Categoria
      </Typography>
      <Box sx={{ display: 'flex', gap: 2 }}>
        <Button
          variant={selectedCategory === 'fauna' ? 'contained' : 'outlined'}
          onClick={() => onSelectCategory('fauna')}
          sx={{
            color: 'white',
            borderColor: 'white',
            '&.MuiButton-contained': {
              backgroundColor: 'primary.main',
              '&:hover': {
                backgroundColor: 'primary.dark',
              },
            },
          }}
        >
          Fauna
        </Button>
        <Button
          variant={selectedCategory === 'flora' ? 'contained' : 'outlined'}
          onClick={() => onSelectCategory('flora')}
          sx={{
            color: 'white',
            borderColor: 'white',
            '&.MuiButton-contained': {
              backgroundColor: 'primary.main',
              '&:hover': {
                backgroundColor: 'primary.dark',
              },
            },
          }}
        >
          Flora
        </Button>
      </Box>
    </Box>
  );
}
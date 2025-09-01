// src/components/ContentGrid/ContentGrid.jsx

import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import ContentCard from './contentCard/ContentCard'; // Importar o novo componente

const ContentGrid = ({ title, description, items }) => {
  return (
    <Box sx={{ py: 8, px: 2, textAlign: 'center' }}>
      <Typography variant="h3" component="h2" gutterBottom>
        {title}
      </Typography>
      <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
        {description}
      </Typography>
      <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} justifyContent="center" alignItems="stretch">
        {items.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} sx={{width: '450px'}}>
            <ContentCard item={item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ContentGrid;
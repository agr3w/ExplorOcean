import React from 'react';
import { Box, Grid } from '@mui/material';
import ContentCard from './contentCard/ContentCard';

const ContentGrid = ({ items }) => (
  <Box sx={{ py: 4, px: 2 }}>
    <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} justifyContent="center" alignItems="stretch">
      {items.map((item, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <ContentCard item={item} />
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default ContentGrid;
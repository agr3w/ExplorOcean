// src/pages/ContentHub.jsx

import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import Navigator from '../components/navigator/Navigator';
import Footer from '../components/footer/footer';
import { hubData } from '../content/ContentHub/hubContent';
import HubCard from '../components/contentHub/hubCard/HubCard';
import { motion } from 'framer-motion';


export default function ContentHub() {
  return (
    <>
      <Navigator />
      <Box sx={{ p: 4, textAlign: 'center', marginTop: 6 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Explore o Conteúdo
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
          Selecione uma categoria para começar sua jornada.
        </Typography>
        <Grid container spacing={4} justifyContent="center" alignItems="stretch">
          {hubData.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <HubCard item={item} />
            </Grid>
          ))}
        </Grid>
      </Box>
      <Footer depth={0} />
    </>
  );
}
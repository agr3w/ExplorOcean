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
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: 80, opacity: 0.6 }}
            animate={{ y: -400, opacity: 0.1 }}
            transition={{ duration: 8, delay: i * 1.2, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              position: 'absolute',
              left: `${10 + i * 15}%`,
              bottom: 0,
              width: 18 + i * 6,
              height: 18 + i * 6,
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.18)',
              zIndex: 1,
              filter: 'blur(1px)',
            }}
          />
        ))}
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
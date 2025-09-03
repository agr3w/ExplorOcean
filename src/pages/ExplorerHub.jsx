import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import Navigator from '../components/navigator/Navigator';
import Footer from '../components/footer/footer';
import { hubData } from '../content/ContentHub/hubContent';
import HubCard from '../components/contentHub/hubCard/HubCard';

// Filtra apenas os itens desejados
const explorerItems = hubData.filter(item =>
  ['Globo 3D', 'História com o Oceano', 'Fauna e Flora'].includes(item.title)
);

export default function ExplorerHub() {
  return (
    <>
      <Navigator />
      <Box sx={{ p: 4, textAlign: 'center', marginTop: 6 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Explorar os Mares
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
          Escolha uma funcionalidade para explorar o oceano.
        </Typography>
        <Grid container spacing={4} justifyContent="center" alignItems="stretch">
          {explorerItems.map((item, index) => (
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
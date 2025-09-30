// src/pages/ContentHub.jsx

import React from 'react';
import { Box, Typography, Grid, Container } from '@mui/material'; // Adicione Container
import Navigator from '../components/navigator/Navigator';
import Footer from '../components/footer/footer';
import { hubData } from '../content/ContentHub/hubContent';
import HubCard from '../components/contentHub/hubCard/HubCard';
import { motion } from 'framer-motion';

// Variantes para animar a página e o grid
const pageVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};
const gridVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function ContentHub() {
  return (
    // 1. Container principal com fundo escuro
    <Box sx={{ backgroundColor: '#02101a', color: 'white', minHeight: '100vh' }}>
      <Navigator />
      <Container maxWidth="lg" sx={{ py: 4, textAlign: 'center', marginTop: 6 }}>
        {/* 2. Animação de entrada para o conteúdo da página */}
        <motion.div variants={pageVariants} initial="hidden" animate="visible">
          <motion.div variants={itemVariants}>
            <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
              Explore o Conteúdo
            </Typography>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Typography variant="h6" sx={{ mb: 6, color: 'rgba(227, 242, 253, 0.7)' }}>
              Selecione uma categoria para começar sua jornada.
            </Typography>
          </motion.div>

          {/* 3. Animação de entrada em cascata para os cards */}
          <motion.div variants={gridVariants}>
            <Grid container spacing={4} justifyContent="center" alignItems="stretch">
              {hubData.map((item) => (
                <Grid item xs={12} sm={6} md={4} key={item.title} sx={{ display: 'flex', justifyContent: 'center' }}>
                  <HubCard item={item} />
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </motion.div>
      </Container>
      <Footer depth={0} />
    </Box>
  );
}
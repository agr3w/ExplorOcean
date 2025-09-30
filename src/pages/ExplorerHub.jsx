import React from 'react';
import { Box, Typography, Grid, Container } from '@mui/material';
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

// Filtra apenas os itens desejados
const explorerItems = hubData.filter(item =>
  ['Globo 3D', 'História com o Oceano', 'Fauna e Flora'].includes(item.title)
);

export default function ExplorerHub() {
  return (
    <Box sx={{ backgroundColor: '#02101a', color: 'white', minHeight: '100vh' }}>
      <Navigator />
      <Container maxWidth="lg" sx={{ py: 4, textAlign: 'center', marginTop: 6 }}>
        <motion.div variants={pageVariants} initial="hidden" animate="visible">
          <motion.div variants={itemVariants}>
            <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
              Explorar os Mares
            </Typography>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Typography variant="h6" sx={{ mb: 6, color: 'rgba(227, 242, 253, 0.7)' }}>
              Escolha uma funcionalidade para explorar o oceano.
            </Typography>
          </motion.div>
          <motion.div variants={gridVariants}>
            <Grid container spacing={4} justifyContent="center" alignItems="stretch">
              {explorerItems.map((item, index) => (
                <Grid item xs={12} sm={6} md={4} key={item.title} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'stretch' }}>
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
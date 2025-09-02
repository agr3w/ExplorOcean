import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import FactCard from './FactCard';
import CastAndCrewSection from './CastAndCrewSection'; // Importe o novo componente

export default function DetailPageBody({ item }) {
  const isDocumentary = item.videoUrl;

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <>
      {/* Fatos Rápidos para Documentários */}
      {isDocumentary && (
        <Box component={motion.div} variants={fadeInVariants} initial="hidden" animate="visible" sx={{ mt: 4 }}>
          <Typography variant="h5" component="h2" gutterBottom>
            Fatos Rápidos
          </Typography>
          <Grid container spacing={2}>
            {item.duration && (
              <Grid item xs={6} sm={4} md={2}>
                <FactCard icon="⏳" label="Duração" value={item.duration} />
              </Grid>
            )}
            {item.rating && (
              <Grid item xs={6} sm={4} md={2}>
                <FactCard icon="⭐" label="Avaliação" value={item.rating} />
              </Grid>
            )}
            {item.releaseYear && (
              <Grid item xs={6} sm={4} md={2}>
                <FactCard icon="📅" label="Ano de Lançamento" value={item.releaseYear} />
              </Grid>
            )}
            {item.director && (
              <Grid item xs={6} sm={4} md={2}>
                <FactCard icon="🎬" label="Diretor" value={item.director} />
              </Grid>
            )}
          </Grid>
        </Box>
      )}

      {/* Seção de Elenco e Equipe */}
      {isDocumentary && item.castAndCrew && <CastAndCrewSection castAndCrew={item.castAndCrew} />}
      
      {/* Descrição Detalhada */}
      <Box component={motion.div} variants={fadeInVariants} initial="hidden" animate="visible" sx={{ mt: 4 }}>
        <Typography variant="h5" component="h2" gutterBottom>
          Detalhes
        </Typography>
        <Typography variant="body1" sx={{ whiteSpace: 'pre-line' }}>
          {item.longDescription}
        </Typography>
      </Box>

      {/* Imagens Secundárias */}
      {item.secondaryImages && item.secondaryImages.length > 0 && (
        <Box component={motion.div} variants={fadeInVariants} initial="hidden" animate="visible" sx={{ mt: 4 }}>
          <Typography variant="h5" component="h2" gutterBottom>
            Galeria de Imagens
          </Typography>
          <Grid container spacing={2}>
            {item.secondaryImages.map((img, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Box
                  component="img"
                  src={img}
                  sx={{ width: '100%', borderRadius: 2, boxShadow: '0 2px 10px rgba(0, 0, 0, 0.3)' }}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      )}

      {/* Localização */}
      {item.location && (
        <Box component={motion.div} variants={fadeInVariants} initial="hidden" animate="visible" sx={{ mt: 4 }}>
          <Typography variant="h5" component="h2" gutterBottom>
            Onde se Passa
          </Typography>
          <Typography variant="h6">{item.location.name}</Typography>
          <Typography variant="body1" sx={{ mt: 1 }}>{item.location.description}</Typography>
        </Box>
      )}
    </>
  );
}
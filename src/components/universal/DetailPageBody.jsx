import React from 'react';
import { Box, Typography, Grid } from '@mui/material';

export default function DetailPageBody({ item }) {
  return (
    <>
      {/* Descrição Detalhada */}
      <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 4 }}>
        Detalhes
      </Typography>
      <Typography variant="body1" sx={{ whiteSpace: 'pre-line' }}>
        {item.longDescription}
      </Typography>

      {/* Imagens Secundárias */}
      {item.secondaryImages && item.secondaryImages.length > 0 && (
        <Box sx={{ mt: 4 }}>
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
        <Box sx={{ mt: 4 }}>
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
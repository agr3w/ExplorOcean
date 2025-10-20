import React from 'react';
import { Box, Typography } from '@mui/material';

const curiosidades = [
  "Sabia que o polvo tem três corações?",
  "Mais de 80% do oceano permanece inexplorado.",
  "A baleia-azul é o maior animal do planeta.",
  "Existem peixes que brilham no escuro!",
  "O oceano produz mais de 50% do oxigênio do mundo.",
  "Algumas tartarugas marinhas vivem mais de 100 anos.",
  "O ponto mais profundo do oceano tem mais de 11km!",
];

export default function CuriosidadeOceano({ index }) {
  const curiosidade = curiosidades[index % curiosidades.length];
  return (
    <Box
      sx={{
        mt: 2,
        mb: 1,
        px: 3,
        py: 1.5,
        borderRadius: 3,
        background: 'linear-gradient(90deg, rgba(54,209,224,0.18) 0%, rgba(41,118,194,0.13) 100%)',
        color: '#e3f2fd',
        fontWeight: 500,
        fontSize: '1.08rem',
        boxShadow: '0 2px 12px rgba(54,209,224,0.10)',
        textAlign: 'center',
        backdropFilter: 'blur(8px)',
        border: '1.5px solid rgba(54,209,224,0.13)',
      }}
    >
      {curiosidade}
    </Box>
  );
}
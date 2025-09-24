// src/components/Timeline/LifeInPeriod.jsx

import React, { useMemo } from 'react';
// 1. Paper e Avatar são os novos componentes que usaremos
import { Box, Typography, Paper, Avatar } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { faunaData } from '../../content/faunaFlora/faunaFloraData';
import { floraData } from '../../content/faunaFlora/faunaFloraData';

// 2. O novo "LifeChip" que substitui o LifeCard
const LifeChip = styled(Paper)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  height: '60px',
  padding: theme.spacing(1),
  paddingRight: theme.spacing(2), // Mais espaço à direita do texto
  backgroundColor: 'rgba(25, 35, 45, 0.5)',
  backdropFilter: 'blur(8px)',
  borderRadius: '30px', // Totalmente arredondado para o formato de pílula
  border: '1px solid rgba(255, 255, 255, 0.1)',
  color: 'white',
  transition: 'transform 0.3s ease, background-color 0.3s ease',
  '&:hover': {
    transform: 'translateY(-3px)', // Efeito de "flutuar"
    backgroundColor: 'rgba(54, 209, 224, 0.15)', // Cor do tema no hover
  },
}));

const LifeInPeriod = ({ periodId }) => {
  const lifeForms = useMemo(() => {
    const relevantFauna = faunaData.filter(item => item.geologicalPeriodId === periodId);
    const relevantFlora = floraData.filter(item => item.geologicalPeriodId === periodId);
    return [...relevantFauna, ...relevantFlora];
  }, [periodId]);

  if (lifeForms.length === 0) {
    return null;
  }

  return (
    <Box sx={{ mt: 3 }}>
      <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
        Vida no Período
      </Typography>
      <Box 
        sx={{ 
          display: 'flex', 
          gap: 2, 
          overflowX: 'auto', 
          pb: 2, // Aumentei o padding inferior para a sombra do hover
          p: 1,
          '&::-webkit-scrollbar': { height: '8px' },
          '&::-webkit-scrollbar-thumb': { backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: '4px' },
        }}
      >
        {lifeForms.map(item => (
          // 3. A estrutura do link agora envolve o nosso novo LifeChip
          <Link key={item.id} to={`/${item.category}/${item.id}`} style={{ textDecoration: 'none' }}>
            <LifeChip elevation={4}>
              <Avatar 
                src={item.imageUrl} 
                alt={item.label} 
                sx={{ width: 44, height: 44, marginRight: 1.5 }} 
              />
              <Typography variant="body2" sx={{ fontWeight: 'bold', whiteSpace: 'nowrap' }}>
                {item.label}
              </Typography>
            </LifeChip>
          </Link>
        ))}
      </Box>
    </Box>
  );
};

export default LifeInPeriod;
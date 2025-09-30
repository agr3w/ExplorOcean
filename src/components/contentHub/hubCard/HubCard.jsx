import React from 'react';
import { Box, Typography, CardContent } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const MotionCard = styled(motion.div)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: theme.spacing(4),
  textAlign: 'center',
  cursor: 'pointer',
  borderRadius: theme.spacing(3),
  position: 'relative',
  overflow: 'hidden',

  // Dimensões padrão e responsivas
  minWidth: 260,
  maxWidth: 340,
  minHeight: 240,
  maxHeight: 380,
  width: '100%',
  height: '100%',

  boxSizing: 'border-box',

  backgroundColor: 'rgba(2, 16, 26, 0.4)',
  backdropFilter: 'blur(10px)',
  border: '1.5px solid rgba(54, 209, 224, 0.2)',
  boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
}));

const IconCircle = styled(Box)(({ theme }) => ({
  // Fundo mais sutil, combinando com o glassmorphism
  background: 'linear-gradient(135deg, rgba(54, 209, 224, 0.2) 0%, rgba(25, 118, 210, 0.2) 100%)',
  borderRadius: '50%',
  width: 72,
  height: 72,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
  marginBottom: theme.spacing(2),
  border: '1px solid rgba(54, 209, 224, 0.3)',
}));

const HubCard = ({ item }) => {
  const navigate = useNavigate();

  // Variante para a animação de entrada do card
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <MotionCard
      variants={cardVariants} // Para a animação de entrada em cascata
      whileHover={{
        y: -10,
        boxShadow: '0 12px 30px rgba(54, 209, 224, 0.3)',
        borderColor: 'rgba(54, 209, 224, 0.5)',
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      onClick={() => navigate(item.link)}
    >
      <IconCircle>
        {item.icon && <item.icon size={40} color="#e3f2fd" />}
      </IconCircle>
      <CardContent sx={{ p: 0, '&:last-child': { pb: 0 } }}>
        <Typography variant="h6" component="div" sx={{ fontWeight: 700, mb: 1, color: 'white' }}>
          {item.title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'rgba(227, 242, 253, 0.8)' }}>
          {item.description}
        </Typography>
      </CardContent>
    </MotionCard>
  );
};

export default HubCard;
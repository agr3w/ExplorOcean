import React from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const StyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  maxWidth: 300,
  padding: theme.spacing(4),
  textAlign: 'center',
  boxShadow: '0 4px 12px rgba(30,60,120,0.10)',
  transition: 'transform 0.3s cubic-bezier(.77,0,.18,1), box-shadow 0.3s cubic-bezier(.77,0,.18,1)',
  cursor: 'pointer',
  height: '100%',
  borderRadius: theme.spacing(3),
  position: 'relative',
  overflow: 'hidden',
  '&:hover': {
    transform: 'translateY(-8px) scale(1.04)',
    boxShadow: '0 8px 24px rgba(30,60,120,0.18)',
    background: 'linear-gradient(135deg, #36d1e0 60%, #1976d2 100%)',
  },
}));

const IconCircle = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(135deg, #36d1e0 60%, #1976d2 100%)',
  borderRadius: '50%',
  width: 72,
  height: 72,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0 2px 8px rgba(30,60,120,0.18)',
  marginBottom: theme.spacing(2),
}));

const HubCard = ({ item }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      whileHover={{ scale: 1.04, y: -8 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      style={{ height: '100%' }}
      onClick={() => navigate(item.link)}
    >
      <StyledCard>
        <IconCircle>
          {item.icon && <item.icon size={40} color="#fff" />}
        </IconCircle>
        <CardContent sx={{ p: 0, '&:last-child': { pb: 0 } }}>
          <Typography variant="h6" component="div" sx={{ fontWeight: 700, mb: 1 }}>
            {item.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
            {item.description}
          </Typography>
        </CardContent>
      </StyledCard>
    </motion.div>
  );
};

export default HubCard;
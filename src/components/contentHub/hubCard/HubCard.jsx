// src/components/ContentHub/HubCard.jsx

import React from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const StyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: theme.spacing(4),
  textAlign: 'center',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.3s cubic-bezier(.77,0,.18,1), box-shadow 0.3s cubic-bezier(.77,0,.18,1)',
  cursor: 'pointer',
  height: '100%',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
  },
}));

const StyledImageWrapper = styled(Box)(({ theme }) => ({
  width: 120,
  height: 120,
  borderRadius: '50%',
  overflow: 'hidden',
  marginBottom: theme.spacing(2),
}));

const HubCard = ({ item }) => {
  const navigate = useNavigate();

  return (
    <StyledCard onClick={() => navigate(item.link)}>
      <StyledImageWrapper>
        <img
          src={item.imageUrl}
          alt={item.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </StyledImageWrapper>
      <CardContent sx={{ p: 0, '&:last-child': { pb: 0 } }}>
        <Typography variant="h5" component="div">
          {item.title}
        </Typography>
      </CardContent>
    </StyledCard>
  );
};

export default HubCard;
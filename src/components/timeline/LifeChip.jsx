import React from 'react';
import { Paper, Avatar, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

const StyledLifeChip = styled(Paper)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  height: '60px',
  padding: theme.spacing(1),
  paddingRight: theme.spacing(2),
  backgroundColor: 'rgba(25, 35, 45, 0.5)',
  backdropFilter: 'blur(8px)',
  borderRadius: '30px',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  color: 'white',
  transition: 'transform 0.3s ease, background-color 0.3s ease',
  '&:hover': {
    transform: 'translateY(-3px)',
    backgroundColor: 'rgba(54, 209, 224, 0.15)',
  },
}));

export default function LifeChip({ label, imageUrl, to }) {
  return (
    <StyledLifeChip elevation={4} component={Link} to={to} sx={{ textDecoration: 'none', minWidth: 120 }}>
      {imageUrl && <Avatar src={imageUrl} alt={label} sx={{ width: 44, height: 44, marginRight: 1.5 }} />}
      <Typography variant="body2" sx={{ fontWeight: 'bold', whiteSpace: 'nowrap' }}>
        {label}
      </Typography>
    </StyledLifeChip>
  );
}
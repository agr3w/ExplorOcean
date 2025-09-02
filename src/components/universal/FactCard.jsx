import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  padding: theme.spacing(2),
  textAlign: 'center',
  color: 'white',
  borderRadius: theme.spacing(1),
  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
}));

export default function FactCard({ icon, label, value }) {
  return (
    <StyledPaper>
      <Box sx={{ fontSize: '2rem', mb: 1 }}>{icon}</Box>
      <Typography variant="body1" fontWeight="bold">
        {value}
      </Typography>
      <Typography variant="caption" color="text.secondary">
        {label}
      </Typography>
    </StyledPaper>
  );
}
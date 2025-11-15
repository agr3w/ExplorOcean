import React from 'react';
import { Typography } from '@mui/material';

export default function QuestionTitle({ question }) {
  return (
    <Typography variant="h5" color="white" sx={{ my: 3, fontWeight: 'bold' }}>
      {question}
    </Typography>
  );
}
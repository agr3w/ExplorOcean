import React from 'react';
import { Box, Typography, LinearProgress } from '@mui/material';

export default function QuestionProgress({ questionNumber, totalQuestions }) {
  return (
    <Box sx={{ mb: 2 }}>
      <Typography variant="overline" color="primary.light">
        PERGUNTA {questionNumber} DE {totalQuestions}
      </Typography>
      <LinearProgress variant="determinate" value={(questionNumber / totalQuestions) * 100} />
    </Box>
  );
}
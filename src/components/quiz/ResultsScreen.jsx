// src/components/quiz/ResultsScreen.jsx

import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';

export default function ResultsScreen({ score, totalQuestions, onRestart, onClose }) {
  const percentage = Math.round((score / totalQuestions) * 100);
  const resultMessage = percentage >= 70 ? 'Excelente Trabalho!' : 'Continue Explorando!';

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      style={{ textAlign: 'center', color: 'white' }}
    >
      <Typography variant="h4" sx={{ fontWeight: 'bold' }}>Quiz Finalizado!</Typography>
      <Typography variant="h6" color="primary.light" sx={{ my: 2 }}>{resultMessage}</Typography>
      <Typography variant="h2" sx={{ my: 3, fontWeight: 'bold' }}>
        {score} / {totalQuestions}
      </Typography>
      <Typography variant="body1">Você acertou {percentage}% das perguntas.</Typography>
      <Box sx={{ mt: 4, display: 'flex', gap: 2, justifyContent: 'center' }}>
        <Button variant="outlined" onClick={onRestart}>Tentar Novamente</Button>
        <Button variant="contained" onClick={onClose}>Fechar</Button>
      </Box>
    </motion.div>
  );
}
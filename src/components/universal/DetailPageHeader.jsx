import React from 'react';
import { Box, Typography, Button } from '@mui/material';

export default function DetailPageHeader({ item }) {
  const isQuiz = item.questions;

  return (
    <>
      <Typography variant="h3" component="h1" gutterBottom>
        {item.label}
      </Typography>

      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        {item.category}
        {item.duration && ` | Duração: ${item.duration}`}
        {isQuiz && item.difficulty && ` | Dificuldade: ${item.difficulty}`}
        {isQuiz && item.numberOfQuestions && ` | Perguntas: ${item.numberOfQuestions}`}
      </Typography>

      {/* Exibe o vídeo ou o botão de quiz */}
      {item.videoUrl && (
        <Box sx={{ mb: 4, position: 'relative', paddingTop: '56.25%', height: 0, overflow: 'hidden' }}>
          <iframe
            src={item.videoUrl}
            title={item.label}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
          />
        </Box>
      )}

      {isQuiz && (
        <Box sx={{ my: 4, textAlign: 'center' }}>
          <Button variant="contained" color="primary" size="large">
            Iniciar Quiz
          </Button>
        </Box>
      )}
    </>
  );
}
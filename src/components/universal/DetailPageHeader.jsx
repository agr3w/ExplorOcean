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
        <Box
          sx={{
            position: 'relative',
            paddingTop: '56.25%', // Proporção de aspecto 16:9
            height: 0,
            overflow: 'hidden',
            borderRadius: 3,
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5), inset 0 0 15px rgba(255, 255, 255, 0.1)',
            border: '2px solid rgba(255, 255, 255, 0.2)',
            backdropFilter: 'blur(5px)',
            backgroundColor: 'rgba(0, 10, 20, 0.7)',
            '&:hover': {
              boxShadow: '0 6px 25px rgba(0, 0, 0, 0.7), inset 0 0 20px rgba(255, 255, 255, 0.2)',
            },
            transition: 'all 0.3s ease-in-out',
          }}
        >
          <iframe
            src={item.videoUrl}
            title={item.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
            allowFullScreen
            auto
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
            }}
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
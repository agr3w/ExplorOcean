// src/components/quiz/QuestionCard.jsx

import React, { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';

export default function QuestionCard({ question, options, questionNumber, totalQuestions, onAnswerSubmit }) {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSubmit = () => {
    if (selectedOption) {
      onAnswerSubmit(selectedOption);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <Typography variant="overline" color="primary.light">
        PERGUNTA {questionNumber} DE {totalQuestions}
      </Typography>
      <Typography variant="h5" color="white" sx={{ my: 2, fontWeight: 'bold' }}>
        {question}
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, my: 3 }}>
        {options.map((option, index) => (
          <Button
            key={index}
            variant={selectedOption === option ? 'contained' : 'outlined'}
            onClick={() => setSelectedOption(option)}
            sx={{
              justifyContent: 'flex-start',
              textAlign: 'left',
              py: 1.5,
              borderColor: 'rgba(54, 209, 224, 0.5)',
              color: selectedOption === option ? 'white' : 'rgba(227, 242, 253, 0.8)',
            }}
          >
            {option}
          </Button>
        ))}
      </Box>
      <Button
        variant="contained"
        size="large"
        onClick={handleSubmit}
        disabled={!selectedOption}
        sx={{ width: '100%', mt: 2 }}
      >
        Próxima Pergunta
      </Button>
    </motion.div>
  );
}
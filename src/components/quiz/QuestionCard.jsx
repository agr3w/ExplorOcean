import React, { useState } from 'react';
import { Box, Typography, Button, LinearProgress } from '@mui/material';
import { motion } from 'framer-motion';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

export default function QuestionCard({ question, options, correctAnswer, questionNumber, totalQuestions, onAnswerSubmit }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const handleOptionClick = (option) => {
    if (isAnswered) return;
    setSelectedOption(option);
    setIsAnswered(true);
  };

  const getButtonSx = (option) => {
    if (!isAnswered) {
      return {
        borderColor: selectedOption === option ? 'primary.main' : 'rgba(54, 209, 224, 0.5)',
        backgroundColor: selectedOption === option ? 'rgba(54, 209, 224, 0.1)' : 'transparent',
      };
    }
    if (option === correctAnswer) {
      return { backgroundColor: 'success.main', color: 'white', borderColor: 'success.main' };
    }
    if (option === selectedOption && option !== correctAnswer) {
      return { backgroundColor: 'error.main', color: 'white', borderColor: 'error.main' };
    }
    return { borderColor: 'rgba(255, 255, 255, 0.3)', color: 'rgba(255, 255, 255, 0.5)' };
  };

  return (
    <Box sx={{ width: '100%', overflow: 'hidden' }}>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <Box sx={{ mb: 2 }}>
          <Typography variant="overline" color="primary.light">
            PERGUNTA {questionNumber} DE {totalQuestions}
          </Typography>
          <LinearProgress variant="determinate" value={(questionNumber / totalQuestions) * 100} />
        </Box>

        <Typography variant="h5" color="white" sx={{ my: 3, fontWeight: 'bold' }}>
          {question}
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, my: 3 }}>
          {options.map((option, index) => (
            <Button
              key={index}
              variant="outlined"
              onClick={() => handleOptionClick(option)}
              disabled={isAnswered && selectedOption !== option && option !== correctAnswer}
              sx={{
                justifyContent: 'flex-start', textAlign: 'left', py: 1.5,
                transition: 'all 0.3s ease',
                ...getButtonSx(option)
              }}
              endIcon={isAnswered ? (option === correctAnswer ? <CheckCircleIcon /> : (option === selectedOption ? <CancelIcon /> : null)) : null}
            >
              {option}
            </Button>
          ))}
        </Box>
        {isAnswered && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
            <Button variant="contained" size="large" onClick={() => onAnswerSubmit(selectedOption)} sx={{ width: '100%', mt: 2 }}>
              Continuar
            </Button>
          </motion.div>
        )}
      </motion.div>
    </Box>
  );
}
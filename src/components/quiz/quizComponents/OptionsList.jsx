import React from 'react';
import { Box, Button } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

export default function OptionsList({
  options,
  selectedOption,
  isAnswered,
  correctAnswer,
  handleOptionClick,
  getButtonSx,
}) {
  return (
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
  );
}
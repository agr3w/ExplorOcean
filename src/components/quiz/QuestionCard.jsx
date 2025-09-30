import React, { useState } from 'react';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';
import QuestionProgress from './quizComponents/QuestionProgress';
import ContinueButton from './quizComponents/ContinueButton';
import QuestionTitle from './quizComponents/QuestionTitle';
import OptionsList from './quizComponents/OptionsList';

export default function QuestionCard({
  question,
  options,
  correctAnswer,
  questionNumber,
  totalQuestions,
  onAnswerSubmit
}) {
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
        <QuestionProgress questionNumber={questionNumber} totalQuestions={totalQuestions} />
        <QuestionTitle question={question} />
        <OptionsList
          options={options}
          selectedOption={selectedOption}
          isAnswered={isAnswered}
          correctAnswer={correctAnswer}
          handleOptionClick={handleOptionClick}
          getButtonSx={getButtonSx}
        />
        {isAnswered && (
          <ContinueButton onClick={() => onAnswerSubmit(selectedOption)} />
        )}
      </motion.div>
    </Box>
  );
}
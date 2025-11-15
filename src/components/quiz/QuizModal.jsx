// src/components/quiz/QuizModal.jsx

import React, { useState, useEffect } from 'react';
import { Modal, Box } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import QuestionCard from './QuestionCard';
import ResultsScreen from './ResultsScreen';

export default function QuizModal({ open, onClose, quizData }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  // Reseta o quiz sempre que o modal for fechado
  useEffect(() => {
    if (!open) {
      setTimeout(() => { // Dá tempo para a animação de saída
        setCurrentQuestionIndex(0);
        setScore(0);
        setQuizFinished(false);
      }, 300);
    }
  }, [open]);

  const handleAnswerSubmit = (selectedAnswer) => {
    // Verifica se a resposta está correta e atualiza a pontuação
    if (selectedAnswer === quizData.questions[currentQuestionIndex].correctAnswer) {
      setScore(prevScore => prevScore + 1);
    }

    // Vai para a próxima pergunta ou finaliza o quiz
    const nextQuestion = currentQuestionIndex + 1;
    if (nextQuestion < quizData.questions.length) {
      setCurrentQuestionIndex(nextQuestion);
    } else {
      setQuizFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setQuizFinished(false);
  };

  const currentQuestion = quizData.questions[currentQuestionIndex];

  return (
    <Modal open={open} onClose={onClose} sx={{ backdropFilter: 'blur(5px)' }}>
      <Box sx={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: { xs: '95vw', sm: '80vw', md: '600px' },
        maxHeight: '90vh', overflowY: 'auto',
        bgcolor: 'rgba(2, 16, 26, 0.8)',
        backdropFilter: 'blur(15px)',
        border: '1.5px solid rgba(54, 209, 224, 0.3)',
        borderRadius: 4, boxShadow: 24, p: 4
      }}>
        <AnimatePresence mode="wait">
          {quizFinished ? (
            <ResultsScreen
              key="results"
              score={score}
              totalQuestions={quizData.questions.length}
              onRestart={handleRestart}
              onClose={onClose}
            />
          ) : (
            <QuestionCard
              key={currentQuestionIndex}
              question={currentQuestion.question}
              options={currentQuestion.options}
              correctAnswer={currentQuestion.correctAnswer}
              questionNumber={currentQuestionIndex + 1}
              totalQuestions={quizData.questions.length}
              onAnswerSubmit={handleAnswerSubmit}
            />
          )}
        </AnimatePresence>
      </Box>
    </Modal>
  );
}
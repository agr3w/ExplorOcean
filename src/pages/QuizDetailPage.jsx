import React from 'react';
import { useParams } from 'react-router-dom';
import DetailPage from '../components/universal/DetailPage';
import Navigator from '../components/navigator/Navigator';
import Footer from '../components/footer/footer';
import { Box } from '@mui/material';
import { quizzesData } from '../content/contentGrid/quizzesContent';

export default function QuizDetailPage() {
  const { id } = useParams();
  const quiz = quizzesData.find(q => q.id === id);

  // Aqui você pode adicionar um componente de quiz interativo que recebe `quiz.questions`
  // Por enquanto, vamos usar o DetailPage universal para mostrar a descrição.

  return (
    <Box sx={{ backgroundColor: '#000000', color: '#ffffff', minHeight: '100vh' }}>
      <Navigator />
      <DetailPage item={quiz} />
      <Footer depth={0} />
    </Box>
  );
}
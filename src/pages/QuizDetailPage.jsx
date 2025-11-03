import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DetailPage from '../components/universal/DetailPage';
import Navigator from '../components/navigator/Navigator';
import Footer from '../components/footer/footer';
import { Box } from '@mui/material';
import { quizzesData } from '../content/contentGrid/quizzesContent';
import { useAuth } from '../context/AuthContext';
import { addHistoryItem } from '../services/userActionsService';

export default function QuizDetailPage() {
  const { id } = useParams();
  const quiz = quizzesData.find(q => q.id === id);
  const { token } = useAuth();

  useEffect(() => {
    if (!token || !quiz) return;
    const controller = new AbortController();

    const recordHistory = async () => {
      try {
        await addHistoryItem(
          {
            type: "quizzes",
            name: quiz.label,
            contentId: quiz.id,
          },
          { signal: controller.signal }
        );
      } catch (error) {
        if (error.name === 'CanceledError') {
          console.log('Requisição de histórico cancelada na desmontagem.');
        } else {
          console.error("Falha ao registrar histórico", error);
        }
      }
    };

    recordHistory();

    return () => {
      controller.abort();
    };
  }, [token, quiz]);

  return (
    <Box sx={{ backgroundColor: '#000000', color: '#ffffff', minHeight: '100vh' }}>
      <Navigator />
      <DetailPage item={quiz} />
      <Footer depth={0} />
    </Box>
  );
}
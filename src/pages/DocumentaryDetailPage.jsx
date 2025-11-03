import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { documentariesData } from '../content/contentGrid/documentariesContent';
import DetailPage from '../components/universal/DetailPage';
import Navigator from '../components/navigator/Navigator';
import Footer from '../components/footer/footer';
import { Box } from '@mui/material';
import { useAuth } from '../context/AuthContext';
import { addHistoryItem } from '../services/userActionsService';

export default function DocumentaryDetailPage() {
  const { id } = useParams();
  const documentary = documentariesData.find(doc => doc.id === id);
  const { token } = useAuth();

  useEffect(() => {
    if (!token || !documentary) return;
    const controller = new AbortController();

    const recordHistory = async () => {
      try {
        await addHistoryItem(
          {
            type: "documentaries",
            name: documentary.label,
            contentId: documentary.id,
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
  }, [token, documentary]);

  return (
    <Box sx={{ backgroundColor: '#000000', color: '#ffffff', minHeight: '100vh' }}>
      <Navigator />
      <DetailPage item={documentary} />
      <Footer depth={0} />
    </Box>
  );
}
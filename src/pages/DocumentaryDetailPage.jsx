import React from 'react';
import { useParams } from 'react-router-dom';
import { documentariesData } from '../content/contentGrid/documentariesContent';
import DetailPage from '../components/universal/DetailPage';
import Navigator from '../components/navigator/Navigator';
import Footer from '../components/footer/footer';
import { Box } from '@mui/material';

export default function DocumentaryDetailPage() {
  const { id } = useParams();
  const documentary = documentariesData.find(doc => doc.id === id);

  return (
    <Box sx={{ backgroundColor: '#000000', color: '#ffffff', minHeight: '100vh' }}>
      <Navigator />
      <DetailPage item={documentary} />
      <Footer depth={0} />
    </Box>
  );
}
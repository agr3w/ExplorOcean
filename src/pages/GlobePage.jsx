// src/pages/GlobePage.jsx

import React, { useState } from 'react';
import { Box } from '@mui/material';
import Navigator from '../components/navigator/Navigator';
import Footer from '../components/footer/footer';
import Globe3D from '../components/globo3D/Globe3D';
import DetailDrawer from '../components/globo3D/DetailDrawer';
import InterestFilter from '../components/globo3D/InterestFilter';

export default function GlobePage() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [detailContent, setDetailContent] = useState(null);
  const [filters, setFilters] = useState({ fossas: true, placas: true });

  // Funções de clique
  const handleOpenDetails = (content) => {
    setDetailContent(content);
    setIsDrawerOpen(true);
  };

  const handleCloseDetails = () => {
    setIsDrawerOpen(false);
    setDetailContent(null);
  };

  const handleMarianaClick = () => {
    handleOpenDetails({
      title: 'Fossa das Marianas',
      text: 'A Fossa das Marianas é o ponto mais profundo dos oceanos, localizada no Oceano Pacífico. Sua profundidade máxima chega a cerca de 11.000 metros.',
      imageUrl: '/src/assets/marianas-trench.jpg',
      details: 'A pressão na parte mais profunda da fossa é cerca de 1.000 vezes maior que a pressão atmosférica ao nível do mar.',
    });
  };

  const handlePlateClick = () => {
    handleOpenDetails({
      title: 'Placa do Pacífico',
      text: 'A Placa do Pacífico é uma das maiores placas tectônicas do planeta, cobrindo grande parte do Oceano Pacífico e sendo responsável por muitos terremotos e vulcões na região.',
      imageUrl: '/src/assets/pacific-plate.jpg',
      details: 'Faz parte do Anel de Fogo do Pacífico, uma área com intensa atividade sísmica e vulcânica.',
    });
  };

  return (
    <Box sx={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden', backgroundColor: 'black' }}>
      <Navigator sx={{ position: 'absolute', top: 0, left: 0, width: '100%', zIndex: 10 }} />

      <Box sx={{ width: '100%', height: '100%' }}>
        <Globe3D
          showFossas={filters.fossas}
          showPlacas={filters.placas}
          onMarianaClick={handleMarianaClick}
          onPlateClick={handlePlateClick}
        />
      </Box>
      <InterestFilter filters={filters} setFilters={setFilters} />

      <DetailDrawer
        isOpen={isDrawerOpen}
        onClose={handleCloseDetails}
        content={detailContent}
      />

      <Footer depth={0} sx={{ position: 'absolute', bottom: 0, left: 0, width: '100%', zIndex: 10 }} />
    </Box>
  );
}
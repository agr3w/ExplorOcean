import React, { useState } from 'react';
import { Box } from '@mui/material';
import Navigator from '../components/navigator/Navigator';
import Footer from '../components/footer/footer';
import Globe3D from '../components/globo3D/Globe3D';
import DetailDrawer from '../components/globo3D/DetailDrawer';
import InterestFilter from '../components/globo3D/InterestFilter';
import { interestPoints } from '../content/Globe3D/Pins';
import { generateHandlers } from '../content/Globe3D/generateHandlers'; // Função utilitária

export default function GlobePage() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [detailContent, setDetailContent] = useState(null);
  const [filters, setFilters] = useState({ fossas: true, placas: true });

  // Função para abrir detalhes no drawer
  const handleOpenDetails = (details) => {
    setDetailContent(details);
    setIsDrawerOpen(true);
  };

  const handleCloseDetails = () => {
    setIsDrawerOpen(false);
    setDetailContent(null);
  };

  // Gera handlers dinamicamente para todos os pontos de interesse
  const handlers = generateHandlers(interestPoints, handleOpenDetails);

  return (
    <Box sx={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden', backgroundColor: 'black' }}>
      <Navigator sx={{ position: 'absolute', top: 0, left: 0, width: '100%', zIndex: 10 }} />

      <Box
        sx={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
        }}
      >
        {/* ContentContainer para organizar os elementos */}
        <Box sx={{ width: '100%', height: '100%', position: 'relative' }}>
          <Globe3D
            showFossas={filters.fossas}
            showPlacas={filters.placas}
            {...handlers} 
          />
          <InterestFilter filters={filters} setFilters={setFilters} />
        </Box>
      </Box>

      <DetailDrawer
        isOpen={isDrawerOpen}
        onClose={handleCloseDetails}
        content={detailContent}
      />

      <Footer depth={0} sx={{ position: 'absolute', bottom: 0, left: 0, width: '100%', zIndex: 10 }} />
    </Box>
  );
}
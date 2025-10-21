import React, { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import DetailsModal from './DetailsModal';
import FavoriteItemCard from './FavoriteItemCard'; 

const MAX_ITEMS_TO_SHOW = 4;

const containerSx = {
  mb: 4, p: 3, borderRadius: 2,
  background: 'rgba(2,16,26,0.5)',
  boxShadow: '0 2px 12px rgba(54,209,224,0.10)',
  backdropFilter: 'blur(8px)',
};

export default function ProfileFavorites({ favorites }) {
  const [modalOpen, setModalOpen] = useState(false);

  if (!favorites || favorites.length === 0) {
    return (
      <Box sx={{ ...containerSx, textAlign: 'center' }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Meus Favoritos</Typography>
        <Typography sx={{ color: 'rgba(227, 242, 253, 0.7)', mt: 2 }}>
          Nenhum favorito adicionado ainda. Use o ícone de coração nas páginas de conteúdo!
        </Typography>
      </Box>
    );
  }

  const recentFavorites = favorites.slice(0, MAX_ITEMS_TO_SHOW);

  return (
    <>
      <Box sx={containerSx}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>Meus Favoritos</Typography>
        <Box sx={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: { xs: 1.5, sm: 2.5, md: 3 },
    mt: 2,
    justifyContent: { xs: 'flex-start', sm: 'center' },
    alignItems: 'stretch',
  }}>
          {recentFavorites.map(fav => (
            <FavoriteItemCard key={fav.id} item={fav} />
          ))}
        </Box>
        {favorites.length > MAX_ITEMS_TO_SHOW && (
          <Box sx={{ mt: 3, textAlign: 'center' }}>
            <Button variant="outlined" onClick={() => setModalOpen(true)}>
              Ver Todos os Favoritos
            </Button>
          </Box>
        )}
      </Box>
      <DetailsModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Todos os Meus Favoritos"
        items={favorites}
      />
    </>
  );
}
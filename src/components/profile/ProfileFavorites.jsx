import React, { useState } from 'react';
import { Box, Typography, Paper, Avatar, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import DetailsModal from './DetailsModal'; // 1. Importe o novo modal

const MAX_ITEMS_TO_SHOW = 4;

const FavoriteChip = styled(Paper)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  height: '60px',
  padding: theme.spacing(1),
  paddingRight: theme.spacing(2),
  backgroundColor: 'rgba(2, 16, 26, 0.7)',
  backdropFilter: 'blur(8px)',
  borderRadius: '30px',
  border: '1px solid rgba(54, 209, 224, 0.3)',
  color: 'white',
  textDecoration: 'none',
  transition: 'transform 0.3s ease, background-color 0.3s ease',
  '&:hover': {
    transform: 'translateY(-3px)',
    backgroundColor: 'rgba(54, 209, 224, 0.15)',
  },
}));

export default function ProfileFavorites({ favorites }) {
  const [modalOpen, setModalOpen] = useState(false);

  const containerSx = {
    mb: 4, p: 3, borderRadius: 3,
    background: 'rgba(2,16,26,0.5)',
    boxShadow: '0 2px 12px rgba(54,209,224,0.10)',
    backdropFilter: 'blur(8px)',
  };

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
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mt: 2 }}>
          {recentFavorites.map(fav => {
            const linkTo = `/${fav.category || fav.type}/${fav.id}`;
            return (
              <FavoriteChip
                key={fav.id}
                component={Link}
                to={linkTo}
                elevation={4}
              >
                <Avatar src={fav.imageUrl} alt={fav.label} sx={{ width: 44, height: 44, marginRight: 1.5 }} />
                <Typography variant="body2" sx={{ fontWeight: 'bold', whiteSpace: 'nowrap' }}>
                  {fav.label}
                </Typography>
              </FavoriteChip>
            );
          })}
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
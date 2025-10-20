import React, { useState } from 'react';
import { Box, Typography, Paper, Avatar, Button, Modal } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

const MAX_VISIBLE = 6;

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

function FavoriteList({ favorites, onChipClick }) {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mt: 2 }}>
      {favorites.map(fav => {
        const linkTo = `/${fav.category || fav.type}/${fav.id}`;
        return (
          <FavoriteChip
            key={fav.id}
            component={Link}
            to={linkTo}
            elevation={4}
            onClick={onChipClick}
          >
            <Avatar src={fav.imageUrl} alt={fav.label} sx={{ width: 44, height: 44, marginRight: 1.5 }} />
            <Typography variant="body2" sx={{ fontWeight: 'bold', whiteSpace: 'nowrap' }}>
              {fav.label}
            </Typography>
          </FavoriteChip>
        );
      })}
    </Box>
  );
}

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

  const visibleFavorites = favorites.slice(0, MAX_VISIBLE);
  const hasMore = favorites.length > MAX_VISIBLE;

  return (
    <Box sx={containerSx}>
      <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>Meus Favoritos</Typography>
      <FavoriteList favorites={visibleFavorites} />
      {hasMore && (
        <Button
          variant="outlined"
          sx={{ mt: 3, borderColor: '#36d1e0', color: '#36d1e0', fontWeight: 'bold' }}
          onClick={() => setModalOpen(true)}
        >
          Ver todos
        </Button>
      )}
      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        sx={{ backdropFilter: 'blur(6px)' }}
      >
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          bgcolor: 'rgba(2,16,26,0.97)',
          border: '2px solid #36d1e0',
          borderRadius: 4,
          boxShadow: 24,
          p: 4,
          minWidth: { xs: '90vw', sm: 500 },
          maxWidth: 700,
        }}>
          <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#36d1e0', mb: 3 }}>
            Todos os Favoritos
          </Typography>
          <FavoriteList favorites={favorites} onChipClick={() => setModalOpen(false)} />
          <Button
            variant="contained"
            sx={{ mt: 4 }}
            onClick={() => setModalOpen(false)}
            color="primary"
            fullWidth
          >
            Fechar
          </Button>
        </Box>
      </Modal>
    </Box>
  );
}
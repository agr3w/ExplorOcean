// src/components/Globe3D/DetailDrawer.jsx

import React from 'react';
import { Drawer, Box, Typography, IconButton, Divider } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const DetailDrawer = ({ isOpen, onClose, content }) => {
  if (!content) return null; // Não renderiza se não houver conteúdo

  return (
    <Drawer
      anchor="left" // O menu virá do lado esquerdo
      open={isOpen}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: { xs: '80%', sm: 350, md: 400 }, // Largura responsiva
          backgroundColor: 'rgba(0, 0, 0, 0.85)', // Fundo escuro semi-transparente
          color: 'white',
          backdropFilter: 'blur(5px)', // Efeito de desfoque
        },
      }}
    >
      <Box sx={{ p: 3 }}>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <Typography variant="h5" component="h2" sx={{ color: 'white' }}>
            {content.title}
          </Typography>
          <IconButton onClick={onClose} sx={{ color: 'white' }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider sx={{ mb: 2, borderColor: 'rgba(255, 255, 255, 0.3)' }} />
        {content.imageUrl && ( // Se houver imagem no conteúdo
          <Box sx={{ mb: 2 }}>
            <img 
              src={content.imageUrl} 
              alt={content.title} 
              style={{ width: '100%', borderRadius: '8px', objectFit: 'cover' }} 
            />
          </Box>
        )}
        <Typography variant="body1" sx={{ mb: 2 }}>
          {content.text}
        </Typography>
        {/* Aqui você pode adicionar mais detalhes, como links, vídeos, etc. */}
        {content.details && (
          <Box>
            <Typography variant="h6" sx={{ mt: 3, mb: 1 }}>Detalhes Adicionais:</Typography>
            <Typography variant="body2">{content.details}</Typography>
          </Box>
        )}
      </Box>
    </Drawer>
  );
};

export default DetailDrawer;
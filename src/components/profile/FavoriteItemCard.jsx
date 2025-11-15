import React from 'react';
import { Box, Typography, IconButton, Tooltip, CircularProgress } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MdClose, MdQuiz, MdMovie, MdPets, MdEco, MdFavorite } from 'react-icons/md';

const CardContainer = styled(motion.div)(({ theme }) => ({
  width: '180px',
  height: '110px',
  borderRadius: theme.spacing(2),
  overflow: 'hidden',
  position: 'relative',
  textDecoration: 'none',
  cursor: 'pointer',
  backgroundColor: 'rgba(2, 16, 26, 0.6)',
  backdropFilter: 'blur(10px)',
  border: '1.5px solid rgba(54, 209, 224, 0.2)',
  boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
  transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    borderColor: 'rgba(54, 209, 224, 0.7)',
    boxShadow: '0 8px 25px rgba(54, 209, 224, 0.3)',
  },
  '& img': {
    transition: 'transform 0.4s ease-out',
  },
  '&:hover img': {
    transform: 'scale(1.1)',
  }
}));

const ImageOverlay = styled(Box)({
  position: 'absolute',
  inset: 0,
  background: 'linear-gradient(to top, rgba(2, 16, 26, 0.9) 0%, transparent 70%)',
});

const ContentBox = styled(Box)({
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  padding: '8px 12px',
  color: 'white',
  display: 'flex',
  alignItems: 'center',
});

const TypeIconWrapper = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 8,
  right: 8,
  width: 28,
  height: 28,
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'rgba(2, 16, 26, 0.7)',
  backdropFilter: 'blur(5px)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  color: theme.palette.primary.light,
}));

const RemoveButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: 4,
  left: 4,
  width: 28,
  height: 28,
  backgroundColor: 'rgba(2, 16, 26, 0.6)',
  backdropFilter: 'blur(5px)',
  padding: 0,
  zIndex: 3,
  border: '1px solid rgba(255, 107, 107, 0.4)',
  '&:hover': {
    backgroundColor: 'rgba(2, 16, 26, 0.8)',
    borderColor: 'rgba(255, 107, 107, 0.8)',
  },
}));

// Mapeamento de ícones padronizado para os tipos
export const iconMap = {
    'quizzes': <MdQuiz size={16} color="#8d14ffff" />,
    'documentaries': <MdMovie size={16} color="#00e676" />,
    'Fauna': <MdPets size={16} color="#2979ff" />,
    'Flora': <MdEco size={16} color="#ffd600" />,
};

// Função para normalizar o tipo
function normalizeType(type) {
  if (!type) return '';
  const t = type.toLowerCase();
  if (t.includes('doc')) return 'documentaries';
  if (t.includes('quiz')) return 'quizzes';
  if (t.includes('fauna')) return 'Fauna';
  if (t.includes('flora')) return 'Flora';
  return type;
}

export default function FavoriteItemCard({ item, onRemove, isLoading }) {
  // Normaliza o tipo para garantir o ícone e o link corretos
  const contentType = normalizeType(item.contentType || item.category || item.type);

  let linkTo = "/";
  if (contentType === "documentaries") {
    linkTo = `/documentaries/${item.contentId || item.id}`;
  } else if (contentType === "quizzes") {
    linkTo = `/quizzes/${item.contentId || item.id}`;
  } else if (contentType === "Fauna") {
    linkTo = `/Fauna/${item.contentId || item.id}`;
  } else if (contentType === "Flora") {
    linkTo = `/Flora/${item.contentId || item.id}`;
  }

  const handleRemoveClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (onRemove) {
      onRemove(item);
    }
  };

  return (
    <CardContainer
      component={Link}
      to={linkTo}
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
      layout
    >
      <Tooltip title="Remover dos Favoritos" arrow placement="top">
        <RemoveButton onClick={handleRemoveClick} disabled={isLoading}>
          {isLoading ? <CircularProgress size={16} color="inherit" /> : <MdFavorite size={16} style={{ color: '#ff6b6b' }} />}
        </RemoveButton>
      </Tooltip>
      <img
        src={item.imageUrl}
        alt={item.label}
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
      <ImageOverlay />
      <ContentBox>
        <Box>
          <Typography variant="caption" sx={{ fontWeight: 'bold', lineHeight: 1.3, display: 'block' }}>
            {item.label}
          </Typography>
          <Typography variant="caption" sx={{ fontSize: '0.65rem', color: 'rgba(227, 242, 253, 0.6)', display: 'block' }}>
            Adicionado em {item.createdAt ? new Date(item.createdAt).toLocaleDateString() : '--'}
          </Typography>
        </Box>
      </ContentBox>
      <TypeIconWrapper>
        {iconMap[contentType]}
      </TypeIconWrapper>
    </CardContainer>
  );
}
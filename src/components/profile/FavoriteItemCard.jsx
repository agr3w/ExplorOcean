import React from 'react';
import { Box, Typography, IconButton, Tooltip, CircularProgress } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MdQuiz, MdMovie, MdPets, MdEco, MdFavorite } from 'react-icons/md';

const CardContainer = styled(motion.div)(({ theme }) => ({
  width: '180px',
  height: '100px',
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

// Azul mais suave e efeito liquidGlass
const RemoveButton = styled(motion.button)(({ theme }) => ({
  position: 'absolute',
  top: 4,
  left: 4,
  width: 32,
  height: 32,
  borderRadius: '50%',
  background: 'linear-gradient(135deg, rgba(54,209,224,0.45) 0%, rgba(41,121,255,0.35) 100%)',
  backdropFilter: 'blur(10px)',
  color: '#36d1e0',
  border: '1.5px solid rgba(54,209,224,0.18)',
  boxShadow: '0 2px 12px rgba(54,209,224,0.10)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 0,
  zIndex: 3,
  cursor: 'pointer',
  outline: 'none',
  transition: 'background 0.2s, color 0.2s, box-shadow 0.2s',
  '&:hover': {
    background: 'linear-gradient(135deg, rgba(54,209,224,0.7) 0%, rgba(41,121,255,0.5) 100%)',
    color: '#fff',
    boxShadow: '0 0 18px 2px #36d1e0',
  },
}));

const iconMap = {
  quizzes: <MdQuiz color="#8d14ffff" />,
  documentaries: <MdMovie color="#00e676" />,
  Fauna: <MdPets color="#2979ff" />,
  Flora: <MdEco color="#ffd600" />,
};

export default function FavoriteItemCard({ item, onRemove, isLoading }) {
  const contentType = item.category || item.type;

  let linkTo = "/";
  if (item.type === "documentaries" || item.category === "Documentaries") {
    linkTo = `/documentaries/${item.contentId || item.id}`;
  } else if (item.type === "quizzes" || item.category === "Quiz") {
    linkTo = `/quizzes/${item.contentId || item.id}`;
  } else if (item.category === "Fauna") {
    linkTo = `/Fauna/${item.contentId || item.id}`;
  } else if (item.category === "Flora") {
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
        <RemoveButton
          as={IconButton}
          onClick={handleRemoveClick}
          whileHover={{ scale: 1.18, boxShadow: '0 0 24px 4px #36d1e0' }}
          whileTap={{ scale: 0.95 }}
        >
          {isLoading
            ? (
              <motion.div
                initial={{ scale: 1, opacity: 0.7 }}
                animate={{ scale: [1, 1.25, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ repeat: Infinity, duration: 1.1, repeatType: "loop" }}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}
              >
                <MdFavorite size={22} style={{ filter: 'drop-shadow(0 0 8px #36d1e0)' }} />
                <CircularProgress
                  size={26}
                  color="inherit"
                  thickness={5}
                  sx={{
                    position: 'absolute',
                    left: 3,
                    top: 3,
                    zIndex: 2,
                    color: '#36d1e0',
                    opacity: 0.45,
                  }}
                />
              </motion.div>
            )
            : <MdFavorite size={20} />
          }
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
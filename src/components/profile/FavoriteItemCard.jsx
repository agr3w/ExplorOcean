import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MdQuiz, MdMovie, MdPets, MdEco } from 'react-icons/md';

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

const iconMap = {
  Quiz: <MdQuiz size={16} />,
  Documentaries: <MdMovie size={16} />,
  Fauna: <MdPets size={16} />,
  Flora: <MdEco size={16} />,
};

export default function FavoriteItemCard({ item }) {
  const contentType = item.category || item.type;
  // const linkTo = `/${contentType}/${item.contentId}`;  

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

  return (
    <Link to={linkTo} style={{ textDecoration: 'none' }}>
      <CardContainer
        whileHover={{ y: -5 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
      >
        <img
          src={item.imageUrl}
          alt={item.label}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <ImageOverlay />
        <ContentBox>
          <Typography variant="caption" sx={{ fontWeight: 'bold', lineHeight: 1.3 }}>
            {item.label}
          </Typography>
        </ContentBox>
        <TypeIconWrapper>
          {iconMap[contentType]}
        </TypeIconWrapper>
      </CardContainer>
    </Link>
  );
}
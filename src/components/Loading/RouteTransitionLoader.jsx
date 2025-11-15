// src/components/Loading/RouteTransitionLoader.jsx

import React from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { GiWhaleTail } from 'react-icons/gi'; // Usando um ícone temático

// Componente para uma única bolha animada
const Bubble = ({ size, x, duration, delay }) => (
  <motion.div
    style={{
      position: 'absolute',
      bottom: -size, // Começa fora da tela
      left: `${x}%`,
      width: size,
      height: size,
      backgroundColor: 'rgba(54, 209, 224, 0.2)',
      borderRadius: '50%',
      border: '1px solid rgba(54, 209, 224, 0.3)',
    }}
    animate={{ y: `-${window.innerHeight + size}px` }} // Anima para cima, para fora da tela
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: 'linear',
    }}
  />
);

export default function RouteTransitionLoader() {
  // Gera um array de bolhas com propriedades aleatórias para um efeito natural
  const bubbles = React.useMemo(() =>
    Array.from({ length: 15 }).map(() => ({
      id: Math.random(),
      size: Math.random() * 20 + 10, // Tamanho entre 10px e 30px
      x: Math.random() * 100, // Posição horizontal aleatória
      duration: Math.random() * 10 + 8, // Duração entre 8s e 18s
      delay: Math.random() * 2, // Atraso inicial aleatório
    })),
  []);

  return (
    <Box
      sx={{
        position: 'fixed',
        inset: 0,
        display: 'flex',
        flexDirection: 'column', // Para alinhar o texto
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(2, 16, 26, 0.8)', // Fundo escuro translúcido
        backdropFilter: 'blur(8px)', // Efeito de vidro
        zIndex: 9998,
        overflow: 'hidden', // Garante que as bolhas não causem scroll
      }}
    >
      {/* Renderiza as bolhas animadas */}
      {bubbles.map(bubble => (
        <Bubble key={bubble.id} {...bubble} />
      ))}
      
      {/* Ícone central com animação de "flutuação" */}
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <GiWhaleTail size={80} color="#36d1e0" />
      </motion.div>
      
      {/* Texto de carregamento */}
      <Typography
        variant="h6"
        sx={{
          color: '#e3f2fd',
          fontWeight: 600,
          letterSpacing: 2,
          mt: 3,
          textShadow: '0 0 10px rgba(54, 209, 224, 0.5)',
        }}
      >
        MERGULHANDO...
      </Typography>
    </Box>
  );
}
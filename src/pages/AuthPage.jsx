// src/pages/AuthPage.jsx

import React from 'react';
import { Box } from '@mui/material';
import AuthForm from '../components/auth/AuthForm';
import { motion } from 'framer-motion';

const backgroundVideo = '@/assets/videos/ocean.mp4'; // Certifique-se de que o caminho está correto

// Componente para as bolhas animadas
const LiquidBlob = ({ top, left, size, color, animateProps }) => (
    <motion.div
        animate={animateProps}
        transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut'
        }}
        style={{
            position: 'absolute',
            top, left,
            width: size,
            height: size,
            background: color,
            borderRadius: '50%',
            filter: 'blur(80px)',
            zIndex: -1,
        }}
    />
);

export default function AuthPage() {
  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        backgroundColor: '#02101a',
      }}
    >
      {/* Vídeo de Fundo */}
      <video
        autoPlay
        loop
        muted
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          minWidth: '100%',
          minHeight: '100%',
          width: 'auto',
          height: 'auto',
          zIndex: -2,
          filter: 'brightness(0.4)',
        }}
      >
        <source src={backgroundVideo} type="video/mp4" />
        Seu navegador não suporta vídeos.
      </video>

      {/* Overlay para escurecer ainda mais e dar cor */}
      <Box 
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(2, 16, 26, 0.5)',
          zIndex: -1,
        }}
      />

      {/* Bolhas líquidas animadas */}
      <LiquidBlob 
        top="10%" left="10%" size="400px" color="#36d1e0"
        animateProps={{ x: [0, 100, -50, 0], y: [0, -80, 50, 0] }} 
      />
      <LiquidBlob 
        top="60%" left="70%" size="300px" color="#1976d2"
        animateProps={{ x: [0, -70, 40, 0], y: [0, 50, -100, 0] }}
      />

      {/* Componente do Formulário */}
      <AuthForm />
    </Box>
  );
}
// src/components/auth/AuthForm.jsx

import React, { useState } from 'react';
import { Box } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

export default function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => setIsLogin(!isLogin);

  return (
    // O container precisa de perspectiva para o efeito 3D
    <Box sx={{ perspective: '1200px' }}>
      <motion.div
        // A animação de flip acontece aqui
        animate={{ rotateY: isLogin ? 0 : 180 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20, duration: 0.8 }}
        style={{
          position: 'relative',
          width: '380px', // Largura do painel
          height: '500px', // Altura do painel
          transformStyle: 'preserve-3d', // Essencial para o 3D
        }}
      >
        {/* LADO DA FRENTE: LOGIN */}
        <Box sx={{
            position: 'absolute', width: '100%', height: '100%',
            backfaceVisibility: 'hidden', // Esconde este lado quando virado
        }}>
            <LoginForm onToggle={toggleForm} />
        </Box>

        {/* LADO DE TRÁS: CADASTRO */}
        <Box sx={{
            position: 'absolute', width: '100%', height: '100%',
            backfaceVisibility: 'hidden', // Esconde este lado quando virado
            transform: 'rotateY(180deg)', // Já começa virado para trás
        }}>
            <RegisterForm onToggle={toggleForm} />
        </Box>
      </motion.div>
    </Box>
  );
}
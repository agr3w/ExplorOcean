import React, { useState } from 'react';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import MascoteAnimado from './MascoteAnimado';
import CuriosidadeOceano from './CuriosidadeOceano';

export default function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const [mood, setMood] = useState("idle");
  const [curioIndex, setCurioIndex] = useState(() => Math.floor(Math.random() * 7));

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setCurioIndex(curioIndex + 1); // Troca curiosidade ao alternar tela
    setMood("idle");
  };

  // Exemplo de callback para sucesso/erro (passe para LoginForm/RegisterForm)
  const handleSuccess = () => setMood("happy");
  const handleError = () => setMood("sad");

  return (
    <Box sx={{ perspective: '1200px', width: 400, maxWidth: '95vw' }}>
      <MascoteAnimado mood={mood} />
      <CuriosidadeOceano index={curioIndex} />
      <motion.div
        animate={{ rotateY: isLogin ? 0 : 180 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20, duration: 0.8 }}
        style={{
          position: 'relative',
          width: '100%',
          height: '500px',
          transformStyle: 'preserve-3d',
        }}
      >
        {/* LADO DA FRENTE: LOGIN */}
        <Box sx={{
            position: 'absolute', width: '100%', height: '100%',
            backfaceVisibility: 'hidden',
        }}>
            <LoginForm onToggle={toggleForm} onSuccess={handleSuccess} onError={handleError} />
        </Box>
        {/* LADO DE TRÁS: CADASTRO */}
        <Box sx={{
            position: 'absolute', width: '100%', height: '100%',
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
        }}>
            <RegisterForm onToggle={toggleForm} onSuccess={handleSuccess} onError={handleError} />
        </Box>
      </motion.div>
    </Box>
  );
}
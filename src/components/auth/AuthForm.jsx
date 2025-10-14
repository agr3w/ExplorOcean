import React, { useState } from 'react';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import MascoteAnimado from './MascoteAnimado';
import CuriosidadeOceano from './CuriosidadeOceano';
import AuthErrorAlert from './AuthErrorAlert';

export default function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const [mood, setMood] = useState("idle");
  const [error, setError] = useState('');
  const [curioIndex, setCurioIndex] = useState(() => Math.floor(Math.random() * 7));

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setCurioIndex(curioIndex + 1);
    setMood("idle");
    setError('');
  };

  const handleSuccess = () => setMood("happy");
  const handleError = () => setMood("sad");

  return (
    <Box sx={{ perspective: '1200px', width: 400, maxWidth: '95vw' }}>
      <MascoteAnimado mood={mood} />
      <CuriosidadeOceano index={curioIndex} />
      <AuthErrorAlert message={error} onClose={() => { setError(''); setMood('idle'); }} />
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
        <Box sx={{
          position: 'absolute', width: '100%', height: '100%',
          backfaceVisibility: 'hidden',
        }}>
          <LoginForm
            onToggle={toggleForm}
            onSuccess={handleSuccess}
            onError={handleError}
            setError={setError}
            setMood={setMood}
          />
        </Box>
        <Box sx={{
          position: 'absolute', width: '100%', height: '100%',
          backfaceVisibility: 'hidden',
          transform: 'rotateY(180deg)',
        }}>
          <RegisterForm
            onToggle={toggleForm}
            onSuccess={handleSuccess}
            onError={handleError}
            setError={setError}
            setMood={setMood}
          />
        </Box>
      </motion.div>
    </Box>
  );
}
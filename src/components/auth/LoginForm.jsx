import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Box, Typography, TextField, Button, Link, CircularProgress } from '@mui/material';
import { MdAlternateEmail, MdLockOutline } from 'react-icons/md';
import { useAuthForm } from '@/hooks/useAuthForm';

export default function LoginForm({ onToggle, setError, setSuccess, setMood }) {
  const { formData, isLoading, validationErrors, handleChange, handleSubmit } = useAuthForm(
    true, onToggle, setSuccess, setError, setMood
  );

  const fieldVariants = {
    hidden: { opacity: 0, y: 40, filter: 'blur(8px)' },
    visible: i => ({
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { delay: i * 0.13, type: 'spring', stiffness: 80 }
    }),
  };

  return (
    <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(2, 16, 26, 0.5)',
              backdropFilter: 'blur(4px)',
              borderRadius: '16px',
              zIndex: 10,
            }}
          >
            <CircularProgress color="primary" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* O seu formulário original fica aqui dentro */}
      <Box
        component={motion.form}
        onSubmit={handleSubmit}
        initial={{ opacity: 0, rotateY: 30, filter: 'blur(8px)' }}
        animate={{ opacity: 1, rotateY: 0, filter: 'blur(0px)' }}
        exit={{ opacity: 0, rotateY: -30, filter: 'blur(8px)' }}
        transition={{ duration: 0.7, ease: [0.4, 0.8, 0.3, 1] }}
        sx={{
          width: '100%', height: '90%', p: 4, borderRadius: 4,
          display: 'flex', flexDirection: 'column',
          backgroundColor: 'rgba(2, 16, 26, 0.7)',
          backdropFilter: 'blur(12px)',
          border: '1.5px solid rgba(54, 209, 224, 0.3)',
          boxShadow: '0 8px 32px rgba(2, 16, 26, 0.5)',
          color: 'white',
          perspective: 1200,
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: 'bold', textAlign: 'center', mb: 3 }}>
          Login
        </Typography>

        <motion.div custom={0} variants={fieldVariants} initial="hidden" animate="visible">
          <TextField
            label="Email"
            name="email"
            value={formData.email || ''}
            onChange={handleChange}
            variant="standard"
            error={!!validationErrors.email}
            helperText={validationErrors.email || ' '}
            InputProps={{
              startAdornment: <MdAlternateEmail size={20} style={{ marginRight: '12px', color: 'rgba(255,255,255,0.5)' }} />
            }}
            sx={{
              width: '100%',
              '& .MuiInput-underline:before': { borderBottomColor: 'rgba(255, 255, 255, 0.3)' },
              '& .MuiInput-underline:after': {
                borderBottom: '2px solid #36d1e0',
                boxShadow: '0 5px 15px -5px #36d1e0',
              },
              input: { color: 'white' },
              label: { color: 'rgba(255,255,255,0.7)' }
            }}
          />
        </motion.div>
        <motion.div custom={1} variants={fieldVariants} initial="hidden" animate="visible">
          <TextField
            label="Senha"
            name="password"
            value={formData.password || ''}
            onChange={handleChange}
            type="password"
            variant="standard"
            error={!!validationErrors.password}
            helperText={validationErrors.password || ' '}
            InputProps={{
              startAdornment: <MdLockOutline size={20} style={{ marginRight: '12px', color: 'rgba(255,255,255,0.5)' }} />
            }}
            sx={{
              width: '100%',
              mt: 3,
              '& .MuiInput-underline:before': { borderBottomColor: 'rgba(255, 255, 255, 0.3)' },
              '& .MuiInput-underline:after': {
                borderBottom: '2px solid #36d1e0',
                boxShadow: '0 5px 15px -5px #36d1e0',
              },
              input: { color: 'white' },
              label: { color: 'rgba(255,255,255,0.7)' }
            }}
          />
        </motion.div>

        <motion.div whileTap={{ scale: 0.95 }} custom={2} variants={fieldVariants} initial="hidden" animate="visible">
          <Button type="submit" variant="contained" size="large" disabled={isLoading} sx={{
            width: '100%', mt: 4, py: 1.5,
            borderRadius: '50px',
            fontWeight: 'bold',
            background: 'linear-gradient(90deg, #36d1e0 0%, #1976d2 100%)',
            boxShadow: '0 0 20px rgba(54, 209, 224, 0.4)',
            transition: 'box-shadow 0.3s ease',
            '&:hover': {
              boxShadow: '0 0 30px rgba(54, 209, 224, 0.7)',
            }
          }}>
            {isLoading ? <CircularProgress size={24} color="inherit" /> : 'Entrar'}
          </Button>
        </motion.div>

        <motion.div custom={3} variants={fieldVariants} initial="hidden" animate="visible" style={{ marginTop: 'auto' }}>
          <Typography variant="body2" sx={{ textAlign: 'center', pt: 2 }}>
            Não tem uma conta?{' '}
            <Link component="button" variant="body2" onClick={onToggle} sx={{ fontWeight: 'bold' }}>
              Cadastre-se
            </Link>
          </Typography>
        </motion.div>
      </Box>
    </Box>
  );
}
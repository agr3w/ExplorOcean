// src/components/auth/RegisterForm.jsx

import React from 'react';
import { Box, Typography, TextField, Button, Link } from '@mui/material';

export default function RegisterForm({ onToggle }) {
  return (
    <Box sx={{
        width: '100%', height: '90%', p: 4, borderRadius: 4,
        display: 'flex', flexDirection: 'column', gap: 2, // Gap menor para mais campos
        backgroundColor: 'rgba(2, 16, 26, 0.7)',
        backdropFilter: 'blur(12px)',
        border: '1.5px solid rgba(54, 209, 224, 0.3)',
        boxShadow: '0 8px 32px rgba(2, 16, 26, 0.5)',
        color: 'white'
    }}>
      <Typography variant="h4" sx={{ fontWeight: 'bold', textAlign: 'center', mb: 1 }}>Cadastro</Typography>
      <TextField label="Nome de Usuário" variant="outlined" />
      <TextField label="Email" variant="outlined" />
      <TextField label="Senha" type="password" variant="outlined" />
      <Button variant="contained" size="large" sx={{ mt: 2 }}>Criar Conta</Button>
      <Typography variant="body2" sx={{ textAlign: 'center', mt: 1 }}>
        Já tem uma conta?{' '}
        <Link component="button" variant="body2" onClick={onToggle} sx={{ fontWeight: 'bold' }}>
          Fazer Login
        </Link>
      </Typography>
    </Box>
  );
}
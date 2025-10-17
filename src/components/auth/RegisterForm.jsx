import React from 'react';
import { Box, Typography, TextField, Button, Link, CircularProgress } from '@mui/material';
import { useAuthForm } from '@/hooks/useAuthForm';

export default function RegisterForm({ onToggle, setError, setSuccess, setMood }) {
  const { formData, isLoading, validationErrors, handleChange, handleSubmit } = useAuthForm(
    false, onToggle, setSuccess, setError, setMood
  );

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        width: '100%', height: '90%', p: 4, borderRadius: 4,
        display: 'flex', flexDirection: 'column',
        backgroundColor: 'rgba(2, 16, 26, 0.7)',
        backdropFilter: 'blur(12px)',
        border: '1.5px solid rgba(54, 209, 224, 0.3)',
        boxShadow: '0 8px 32px rgba(2, 16, 26, 0.5)',
        color: 'white'
      }}
    >
      <Typography variant="h4" sx={{ fontWeight: 'bold', textAlign: 'center', mb: 1 }}>Cadastro</Typography>
      <TextField
        label="Nome de Usuário"
        name="username"
        value={formData.username || ''}
        onChange={handleChange}
        variant="standard"
        error={!!validationErrors.username}
        helperText={validationErrors.username || ' '}
      />
      <TextField
        label="Email"
        name="email"
        value={formData.email || ''}
        onChange={handleChange}
        variant="standard"
        error={!!validationErrors.email}
        helperText={validationErrors.email || ' '}
        sx={{ mt: 2 }}
      />
      <TextField
        label="Senha"
        name="password"
        value={formData.password || ''}
        onChange={handleChange}
        type="password"
        variant="standard"
        error={!!validationErrors.password}
        helperText={validationErrors.password || ' '}
        sx={{ mt: 2 }}
      />
      <Button type="submit" variant="contained" size="large" disabled={isLoading} sx={{ mt: 2 }}>
        {isLoading ? <CircularProgress size={24} color="inherit" /> : 'Criar Conta'}
      </Button>
      <Typography variant="body2" sx={{ textAlign: 'center', mt: 'auto', pt: 1 }}>
        Já tem uma conta?{' '}
        <Link component="button" variant="body2" onClick={onToggle} sx={{ fontWeight: 'bold' }}>
          Fazer Login
        </Link>
      </Typography>
    </Box>
  );
}
// src/components/auth/RegisterForm.jsx

import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Link, CircularProgress, Alert } from '@mui/material';
import axios from 'axios'; // 1. Importe o Axios e outros componentes

// Lembre-se que as props onSuccess e onError vêm do AuthForm.jsx para controlar o mascote
export default function RegisterForm({ onToggle, onSuccess, onError }) {
  // 2. Estados para controlar os dados do formulário, carregamento e erros
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // 3. Função para atualizar o estado conforme o usuário digita
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  // 4. Função para enviar os dados para o back-end ao submeter
  const handleSubmit = async (e) => {
    e.preventDefault(); // Previne o recarregamento da página
    setIsLoading(true);
    setError('');
    setSuccess('');

    try {
      // Faz a requisição POST para a nossa API
      const response = await axios.post('http://localhost:3001/api/users/register', formData);
      
      // Se deu tudo certo (status 201)
      setSuccess('Cadastro realizado com sucesso! Você será redirecionado para o login.');
      onSuccess(); // Deixa o mascote feliz

      // Após um breve momento, limpa o formulário e vira para a tela de login
      setTimeout(() => {
        onToggle();
      }, 2000);

    } catch (err) {
      // Se a API retornou um erro
      setError(err.response?.data?.message || 'Ocorreu um erro. Tente novamente.');
      onError(); // Deixa o mascote triste
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box
      component="form" // Transformamos em um formulário
      onSubmit={handleSubmit}
      sx={{
        width: '100%', height: '100%', p: 4, borderRadius: 4,
        display: 'flex', flexDirection: 'column',
        backgroundColor: 'rgba(2, 16, 26, 0.7)',
        backdropFilter: 'blur(12px)',
        border: '1.5px solid rgba(54, 209, 224, 0.3)',
        boxShadow: '0 8px 32px rgba(2, 16, 26, 0.5)',
        color: 'white'
      }}
    >
      <Typography variant="h4" sx={{ fontWeight: 'bold', textAlign: 'center', mb: 1 }}>Cadastro</Typography>
      
      {/* 5. Conecte os TextFields aos estados */}
      <TextField label="Nome de Usuário" name="username" value={formData.username} onChange={handleChange} variant="standard" sx={{ /* ... estilos ... */ }} />
      <TextField label="Email" name="email" value={formData.email} onChange={handleChange} variant="standard" sx={{ mt: 2, /* ... estilos ... */ }} />
      <TextField label="Senha" name="password" value={formData.password} onChange={handleChange} type="password" variant="standard" sx={{ mt: 2, /* ... estilos ... */ }} />
      
      {/* Mensagens de erro ou sucesso */}
      <Box sx={{ height: '40px', mt: 2 }}>
        {error && <Alert severity="error">{error}</Alert>}
        {success && <Alert severity="success">{success}</Alert>}
      </Box>

      <Button type="submit" variant="contained" size="large" disabled={isLoading} sx={{ mt: 1 }}>
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
import React from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';

export default function ProfileSettings() {
    return (
        <Box sx={{
            mb: 4, p: 3, borderRadius: 3,
            background: 'rgba(2,16,26,0.5)', boxShadow: '0 2px 12px rgba(54,209,224,0.10)',
            backdropFilter: 'blur(8px)',
        }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>Configurações</Typography>
            <TextField label="Nome de Usuário" variant="standard" fullWidth sx={{ mb: 2 }} />
            <TextField label="Email" variant="standard" fullWidth sx={{ mb: 2 }} />
            <TextField label="Nova Senha" type="password" variant="standard" fullWidth sx={{ mb: 2 }} />
            <Button variant="contained" sx={{ mt: 1 }}>Salvar Alterações</Button>
        </Box>
    );
}
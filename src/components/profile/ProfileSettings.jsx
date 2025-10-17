import React, { useState } from 'react';
import { Box, Typography, TextField, Button, CircularProgress } from '@mui/material';
import { updateUserProfile } from '../../services/userService';

export default function ProfileSettings({ user, setUser }) {
    const [formData, setFormData] = useState({
        username: user.username || '',
        email: user.email || '',
        password: '',
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        setLoading(true);
        try {
            const dataToUpdate = { ...formData };
            if (!dataToUpdate.password) {
                delete dataToUpdate.password;
            }
            const { data } = await updateUserProfile(dataToUpdate);
            setUser(data);
        } catch (error) {
            console.error("Erro ao atualizar perfil", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Box sx={{
            mb: 4, p: 3, borderRadius: 3,
            background: 'linear-gradient(120deg, rgba(54,209,224,0.18) 0%, rgba(41,118,194,0.13) 100%)',
            boxShadow: '0 4px 24px rgba(54,209,224,0.10)',
            backdropFilter: 'blur(10px)',
            border: '1.5px solid rgba(54,209,224,0.13)',
        }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, color: '#36d1e0' }}>Configurações</Typography>
            <TextField
                name="username"
                label="Nome de Usuário"
                value={formData.username}
                onChange={handleChange}
                variant="standard"
                fullWidth
                sx={{ mb: 2 }}
            />
            <TextField
                name="email"
                label="Email"
                value={formData.email}
                onChange={handleChange}
                variant="standard"
                fullWidth
                sx={{ mb: 2 }}
            />
            <TextField
                name="password"
                label="Nova Senha (deixe em branco para não alterar)"
                type="password"
                value={formData.password}
                onChange={handleChange}
                variant="standard"
                fullWidth
                sx={{ mb: 2 }}
            />
            <Button variant="contained" onClick={handleSubmit} disabled={loading} sx={{
                mt: 1,
                background: 'linear-gradient(90deg, #36d1e0 0%, #1976d2 100%)',
                color: '#fff',
                fontWeight: 'bold',
                borderRadius: 3,
                boxShadow: '0 2px 12px rgba(54,209,224,0.18)',
                '&:hover': {
                    background: 'linear-gradient(90deg, #1976d2 0%, #36d1e0 100%)',
                }
            }}>
                {loading ? <CircularProgress size={24} /> : "Salvar Alterações"}
            </Button>
        </Box>
    );
}
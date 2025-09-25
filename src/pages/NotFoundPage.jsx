import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { FaWater } from 'react-icons/fa';

export default function NotFoundPage() {
    const navigate = useNavigate();

    return (
        <Box
            sx={{
                minHeight: '80vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#e3f2fd',
                textAlign: 'center',
                gap: 3,
            }}
        >
            <FaWater size={64} color="#36d1e0" style={{ marginBottom: 16 }} />
            <Typography variant="h2" sx={{ fontWeight: 900, color: '#36d1e0' }}>
                404
            </Typography>
            <Typography variant="h5" sx={{ mb: 2 }}>
                Ops! Página ou elemento não encontrado.
            </Typography>
            <Typography variant="body1" sx={{ mb: 4 }}>
                O conteúdo que você procura não existe ou foi removido.<br />
                Que tal voltar para a página inicial e continuar explorando o oceano?
            </Typography>
            <Button
                variant="contained"
                color="primary"
                onClick={() => navigate('/')}
                sx={{
                    background: "linear-gradient(135deg, #36d1e0 60%, #1976d2 100%)",
                    color: "#fff",
                    fontWeight: 700,
                    px: 4,
                    py: 1.5,
                    borderRadius: 3,
                    fontSize: "1.1rem"
                }}
            >
                Voltar para o início
            </Button>
        </Box>
    );
}
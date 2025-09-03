import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { Link } from 'react-router-dom';

const paths = [
    { label: 'Quizzes', description: 'Teste seus conhecimentos de forma divertida.', link: '/quizzes' },
    { label: 'Documentários', description: 'Assista e aprenda com conteúdos ricos.', link: '/documentaries' },
    { label: 'Exploração', description: 'Descubra e interaja com o oceano.', link: '/explorerHub' },
];

export default function LearningPathsSection() {
    return (
        <Box
            sx={{
                width: '100%',
                minHeight: 400,
                py: 8,
                background: 'linear-gradient(180deg, #1e3c72 0%, #2a5298 50%, #0a174e 100%)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <Typography
                variant="h4"
                sx={{
                    color: '#fff',
                    fontWeight: 700,
                    mb: 6,
                    textAlign: 'center',
                }}
            >
                Aprenda da sua maneira
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    gap: { xs: 2, md: 6 },
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                }}
            >
                {paths.map((path) => (
                    <Link to={path.link} key={path.label} style={{ textDecoration: 'none' }}>
                        <Paper
                            elevation={0}
                            sx={{
                                width: 180,
                                height: 180,
                                background: 'rgba(255,255,255,0.12)',
                                borderRadius: 6,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: '#fff',
                                mx: 2,
                                backdropFilter: 'blur(16px) saturate(180%)',
                                border: '1.5px solid rgba(255,255,255,0.25)',
                                boxShadow: '0 4px 24px 0 rgba(30,60,114,0.12)',
                                transition: 'transform 0.3s cubic-bezier(.77,0,.18,1), box-shadow 0.3s cubic-bezier(.77,0,.18,1), background 0.3s',
                                cursor: 'pointer',
                                '&:hover': {
                                    transform: 'translateY(-12px) scale(1.06)',
                                    boxShadow: '0 8px 32px 0 rgba(30,60,114,0.22)',
                                    background: 'rgba(173,216,230,0.18)',
                                    border: '2px solid rgba(173,216,230,0.35)',
                                },
                            }}
                        >
                            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, letterSpacing: 1 }}>
                                {path.label}
                            </Typography>
                            <Typography variant="body2" sx={{ textAlign: 'center', px: 2, opacity: 0.85 }}>
                                {path.description}
                            </Typography>
                        </Paper>
                    </Link>
                ))}
            </Box>
        </Box>
    );
}
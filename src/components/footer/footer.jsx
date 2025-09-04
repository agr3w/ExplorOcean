import React from 'react';
import { Box, Typography, IconButton, Link as MuiLink } from '@mui/material';
import { MdEmail } from 'react-icons/md';
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';

const AlgaSVG = () => (
    <svg
        width="10%"
        height="10%"
        viewBox="0 0 60 120"
        fill="none"
        preserveAspectRatio="none"
        style={{
            position: 'absolute',
            bottom: 0,
            left: '60%',
            right: 0,
            zIndex: 0,
            minWidth: 60,
            maxWidth: '300px',
            height: '100%',
            pointerEvents: 'none',
        }}
    >
        <path d="M30 120 Q20 80 40 60 Q60 40 30 -10" stroke="#36d1e0" strokeWidth="4" fill="none" />
    </svg>
);

export default function Footer({ depth = 3 }) {
    const gradients = [
        'linear-gradient(180deg, #1e3c72 0%, #2a5298 100%)',
        'linear-gradient(180deg, #0a174e 0%, #071952 100%)',
        'linear-gradient(180deg, #000428 0%, #000 100%)',
    ];
    const background = gradients[Math.min(depth, gradients.length - 1)];

    return (
        <Box
            component="footer"
            sx={{
                width: '100%',
                py: 6,
                background,
                color: '#fff',
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                px: { xs: 3, md: 8 },
                position: 'relative',
                minHeight: 180,
                overflow: 'hidden',
            }}
        >
            <Box sx={{ zIndex: 1 }}>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 700 }}>ExplorOcean</Typography>
                <Typography variant="body2" sx={{ mb: 1 }}>© {new Date().getFullYear()} Todos os direitos reservados.</Typography>
                <Typography variant="body2">Contato: explor@ocean.com</Typography>
            </Box>
            <Box sx={{ zIndex: 1 }}>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 700 }}>Links Úteis</Typography>
                <MuiLink href="/documentaries" color="inherit" underline="hover" sx={{ display: 'block', mb: 1 }}>Documentários</MuiLink>
                <MuiLink href="/quizzes" color="inherit" underline="hover" sx={{ display: 'block', mb: 1 }}>Quizzes</MuiLink>
                <MuiLink href="/fauna-flora" color="inherit" underline="hover" sx={{ display: 'block' }}>Fauna e Flora</MuiLink>
            </Box>
            <Box sx={{ zIndex: 1 }}>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 700 }}>Redes Sociais</Typography>
                <Box sx={{ display: 'flex', gap: 2 }}>
                    <IconButton href="mailto:explor@ocean.com" sx={{ color: '#36d1e0' }}><MdEmail size={28} /></IconButton>
                    <IconButton href="https://instagram.com" target="_blank" sx={{ color: '#36d1e0' }}>
                        <FaInstagram size={28} />
                    </IconButton>
                    <IconButton href="https://github.com/agr3w" target="_blank" sx={{ color: '#36d1e0' }}>
                        <FaGithub size={28} />
                    </IconButton>
                    <IconButton href="https://www.linkedin.com/in/weslley-luiz-kampa/" target="_blank" sx={{ color: '#36d1e0' }}>
                        <FaLinkedin size={28} />
                    </IconButton>
                </Box>
            </Box>
            {/* Elemento decorativo oceânico */}
            <AlgaSVG />
        </Box>
    );
}
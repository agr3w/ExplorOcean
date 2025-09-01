import React from 'react';
import { Box, Typography } from '@mui/material';

export default function Footer({ depth = 3 }) {
    // Quanto maior o depth, mais escuro o gradiente
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
            }}
        >
            <Box>
                <Typography variant="body1" sx={{ mb: 2 }}>TEXTO</Typography>
                <Typography variant="body1">TEXTO</Typography>
            </Box>
            <Box>
                <Typography variant="body1" sx={{ mb: 2 }}>TEXTO</Typography>
                <Typography variant="body1">TEXTO</Typography>
            </Box>
            <Box>
                <Typography variant="body1" sx={{ mb: 2 }}>ICONE</Typography>
                <Typography variant="body1">ICONE</Typography>
            </Box>
            <Box>
                <Typography variant="body1" sx={{ mb: 2 }}>ICONE</Typography>
                <Typography variant="body1">ICONE</Typography>
            </Box>
            {/* Espaço para elementos decorativos */}
            {/* Exemplo: <AlgaSVG sx={{ position: 'absolute', bottom: 0, left: 40 }} /> */}
        </Box>
    );
}
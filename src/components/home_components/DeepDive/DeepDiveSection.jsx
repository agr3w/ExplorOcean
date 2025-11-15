import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { Link } from 'react-router-dom';

export default function DeepDiveSection() {
    return (
        <Box
            sx={{
                width: '100%',
                minHeight: 260,
                py: 8,
                background: 'linear-gradient(0deg, #000327 10%, #0a174e 100%)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Typography
                variant="h3"
                sx={{
                    color: '#fff',
                    fontWeight: 500,
                    mb: 5,
                    textAlign: 'center',
                }}
            >
                Explorar os Mares
            </Typography>
            <Button
                component={Link}
                to="/hub"
                variant="contained"
                sx={{
                    background: 'linear-gradient(90deg, #3a3aff 0%, #4f4fff 100%)',
                    color: '#fff',
                    borderRadius: 4,
                    px: 4,
                    py: 2,
                    fontSize: '1.2rem',
                    fontWeight: 400,
                    boxShadow: '0 2px 16px rgba(60,60,255,0.18)',
                    textTransform: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    transition: 'background 0.3s, box-shadow 0.3s, transform 0.3s',
                    '&:hover': {
                        background: 'linear-gradient(90deg, #4f4fff 0%, #3a3aff 100%)',
                        boxShadow: '0 4px 24px rgba(60,60,255,0.28)',
                        transform: 'scale(1.04)',
                    },
                }}
            >
                Explore todos os conteúdos
                <ArrowOutwardIcon sx={{ ml: 1, fontSize: 28, transition: 'transform 0.3s', '&:hover': { transform: 'translateY(-3px) translateX(3px) scale(1.1)' } }} />
            </Button>
        </Box>
    );
}
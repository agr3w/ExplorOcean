import React from 'react';
import { Box, Button } from '@mui/material';
import { FaWater } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function MainBannerButton({ diving }) {
    return (
        <Box
            sx={{
                position: 'absolute',
                bottom: 32,
                left: 0,
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                zIndex: 3,
                transition: 'all 0.6s cubic-bezier(.77,0,.18,1)',
            }}
        >
            <motion.div
                whileTap={{ scale: 0.98, transition: { duration: 0.1 } }}
                onTap={() => {
                    const controls = document.getElementById('main-banner-dive-btn');
                    if (controls) {
                        controls.animate([
                            { transform: 'translateY(0)', opacity: 1 },
                            { transform: 'translateY(120px) scale(0.8)', opacity: 0 }
                        ], {
                            duration: 1000,
                            easing: 'cubic-bezier(.77,0,.18,1)',
                            fill: 'forwards'
                        });
                    }
                }}
                onAnimationComplete={() => {
                    setTimeout(() => {
                        const controls = document.getElementById('main-banner-dive-btn');
                        if (controls) {
                            controls.animate([
                                { transform: 'translateY(120px) scale(0.8)', opacity: 0 },
                                { transform: 'translateY(0)', opacity: 1 }
                            ], {
                                duration: 800,
                                easing: 'cubic-bezier(.77,0,.18,1)',
                                fill: 'forwards'
                            });
                        }
                    }, 1800);
                }}
                id="main-banner-dive-btn"
            >
                <Button
                    variant="contained"
                    startIcon={<FaWater />}
                    sx={{
                        background: 'linear-gradient(90deg, #36d1e0 0%, #1976d2 100%)',
                        color: '#fff',
                        borderRadius: 6,
                        px: 4,
                        py: 1.2,
                        fontWeight: 500,
                        fontSize: '1rem',
                        boxShadow: '0 1px 4px rgba(30,60,114,0.08)',
                        letterSpacing: 1,
                        textTransform: 'none',
                        transition: 'all 0.2s',
                        '&:hover': {
                            background: 'linear-gradient(90deg, #1976d2 0%, #36d1e0 100%)',
                            color: '#e3f2fd',
                            boxShadow: '0 4px 16px rgba(30,60,114,0.12)',
                        },
                    }}
                >
                    Mergulhar
                </Button>
            </motion.div>
        </Box>
    );
}
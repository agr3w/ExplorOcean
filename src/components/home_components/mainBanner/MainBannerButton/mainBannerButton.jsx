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
                        background: 'rgba(255, 255, 255, 0.2)',
                        backdropFilter: 'blur(10px)',
                        WebkitBackdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255, 255, 255, 0.3)',
                        boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.2)',
                        color: '#fff',
                        borderRadius: 6,
                        px: 4,
                        py: 1.2,
                        fontWeight: 500,
                        fontSize: '1rem',
                        letterSpacing: 1,
                        textTransform: 'none',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                            background: 'rgba(255, 255, 255, 0.3)',
                            boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.25)',
                            borderColor: 'rgba(255, 255, 255, 0.5)',
                        },
                    }}
                >
                    Mergulhar
                </Button>
            </motion.div>
        </Box>
    );
}
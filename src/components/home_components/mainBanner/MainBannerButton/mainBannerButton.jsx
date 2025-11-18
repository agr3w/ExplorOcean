import React from 'react';
import { Box, Typography } from '@mui/material';
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
                                duration: 1000,
                                easing: 'cubic-bezier(.77,0,.18,1)',
                                fill: 'forwards'
                            });
                        }
                    }, 1800);
                }}
                id="main-banner-dive-btn"
            >
                <Typography
                    sx={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 1,
                        color: '#fff',
                        background: 'transparent',
                        borderRadius: 6,
                        px: 2.5,
                        py: 0.8,
                        fontWeight: 500,
                        fontSize: '0.95rem',
                        letterSpacing: 0.6,
                        textTransform: 'none',
                        cursor: 'default',
                        userSelect: 'none',
                    }}
                >
                    <FaWater />
                    Role para baixo para mergulhar
                </Typography>
            </motion.div>
        </Box>
    );
}
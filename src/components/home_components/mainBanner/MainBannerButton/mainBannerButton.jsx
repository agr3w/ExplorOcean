import React from 'react';
import { Box, Button } from '@mui/material';


export default function MainBannerButton() {
    return (
        <>
            {/* Botão na parte inferior, fixo quando mergulhado */}
            < Box
                sx={{
                    position: 'absolute',
                    bottom: 32,
                    left: 0,
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    zIndex: 3,
                    transition: 'all 0.6s cubic-bezier(.77,0,.18,1)',
                }
                }
            >
                <Button
                    variant="contained"
                    sx={{
                        background: '#e0e0e0',
                        color: '#36d1e0',
                        borderRadius: 4,
                        px: 4,
                        py: 1,
                        fontWeight: 500,
                        fontSize: '1.1rem',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                        '&:hover': {
                            background: '#b2ebf2',
                        },
                    }}
                >
                    Mergulhar
                </Button>
            </Box >
        </>
    );
}
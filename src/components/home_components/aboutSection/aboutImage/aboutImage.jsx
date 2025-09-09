import React from 'react';
import { Box } from '@mui/material';

export default function AboutImage() {
    return (
        <Box
            sx={{
                flex: 1,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: 220,
            }}
        >
            <Box
                sx={{
                    width: 300,
                    height: 280,
                    borderRadius: '50%',
                    overflow: 'hidden',
                    boxShadow: '0 4px 24px rgba(30,60,120,0.18)',
                    border: '2px solid #36d1e0',
                    background: 'linear-gradient(135deg, #36d1e0 60%, #1976d2 100%)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <img
                    src="https://tse2.mm.bing.net/th/id/OIP.FN2xphJKvfoypO5zl63iGwAAAA?r=0&cb=thfvnextucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3"
                    alt="Oceano"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        filter: 'brightness(0.95) saturate(1.1)',
                    }}
                />
            </Box>
        </Box>
    );
}
import { Box, Typography } from '@mui/material';
import React from 'react';

export default function MainBannerText({ diving }) {
    return (
        <>
            {/* Texto centralizado */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: '#fff',
                    background: diving ? 'rgba(57, 54, 224, 0.55)' : 'rgba(57, 54, 224, 0.75)',
                    transition: 'background 0.6s cubic-bezier(.77,0,.18,1)',
                }}
            >
                <Typography variant="h2" sx={{ fontWeight: 500, mb: 2 }}>
                    ExplorOcean
                </Typography>
                <Typography variant="h5" sx={{ mb: 4 }}>
                    Aprofunde seus conhecimentos
                </Typography>
            </Box>
        </>
    );
}
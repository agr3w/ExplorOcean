import React from 'react'
import { Box, Button } from '@mui/material';
import MainBannerText from './MainBannerText/mainBannerText';
import useDiving from '../../../hooks/useDiving';
import MainBannerButton from './MainBannerButton/mainBannerButton';

export default function MainBanner() {
    const diving = useDiving(100);

    return (
        <Box
            sx={{
                position: 'relative',
                width: diving ? '100%' : 'calc(100vw - 48px)',
                height: diving ? '100vh' : '93vh',
                margin: diving ? 0 : '24px auto',
                borderRadius: diving ? 0 : 4,
                overflow: 'hidden',
                boxShadow: diving ? 'none' : '0 2px 16px rgba(0,0,0,0.15)',
                transition: 'all 0.6s cubic-bezier(.77,0,.18,1)',
                background: 'url("/src/assets/earthmap1k.jpg") center/cover, #1032ccff', // IMAGEM DE FUNDO
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 1,
            }}
        >
            <MainBannerText diving={diving} />
            <MainBannerButton diving={diving} />
          
        </Box>
    );
}
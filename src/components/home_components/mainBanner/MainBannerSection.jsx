import React, { useMemo } from 'react'
import { Box, Button } from '@mui/material';
import MainBannerText from './MainBannerText/mainBannerText';
import useDiving from '../../../hooks/useDiving';
import MainBannerButton from './MainBannerButton/mainBannerButton';

const backgroundImages = [
    '/src/assets/earthmap1k.jpg',
    'https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1446776811953-b23d579212c5?auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1454789548928-9efd52dc4031?auto=format&fit=crop&w=1920&q=80'
];

export default function MainBanner() {
    const diving = useDiving(100);
    const randomBackground = useMemo(() => {
        const randomIndex = Math.floor(Math.random() * backgroundImages.length);
        return backgroundImages[randomIndex];
    }, []);

    return (
        <Box
            sx={{
                position: 'relative',
                width: diving ? '100%' : 'calc(100vw - 48px)',
                height: diving ? '100vh' : '93vh',
                margin: diving ? 0 : '24px auto',
                borderRadius: diving ? 0 : 2,
                overflow: 'hidden',
                boxShadow: diving ? 'none' : '0 2px 16px rgba(0,0,0,0.15)',
                transition: 'all 0.6s cubic-bezier(.77,0,.18,1)',
                background: `url("${randomBackground}") center/cover, #02101a`,
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
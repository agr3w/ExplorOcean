import React, { useMemo } from 'react';
import { Box } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import MainBannerText from './MainBannerText/mainBannerText';
import useDiving from '@/hooks/useDiving';
import MainBannerButton from './MainBannerButton/mainBannerButton';

const backgroundImages = [
    'https://www.nasa.gov/wp-content/uploads/2025/09/iss047e137096orig.jpg',
    'https://www.nasa.gov/wp-content/uploads/2025/08/nasa-september-2025-hd-1920x1080-1.jpg',
    'https://d2pn8kiwq2w21t.cloudfront.net/original_images/jpegPIA25033.jpg',
    'https://d2pn8kiwq2w21t.cloudfront.net/original_images/jpegPIA23699.jpg',
    'https://images-assets.nasa.gov/image/iss058e007722/iss058e007722~medium.jpg',
    'https://images-assets.nasa.gov/image/as4-01-750/as4-01-750~medium.jpg',
    'https://images-assets.nasa.gov/image/sts054-152-102/sts054-152-102~medium.jpg',
    'https://images-assets.nasa.gov/image/iss071e570863/iss071e570863~medium.jpg',
    'https://images-assets.nasa.gov/image/sts052-153-102/sts052-153-102~medium.jpg'
];

const bannerVariants = {
    undived: {
        width: 'calc(100vw - 48px)',
        height: '93vh',
        margin: '24px auto',
        borderRadius: '16px',
        boxShadow: '0 2px 16px rgba(0,0,0,0.15)',
        transition: { type: 'spring', stiffness: 100, damping: 20, duration: 0.6 }
    },
    dived: {
        width: '100vw',
        height: '100vh',
        margin: '0px auto',
        borderRadius: '0px',
        boxShadow: 'none',
        transition: { type: 'spring', stiffness: 100, damping: 20, duration: 0.6 }
    }
};

export default function MainBanner() {
    const diving = useDiving(100);
    const randomBackground = useMemo(() => {
        const randomIndex = Math.floor(Math.random() * backgroundImages.length);
        return backgroundImages[randomIndex];
    }, []);

    return (
        <motion.div
            variants={bannerVariants}
            animate={diving ? 'dived' : 'undived'}
            style={{
                position: 'relative',
                overflow: 'hidden',
                backgroundImage: `url("${randomBackground}")`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundColor: '#02101a',
                backgroundAttachment: 'scroll',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 1,
                minHeight: '70vh',
                willChange: 'background-position',
            }}
        >
            {/* Overlay para garantir legibilidade no mobile */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(to top, rgba(2, 16, 26, 0.85) 0%, transparent 70%)',
                    zIndex: 1,
                }}
            />
            <MainBannerText diving={diving} />
            <AnimatePresence>
                {!diving && (
                    <MainBannerButton diving={diving} />
                )}
            </AnimatePresence>
        </motion.div>
    );
}
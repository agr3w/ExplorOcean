import React, { useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MainBannerText from './MainBannerText/mainBannerText';
import useDiving from '../../../hooks/useDiving';
import MainBannerButton from './MainBannerButton/mainBannerButton';

const backgroundImages = [
    '/src/assets/earthmap1k.jpg',
    'https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1446776811953-b23d579212c5?auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1454789548928-9efd52dc4031?auto=format&fit=crop&w=1920&q=80'
];

// Variantes para animação do banner
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
                background: `url("${randomBackground}") center/cover, #02101a`,
                backgroundAttachment: 'fixed',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 1,
            }}
        >
            <MainBannerText diving={diving} />
            <AnimatePresence>
                {!diving && (
                    <MainBannerButton diving={diving} />
                )}
            </AnimatePresence>
        </motion.div>
    );
}
import React, { useState, useEffect } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { aboutData } from '@/content/homeContent/aboutContent';
import { motion, AnimatePresence } from 'framer-motion';
import theme from '@/styles/theme';
import './mobileAbout.css';

const curiosidades = [
    "O oceano cobre mais de 70% da superfície da Terra.",
    "Existem mais espécies marinhas do que terrestres.",
    "A maior parte do oxigênio do planeta vem do oceano.",
];

export default function AboutHighlights() {
    const [active, setActive] = useState(null);

    useEffect(() => {
        if (active !== null) {
            const timer = setTimeout(() => setActive(null), 2500);
            return () => clearTimeout(timer);
        }
    }, [active]);

    return (
        <Box sx={{ flex: 2, position: 'relative', minHeight: 180 }}>
            <Typography variant="h4" sx={{ mb: 2, color: theme.palette.primary.main }}>
                {aboutData.title}
            </Typography>
            <Typography variant="body1" sx={{ mb: 2, color: theme.palette.text.primary }}>
                {aboutData.body1}
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, color: theme.palette.text.secondary }}>
                {aboutData.body2}
            </Typography>
            <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center' }}>
                {aboutData.highlights.map((highlight, index) => (
                    <Box key={index} sx={{ textAlign: 'center', minWidth: 80 }}>
                        <motion.div
                            whileHover={{ scale: 1.18, rotate: -8 }}
                            animate={active === index ? { rotateY: 180 } : { rotateY: 0 }}
                            style={{ perspective: 600, display: 'inline-block', position: 'relative' }}
                            onClick={() => setActive(active === index ? null : index)}
                        >
                            <IconButton
                                sx={{
                                    background: `linear-gradient(135deg, ${theme.palette.primary.main} 60%, ${theme.palette.primary.dark} 100%)`,
                                    color: theme.palette.primary.contrastText,
                                    mb: 1,
                                    boxShadow: '0 2px 8px rgba(30,60,120,0.10)',
                                    position: 'relative',
                                    zIndex: 1,
                                    '&:hover': {
                                        background: `linear-gradient(135deg, ${theme.palette.primary.dark} 60%, ${theme.palette.primary.main} 100%)`,
                                    },
                                }}
                            >
                                {highlight.icon && (
                                    <highlight.icon size={32} />
                                )}
                            </IconButton>
                        </motion.div>
                        <Typography variant="subtitle2" sx={{ color: theme.palette.text.primary }}>
                            {highlight.label}
                        </Typography>
                    </Box>
                ))}
            </Box>
            <AnimatePresence>
                {active !== null && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.4 }}
                        style={{
                            marginTop: 16,
                            position: 'absolute',
                            transform: 'translate(-50%, 0)',
                            background: theme.palette.background.paper,
                            color: theme.palette.text.primary,
                            borderRadius: 16,
                            padding: '12px 18px',
                            boxShadow: '0 2px 12px rgba(54,209,224,0.18)',
                            whiteSpace: 'normal',
                            zIndex: 20,
                            fontWeight: 500,
                            fontSize: '1.08rem',
                            letterSpacing: 0.5,
                            border: `1px solid ${theme.palette.primary.main}`,
                            maxWidth: '90vw',
                            width: 'fit-content',
                            textAlign: 'center',
                        }}
                        // Responsivo para mobile
                        className="about-highlight-popup"
                    >
                        {curiosidades[active]}
                    </motion.div>
                )}
            </AnimatePresence>
        </Box>
    );
}
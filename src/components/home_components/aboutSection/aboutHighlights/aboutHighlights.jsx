import React, { useState, useEffect } from 'react';
import { Box, Typography, IconButton, Tooltip } from '@mui/material';
import { aboutData } from '../../../../content/homeContent/aboutContent';
import { motion, AnimatePresence } from 'framer-motion';

const curiosidades = [
    "O oceano cobre mais de 70% da superfície da Terra.",
    "Existem mais espécies marinhas do que terrestres.",
    "A maior parte do oxigênio do planeta vem do oceano.",
];

export default function AboutHighlights() {
    const [active, setActive] = useState(null);

    // Faz o texto desaparecer após 2.5 segundos
    useEffect(() => {
        if (active !== null) {
            const timer = setTimeout(() => setActive(null), 2500);
            return () => clearTimeout(timer);
        }
    }, [active]);

    return (
        <Box sx={{ flex: 2 }}>
            <Typography variant="h4" sx={{ mb: 2 }}>
                {aboutData.title}
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
                {aboutData.body1}
            </Typography>
            <Typography variant="body1" sx={{ mb: 4 }}>
                {aboutData.body2}
            </Typography>
            <Box sx={{ display: 'flex', gap: 3 }}>
                {aboutData.highlights.map((highlight, index) => (
                    <Box key={index} sx={{ textAlign: 'center', position: 'relative', minWidth: 80 }}>
                        <Tooltip title={`Saiba mais sobre "${highlight.label}"`} arrow>
                            <motion.div
                                whileHover={{ scale: 1.2, rotate: -10 }}
                                animate={active === index ? { rotateY: 180 } : { rotateY: 0 }}
                                style={{ perspective: 600, display: 'inline-block', position: 'relative' }}
                                onClick={() => setActive(active === index ? null : index)}
                            >
                                {/* Onda animada atrás do botão */}
                                <AnimatePresence>
                                    {active === index && (
                                        <motion.div
                                            initial={{ scaleX: 0 }}
                                            animate={{ scaleX: 1 }}
                                            exit={{ scaleX: 0 }}
                                            transition={{ duration: 0.5 }}
                                            style={{
                                                position: 'absolute',
                                                left: 0,
                                                top: '50%',
                                                transform: 'translateY(-50%)',
                                                width: '100%',
                                                height: 16,
                                                background: 'linear-gradient(90deg, #36d1e0 0%, #1976d2 100%)',
                                                borderRadius: 8,
                                                zIndex: 0,
                                            }}
                                        />
                                    )}
                                </AnimatePresence>
                                <IconButton
                                    sx={{
                                        background: 'linear-gradient(135deg, #36d1e0 60%, #1976d2 100%)',
                                        color: '#fff',
                                        mb: 1,
                                        boxShadow: '0 2px 8px rgba(30,60,120,0.10)',
                                        position: 'relative',
                                        zIndex: 1,
                                        '&:hover': {
                                            background: 'linear-gradient(135deg, #1976d2 60%, #36d1e0 100%)',
                                        },
                                    }}
                                >
                                    {highlight.icon && (
                                        <highlight.icon size={32} />
                                    )}
                                </IconButton>
                            </motion.div>
                        </Tooltip>
                        <Typography variant="subtitle2">{highlight.label}</Typography>
                        <AnimatePresence>
                            {active === index && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    transition={{ duration: 0.4 }}
                                    style={{
                                        position: 'absolute',
                                        left: '50%',
                                        top: '100%',
                                        transform: 'translate(-50%, 10px)',
                                        background: 'rgba(30,60,120,0.95)',
                                        color: '#e3f2fd',
                                        borderRadius: 12,
                                        padding: '8px 16px',
                                        boxShadow: '0 2px 8px rgba(30,60,120,0.18)',
                                        whiteSpace: 'nowrap',
                                        zIndex: 10,
                                        marginTop: 8,
                                    }}
                                >
                                    {curiosidades[index]}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </Box>
                ))}
            </Box>
        </Box>
    );
}
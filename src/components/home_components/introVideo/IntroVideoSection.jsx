import React, { useState } from 'react';
import { Box, Typography, Modal, IconButton, Button, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { motion } from 'framer-motion';
import { MdPlayArrow, MdCheckCircle } from 'react-icons/md';
import thumb from '../../../assets/introVideoThumb.png';
import { quizzesData } from '../../../content/contentGrid/quizzesContent';
import { documentariesData } from '../../../content/contentGrid/documentariesContent';
import { faunaData, floraData } from '../../../content/faunaFlora/faunaFloraData';
import AnimatedCounter from './AnimatedCounter';

export default function IntroVideoSection() {
    const [open, setOpen] = useState(false);

    return (
        <Box
            sx={{
                width: '100%',
                maxWidth: { xs: '98vw', md: "1000px" },
                margin: '48px auto',
                padding: { xs: 2, md: 4 },
                borderRadius: 3,
                background: 'linear-gradient(135deg, #1976d2 0%, #43c6ac 100%)',
                boxShadow: '0 4px 24px rgba(0,0,0,0.12)',
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                alignItems: 'center',
                gap: { xs: 4, md: 6 },
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Vídeo/Thumbnail com botão play */}
            <Box
                sx={{
                    width: { xs: '100%', md: 420 },
                    minWidth: 220,
                    height: { xs: 220, md: 260 },
                    borderRadius: 2,
                    overflow: 'hidden',
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 2px 12px rgba(30,60,120,0.10)',
                    flexShrink: 0,
                }}
            >
                <img
                    src={thumb}
                    alt="Vídeo destaque"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        filter: 'brightness(0.85) saturate(1.1)',
                    }}
                />
                <Box
                    sx={{
                        position: 'absolute',
                        left: '50%',
                        top: '50%',
                        transform: 'translate(-50%, -50%)',
                        zIndex: 3,
                    }}
                >
                    <motion.div
                        whileHover={{ scale: 1.12 }}
                        animate={{ scale: [1, 1.08, 1] }}
                        transition={{ repeat: Infinity, duration: 1.2 }}
                    >
                        <IconButton
                            aria-label="Assistir trailer"
                            onClick={() => setOpen(true)}
                            sx={{
                                width: 56,
                                height: 56,
                                background: 'rgba(255,255,255,0.92)',
                                boxShadow: '0 2px 12px rgba(30,60,120,0.18)',
                                '&:hover': { background: '#e0f7fa' },
                            }}
                        >
                            <MdPlayArrow size={36} color="#1976d2" />
                        </IconButton>
                    </motion.div>
                </Box>
                {/* Overlay para escurecer imagem */}
                <Box
                    sx={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(180deg, rgba(30,60,120,0.18) 0%, rgba(30,60,120,0.38) 100%)',
                        zIndex: 2,
                    }}
                />
            </Box>
            {/* Texto e destaques */}
            <Box sx={{ flex: 1, minWidth: 220, width: '100%' }}>
                <Typography
                    variant="h3"
                    sx={{
                        fontWeight: 900,
                        color: '#fff',
                        letterSpacing: 2,
                        mb: 2,
                        fontSize: { xs: '2rem', md: '2.6rem' },
                    }}
                >
                    Explore o Oceano
                </Typography>
                <Typography
                    variant="subtitle1"
                    sx={{
                        color: '#e3f2fd',
                        mb: 3,
                        fontSize: { xs: '1rem', md: '1.2rem' },
                    }}
                >
                    Assista ao trailer e mergulhe na experiência oceânica!
                </Typography>
                <Box sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    justifyContent: { xs: 'flex-start', sm: 'center' },
                    alignItems: 'center',
                    gap: { xs: 2, sm: 4, md: 2 },
                    mt: 4,
                    mb: 2,
                    width: '100%',
                }}>
                    <AnimatedCounter end={quizzesData.length} label="Quizzes" />
                    <AnimatedCounter end={documentariesData.length} label="Documentários" />
                    <AnimatedCounter end={faunaData.length} label="Espécies de Fauna" />
                    <AnimatedCounter end={floraData.length} label="Espécies de Flora" />
                </Box>
                <List dense>
                    <ListItem>
                        <ListItemIcon>
                            <MdCheckCircle color="#36d1e0" />
                        </ListItemIcon>
                        <ListItemText primary="Descubra pontos de interesse interativos" />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <MdCheckCircle color="#36d1e0" />
                        </ListItemIcon>
                        <ListItemText primary="Veja modelos 3D de fauna e flora" />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <MdCheckCircle color="#36d1e0" />
                        </ListItemIcon>
                        <ListItemText primary="Aprenda com quizzes e documentários" />
                    </ListItem>
                </List>
            </Box>
            {/* Modal do vídeo */}
            <Modal
                open={open}
                onClose={() => setOpen(false)}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Box
                    sx={{
                        width: { xs: '90vw', md: 800 },
                        bgcolor: 'background.paper',
                        borderRadius: 2,
                        boxShadow: 24,
                        p: 4,
                        outline: 'none',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        position: 'relative',
                    }}
                >
                    <Typography
                        variant="h5"
                        sx={{
                            color: '#1976d2',
                            fontWeight: 700,
                            mb: 2,
                            textAlign: 'center',
                        }}
                    >
                        Trailer ExplorOcean
                    </Typography>
                    <iframe
                        width="100%"
                        height="450"
                        src="https://www.youtube.com/embed/JekUNGo-RVk"
                        title="Introdução ExplorOcean"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        style={{ borderRadius: 8, marginBottom: 8 }}
                    />
                    <IconButton
                        aria-label="Fechar"
                        onClick={() => setOpen(false)}
                        sx={{
                            position: 'absolute',
                            top: 8,
                            right: 8,
                            background: '#36d1e0',
                            color: '#fff',
                            '&:hover': { background: '#1976d2' },
                        }}
                    >
                        X
                    </IconButton>
                </Box>
            </Modal>
        </Box>
    );
}
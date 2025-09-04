import React, { useState } from 'react';
import { Box, Typography, Modal, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import { MdPlayArrow } from 'react-icons/md';

export default function IntroVideoSection() {
    const [open, setOpen] = useState(false);

    return (
        <Box
            sx={{
                width: '100%',
                maxWidth: "95vw",
                margin: '48px auto',
                padding: 4,
                borderRadius: 2,
                background: 'linear-gradient(135deg, #1976d2 0%, #43c6ac 100%)',
                boxShadow: '0 4px 24px rgba(0,0,0,0.12)',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            <Typography
                variant="h2"
                sx={{
                    fontWeight: 900,
                    color: '#fff',
                    textAlign: 'center',
                    letterSpacing: 2,
                    mb: 1,
                    fontSize: { xs: '2.2rem', md: '3.5rem' },
                }}
            >
                Explore o Oceano
            </Typography>
            <Typography
                variant="subtitle1"
                sx={{
                    color: '#e3f2fd',
                    textAlign: 'center',
                    mb: 4,
                    fontSize: { xs: '1rem', md: '1.3rem' },
                }}
            >
                Assista ao trailer e mergulhe na experiência oceânica!
            </Typography>
            <Box
                sx={{
                    width: '100%',
                    height: { xs: 220, md: 430 },
                    borderRadius: 2,
                    overflow: 'hidden',
                    position: 'relative',
                    mb: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <img
                    src="https://tse2.mm.bing.net/th/id/OIP.FN2xphJKvfoypO5zl63iGwAAAA?r=0&cb=thfvnextucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3"
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
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        zIndex: 3,
                    }}
                >
                    <motion.div
                        whileHover={{ scale: 1.15 }}
                        animate={{ scale: [1, 1.08, 1] }}
                        transition={{ repeat: Infinity, duration: 1.2 }}
                    >
                        <IconButton
                            aria-label="Assistir trailer"
                            onClick={() => setOpen(true)}
                            sx={{
                                width: 80,
                                height: 80,
                                background: 'rgba(255,255,255,0.92)',
                                boxShadow: '0 2px 12px rgba(30,60,120,0.18)',
                                '&:hover': { background: '#e0f7fa' },
                            }}
                        >
                            <MdPlayArrow size={48} color="#1976d2" />
                        </IconButton>
                    </motion.div>
                    <Typography sx={{ color: '#fff', fontWeight: 700, fontSize: 18, mt: 1 }}>
                        PLAY VIDEO
                    </Typography>
                </Box>
                {/* Overlay para escurecer imagem */}
                <Box
                    sx={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(180deg, rgba(30,60,120,0.25) 0%, rgba(30,60,120,0.55) 100%)',
                        zIndex: 2,
                    }}
                />
            </Box>
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
                    {/* Título e informações acima do vídeo */}
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
                    <Typography
                        variant="body1"
                        sx={{
                            color: '#afafafff',
                            mb: 2,
                            textAlign: 'center',
                        }}
                    >
                        Assista ao trailer e mergulhe na experiência oceânica!
                    </Typography>
                    <iframe
                        width="100%"
                        height="450"
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
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
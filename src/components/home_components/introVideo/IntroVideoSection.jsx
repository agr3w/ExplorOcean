import React, { useState } from 'react';
import { Box, Typography, Modal, IconButton } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

export default function IntroVideoSection() {
    const [open, setOpen] = useState(false);

    return (
        <Box
            sx={{
                width: '90vw',
                minWidth: '98%',
                margin: '48px auto',
                padding: 4,
                borderRadius: 2,
                background: 'linear-gradient(135deg, #43c6ac 0%, #191654 100%)',
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
                    mb: 0,
                    position: 'absolute',
                    top: 40,
                    left: 0,
                    width: '100%',
                    zIndex: 2,
                    fontSize: { xs: '2.5rem', md: '4rem' },
                }}
            >
                WATCH TRAILER
            </Typography>
            <Box
                sx={{
                    width: '100%',
                    height: { xs: 220, md: 400 },
                    borderRadius: 1,
                    overflow: 'hidden',
                    position: 'relative',
                    mt: { xs: 8, md: 12 },
                    mb: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <img
                    src="/src/assets/earthmap1k.jpg" // Troque para uma imagem de tartaruga se quiser
                    alt="Vídeo destaque"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        filter: 'brightness(0.95)',
                    }}
                />
                <Box
                    sx={{
                        position: 'absolute',
                        left: 40,
                        bottom: 40,
                        display: 'flex',
                        alignItems: 'center',
                        zIndex: 3,
                    }}
                >
                    <IconButton
                        onClick={() => setOpen(true)}
                        sx={{
                            width: 70,
                            height: 70,
                            background: '#fff',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.18)',
                            mr: 2,
                            '&:hover': { background: '#e0e0e0' },
                        }}
                    >
                        <PlayArrowIcon sx={{ fontSize: 48, color: '#191654' }} />
                    </IconButton>
                    <Typography sx={{ color: '#fff', fontWeight: 700, fontSize: 16 }}>
                        PLAY VIDEO
                    </Typography>
                </Box>
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
                        p: 2,
                        outline: 'none',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <iframe
                        width="100%"
                        height="450"
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                        title="Introdução ExplorOcean"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        style={{ borderRadius: 8 }}
                    />
                </Box>
            </Modal>
        </Box>
    );
}
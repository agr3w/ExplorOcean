import React, { useState } from 'react';
import { Box, Typography, Modal, IconButton, List, ListItem, ListItemIcon, Paper, ListItemText } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MdPlayArrow, MdCheckCircle, MdQuiz, MdMovie, MdPets, MdEco, MdClose } from 'react-icons/md';
import thumb from '../../../assets/introVideoThumb.png';
import { quizzesData } from '../../../content/contentGrid/quizzesContent';
import { documentariesData } from '../../../content/contentGrid/documentariesContent';
import { faunaData, floraData } from '../../../content/faunaFlora/faunaFloraData';
import AnimatedCounter from './AnimatedCounter';

export default function IntroVideoSection() {
    const [open, setOpen] = useState(false);
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.1 }
        },
    };
    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    return (
        <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
        >
            <Paper
                elevation={8}
                sx={{
                    background: 'linear-gradient(135deg, rgba(41, 118, 194, 0.92) 0%, rgba(20, 60, 80, 0.92) 100%)',
                    backdropFilter: 'blur(12px)',
                    border: '1.5px solid rgba(54, 209, 224, 0.35)',
                    boxShadow: '0 8px 32px rgba(25, 118, 210, 0.45)',
                    width: '100%',
                    maxWidth: { xs: '98vw', md: "1100px" },
                    margin: '48px auto',
                    padding: { xs: 2, md: 4 },
                    borderRadius: 4,
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    alignItems: 'center',
                    gap: { xs: 4, md: 6 },
                    position: 'relative',
                    overflow: 'hidden',
                }}
            >
                <motion.div variants={itemVariants} style={{ flexShrink: 0 }}>
                    <Box
                        sx={{
                            width: { xs: '100%', md: 420 },
                            height: { xs: 220, md: 260 },
                            borderRadius: 2,
                            overflow: 'hidden',
                            position: 'relative',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '0 2px 12px rgba(2, 16, 26, 0.6)',
                        }}
                    >
                        <img src={thumb} alt="Vídeo destaque" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.85) saturate(1.1)' }} />
                        <Box sx={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', zIndex: 3 }}>
                            <motion.div whileHover={{ scale: 1.12 }} animate={{ scale: [1, 1.08, 1] }} transition={{ repeat: Infinity, duration: 1.2 }}>
                                <IconButton aria-label="Assistir trailer" onClick={() => setOpen(true)} sx={{ width: 56, height: 56, background: 'rgba(255,255,255,0.92)', boxShadow: '0 2px 12px rgba(30,60,120,0.18)', '&:hover': { background: '#e0f7fa' } }}>
                                    <MdPlayArrow size={36} color="#1976d2" />
                                </IconButton>
                            </motion.div>
                        </Box>
                        <Box sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(30,60,120,0.18) 0%, rgba(30,60,120,0.38) 100%)', zIndex: 2 }} />
                    </Box>
                </motion.div>

                <motion.div variants={itemVariants} style={{ flex: 1, minWidth: 220, width: '100%' }}>
                    <Typography variant="h3" sx={{ fontWeight: 900, color: '#fff', letterSpacing: 2, mb: 2, fontSize: { xs: '2rem', md: '2.6rem' } }}>
                        Explore o Oceano
                    </Typography>
                    <Typography variant="subtitle1" sx={{ color: '#e3f2fd', mb: 3, fontSize: { xs: '1rem', md: '1.2rem' } }}>
                        Assista ao trailer e mergulhe na experiência oceânica!
                    </Typography>
                    <Box sx={{ display: 'grid', gridTemplateColumns: { xs: 'repeat(2, 1fr)', sm: 'repeat(4, 1fr)' }, gap: { xs: 1.5, sm: 2 }, mt: 4, mb: 3 }}>
                        <AnimatedCounter end={quizzesData.length} label="Quizzes" icon={<MdQuiz size={24} color="#fff" />} color="#8d14ffff" />
                        <AnimatedCounter end={documentariesData.length} label="Documentários" icon={<MdMovie size={24} color="#fff" />} color="#00e676" />
                        <AnimatedCounter end={faunaData.length} label="Fauna" icon={<MdPets size={24} color="#fff" />} color="#2979ff" />
                        <AnimatedCounter end={floraData.length} label="Flora" icon={<MdEco size={24} color="#fff" />} color="#ffd600" />
                    </Box>
                    <List dense>
                        <ListItem><ListItemIcon><MdCheckCircle color="#36d1e0" /></ListItemIcon><ListItemText primary="Descubra pontos de interesse interativos" /></ListItem>
                        <ListItem><ListItemIcon><MdCheckCircle color="#36d1e0" /></ListItemIcon><ListItemText primary="Veja modelos 3D de fauna e flora" /></ListItem>
                        <ListItem><ListItemIcon><MdCheckCircle color="#36d1e0" /></ListItemIcon><ListItemText primary="Aprenda com quizzes e documentários" /></ListItem>
                    </List>
                </motion.div>

                {/* --- MODAL COM O NOVO ESTILO --- */}
                <Modal
                    open={open}
                    onClose={() => setOpen(false)}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backdropFilter: 'blur(5px)',
                    }}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                    >
                        <Box sx={{
                            width: { xs: '90vw', md: 800 },
                            bgcolor: 'rgba(2, 16, 26, 0.7)',
                            backdropFilter: 'blur(15px)',
                            border: '1.5px solid rgba(54, 209, 224, 0.3)',
                            borderRadius: 4,
                            boxShadow: '0 8px 32px rgba(2, 16, 26, 0.5)',
                            p: { xs: 2, md: 4 },
                            outline: 'none',
                            position: 'relative',
                        }}>
                            <Typography variant="h5" sx={{
                                color: '#e3f2fd',
                                fontWeight: 700,
                                mb: 2,
                                textAlign: 'center'
                            }}>
                                Trailer ExplorOcean
                            </Typography>
                            <Box sx={{
                                position: 'relative',
                                paddingTop: '56.25%',
                                width: '100%',
                                borderRadius: 2,
                                overflow: 'hidden',
                            }}>
                                <iframe
                                    src="https://www.youtube.com/embed/JekUNGo-RVk"
                                    title="Introdução ExplorOcean"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '100%',
                                    }}
                                />
                            </Box>
                            <IconButton
                                aria-label="Fechar"
                                onClick={() => setOpen(false)}
                                sx={{
                                    position: 'absolute',
                                    top: 8,
                                    right: 8,
                                    width: 32,
                                    height: 32,
                                    background: 'rgba(54, 209, 224, 0.2)',
                                    color: '#e3f2fd',
                                    '&:hover': {
                                        background: 'rgba(54, 209, 224, 0.4)',
                                    }
                                }}
                            >
                                <MdClose size={20} />
                            </IconButton>
                        </Box>
                    </motion.div>
                </Modal>
            </Paper>
        </motion.div>
    );
}
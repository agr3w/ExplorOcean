import React, { useRef } from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import { MdQuiz, MdMovie, MdExplore } from 'react-icons/md';
import { motion, useInView } from 'framer-motion';

// Bolhas animadas
const Bubble = ({ left, delay, size }) => (
    <motion.div
        initial={{ y: 80, opacity: 0.6 }}
        animate={{ y: -400, opacity: 0.1 }}
        transition={{ duration: 8, delay, repeat: Infinity, ease: 'easeInOut' }}
        style={{
            position: 'absolute',
            left,
            bottom: 0,
            width: size,
            height: size,
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.18)',
            zIndex: 2,
            filter: 'blur(1px)',
        }}
    />
);

const paths = [
    {
        label: 'Quizzes',
        description: 'Teste seus conhecimentos de forma divertida.',
        link: '/quizzes',
        icon: MdQuiz,
        color: '#36d1e0',
    },
    {
        label: 'Documentários',
        description: 'Assista e aprenda com conteúdos ricos.',
        link: '/documentaries',
        icon: MdMovie,
        color: '#36d1e0',
    },
    {
        label: 'Exploração',
        description: 'Descubra e interaja com o oceano.',
        link: '/explorerHub',
        icon: MdExplore,
        color: '#00bcd4',
    },
];

export default function LearningPathsSection() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: false, margin: '-100px' });

    return (
        <Box
            ref={ref}
            sx={{
                width: '100%',
                minHeight: 400,
                py: 8,
                background: 'linear-gradient(180deg, #1e3c72 0%, #2a5298 50%, #0a174e 100%)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                position: 'relative',
                overflow: 'hidden',
            }}
        >

            {/* Bolhas animadas */}
            <Bubble left="10%" delay={0} size={24} />
            <Bubble left="30%" delay={2} size={18} />
            <Bubble left="60%" delay={1} size={32} />
            <Bubble left="80%" delay={3} size={20} />

            <Typography
                variant="h4"
                sx={{
                    color: '#fff',
                    fontWeight: 700,
                    mb: 6,
                    textAlign: 'center',
                    zIndex: 3,
                }}
            >
                Aprenda da sua maneira
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    gap: { xs: 2, md: 6 },
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                    zIndex: 3,
                }}
            >
                {paths.map((path, idx) => (
                    <Link to={path.link} key={path.label} style={{ textDecoration: 'none' }}>
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                            transition={{ delay: idx * 0.15, duration: 0.6, ease: 'easeOut' }}
                            whileHover={{ scale: 1.04, boxShadow: '0 12px 32px 0 rgba(30,60,114,0.22)' }}
                        >
                            <Paper
                                elevation={0}
                                sx={{
                                    width: { xs: 180, md: 220 },
                                    height: { xs: 180, md: 220 },
                                    background: 'rgba(255,255,255,0.12)',
                                    borderRadius: 6,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: '#fff',
                                    mx: 2,
                                    backdropFilter: 'blur(16px) saturate(180%)',
                                    boxShadow: '0 4px 24px 0 rgba(30,60,114,0.12)',
                                    transition: 'transform 0.3s cubic-bezier(.77,0,.18,1), box-shadow 0.3s cubic-bezier(.77,0,.18,1), background 0.3s',
                                    cursor: 'pointer',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    '&:hover': {
                                        background: '#2a5298',
                                    },
                                }}
                            >
                                {/* Efeito de onda/glow ao hover */}
                                <motion.div
                                    initial={false}
                                    whileHover={{
                                        scale: 1.2,
                                        opacity: 0.18,
                                    }}
                                    style={{
                                        position: 'absolute',
                                        bottom: 0,
                                        left: 0,
                                        width: '100%',
                                        height: 40,
                                        background: `radial-gradient(circle at 50% 100%, ${path.color} 0%, transparent 80%)`,
                                        zIndex: 0,
                                    }}
                                />
                                <Box sx={{ zIndex: 1, mb: 2 }}>
                                    <path.icon size={48} color={path.color} />
                                </Box>
                                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, letterSpacing: 1, zIndex: 1 }}>
                                    {path.label}
                                </Typography>
                                <Typography variant="body2" sx={{ textAlign: 'center', px: 2, opacity: 0.85, zIndex: 1 }}>
                                    {path.description}
                                </Typography>
                            </Paper>
                        </motion.div>
                    </Link>
                ))}
            </Box>
        </Box>
    );
}
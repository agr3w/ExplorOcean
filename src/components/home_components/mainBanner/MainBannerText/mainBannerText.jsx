import { Box, Typography } from '@mui/material';
import React from 'react';
import { motion } from 'framer-motion'; 

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

export default function MainBannerText({ diving }) {
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{
                position: 'absolute', top: 0, left: 0,
                width: '100%', height: '100%', zIndex: 2,
                display: 'flex', flexDirection: 'column',
                justifyContent: 'center', alignItems: 'center',
                color: '#fff',
                padding: '0 8vw',
            }}
        >
            <Box
                sx={{
                    position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                    background: diving
                        ? 'linear-gradient(to top, rgba(2, 16, 26, 0.7) 0%, transparent 60%)'
                        : 'linear-gradient(to top, rgba(2, 16, 26, 0.85) 0%, transparent 70%)',
                    transition: 'background 0.6s cubic-bezier(.77,0,.18,1)',
                }}
            />
            <motion.div variants={itemVariants}>
                <Typography
                    variant="h2"
                    sx={{
                        fontWeight: 500,
                        mb: 2,
                        zIndex: 1,
                        fontSize: { xs: '2rem', sm: '3rem', md: '4rem' },
                        textAlign: 'center',
                    }}
                >
                    ExplorOcean
                </Typography>
            </motion.div>
            <motion.div variants={itemVariants}>
                <Typography
                    variant="h5"
                    sx={{
                        mb: 4,
                        zIndex: 1,
                        fontSize: { xs: '1.1rem', sm: '1.5rem', md: '2rem' },
                        textAlign: 'center',
                    }}
                >
                    Aprofunde seus conhecimentos
                </Typography>
            </motion.div>
        </motion.div>
    );
}
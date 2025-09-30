// src/components/faunaFloraComponents/FaunaFloraBanner.jsx

import React from 'react';
import { Box, Typography } from "@mui/material";
import { FaFish, FaLeaf } from "react-icons/fa";
import { motion, AnimatePresence } from 'framer-motion';

// 1. Defina as imagens de fundo para cada categoria
const categoryBackgrounds = {
  fauna: 'https://img.freepik.com/fotos-premium/polvo-predatorio-oceanico-contra-um-fundo-escuro-do-oceano_634423-3401.jpg',
  flora: 'https://img.freepik.com/premium-photo/ocean-floor-is-dark-blue-color-with-light-blue-background_691900-71.jpg',
};

export default function FaunaFloraBanner({ selectedCategory, pageTitle, pageDescription }) {
  const currentBg = categoryBackgrounds[selectedCategory];

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: '50vh',
        position: 'relative',
        display: "flex",
        alignItems: "center",
        justifyContent: 'center',
        textAlign: 'center',
        px: { xs: 2, md: 6 },
        py: { xs: 4, md: 6 },
        overflow: 'hidden',
      }}
    >
      {/*  Fundo animado com AnimatePresence */}
      <AnimatePresence>
        <motion.div
          key={currentBg} 
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1, transition: { duration: 1, ease: 'easeInOut' } }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url(${currentBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: 1,
          }}
        />
      </AnimatePresence>

      {/* Overlay para garantir a legibilidade do texto */}
      <Box sx={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to top, rgba(2, 16, 26, 0.8) 0%, transparent 70%)',
        zIndex: 2,
      }} />
      
      {/* Conteúdo do Banner (ícone, título, descrição) */}
      <motion.div
        key={selectedCategory} 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        style={{ zIndex: 3, color: "#fff" }}
      >
        <Box sx={{ fontSize: { xs: 48, md: 72 }, mb: 2 }}>
          {selectedCategory === "fauna" ? <FaFish /> : <FaLeaf />}
        </Box>
        <Box>
          <Typography variant="h2" sx={{ fontWeight: 700, textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
            {pageTitle}
          </Typography>
          <Typography variant="h6" sx={{ mt: 1, color: "#e3f2fd", maxWidth: '600px', margin: 'auto' }}>
            {pageDescription}
          </Typography>
        </Box>
      </motion.div>
    </Box>
  );
}
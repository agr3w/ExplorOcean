import React from 'react';
import { motion } from 'framer-motion';

export default function MascoteAnimado({ mood = "idle" }) {
  // Boca animada conforme humor
  const face = {
    idle: "M22 28 Q24 30 26 28",      // neutro
    happy: "M22 28 Q24 32 26 28",     // sorriso
    sad:   "M22 30 Q24 26 26 30",     // triste
  }[mood] || "M22 28 Q24 30 26 28";

  // Animação dos tentáculos
  const tentacleVariants = {
    left: {
      rotate: [0, -15, 10, 0],
      transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
    },
    right: {
      rotate: [0, 15, -10, 0],
      transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
    }
  };

  // Corpo flutuando
  const bodyVariants = {
    animate: {
      y: [0, -6, 0, 6, 0],
      rotate: [0, 2, -2, 0],
      transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
    }
  };

  // Olhos piscando
  const eyeVariants = {
    animate: {
      scaleY: [1, 1, 0.2, 1, 1],
      transition: { duration: 3.5, repeat: Infinity, times: [0, 0.7, 0.72, 0.74, 1] }
    }
  };

  return (
    <motion.svg
      width="90" height="70" viewBox="0 0 48 40"
      style={{ display: 'block', margin: '0 auto' }}
      variants={bodyVariants}
      animate="animate"
    >
      {/* Corpo do polvo */}
      <ellipse cx="24" cy="20" rx="12" ry="12" fill="#36d1e0" stroke="#1976d2" strokeWidth="2" />
      {/* Tentáculo esquerdo */}
      <motion.g variants={tentacleVariants.left} animate="left" style={{ transformOrigin: '12px 32px' }}>
        <path d="M16 30 Q10 38 16 38 Q18 38 16 34" stroke="#1976d2" strokeWidth="2" fill="none" />
      </motion.g>
      {/* Tentáculo direito */}
      <motion.g variants={tentacleVariants.right} animate="right" style={{ transformOrigin: '36px 32px' }}>
        <path d="M32 30 Q38 38 32 38 Q30 38 32 34" stroke="#1976d2" strokeWidth="2" fill="none" />
      </motion.g>
      {/* Olhos */}
      <motion.ellipse cx="19" cy="22" rx="2" ry="2.8" fill="#fff" variants={eyeVariants} animate="animate" />
      <motion.ellipse cx="29" cy="22" rx="2" ry="2.8" fill="#fff" variants={eyeVariants} animate="animate" />
      <ellipse cx="19" cy="22" rx="1" ry="1.2" fill="#222" />
      <ellipse cx="29" cy="22" rx="1" ry="1.2" fill="#222" />
      {/* Boca */}
      <path d={face} stroke="#222" strokeWidth="1.3" fill="none" />
      {/* Sobrancelhas para expressão */}
      {mood === "happy" && (
        <>
          <path d="M17 19 Q19 17 21 19" stroke="#1976d2" strokeWidth="1" fill="none" />
          <path d="M27 19 Q29 17 31 19" stroke="#1976d2" strokeWidth="1" fill="none" />
        </>
      )}
      {mood === "sad" && (
        <>
          <path d="M17 19 Q19 21 21 19" stroke="#1976d2" strokeWidth="1" fill="none" />
          <path d="M27 19 Q29 21 31 19" stroke="#1976d2" strokeWidth="1" fill="none" />
        </>
      )}
    </motion.svg>
  );
}
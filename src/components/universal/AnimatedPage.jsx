// src/components/universal/AnimatedPage.jsx

import React from 'react';
import { motion } from 'framer-motion';

// 1. NOVAS VARIANTES DE ANIMAÇÃO
const pageVariants = {
  // O estado inicial da nova página (começa de baixo, semi-transparente)
  initial: { 
    opacity: 0, 
    y: '5vh', // Começa um pouco abaixo da posição final
    scale: 0.98, // Começa um pouco menor
  },
  // O estado final da nova página (totalmente visível e na posição correta)
  in: { 
    opacity: 1, 
    y: 0,
    scale: 1,
  },
  // O estado de saída da página antiga (sobe, aumenta um pouco e desaparece)
  out: { 
    opacity: 0, 
    y: '-5vh', // Sobe um pouco
    scale: 1.02, // Aumenta levemente para dar sensação de profundidade
  },
};

// 2. NOVAS PROPRIEDADES DE TRANSIÇÃO
const pageTransition = {
  type: 'tween',
  ease: 'anticipate', // Um 'ease' que dá uma pequena antecipada, muito suave
  duration: 0.7,     // Duração um pouco maior para uma transição mais cinematográfica
};

export default function AnimatedPage({ children }) {
  return (
    <motion.div
      // As props permanecem as mesmas, mas usarão as novas variantes
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      {children}
    </motion.div>
  );
}
// src/components/universal/SmoothScroll.jsx

import React, { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';
import { useLocation } from 'react-router-dom';

function isMobile() {
  return (
    typeof window !== 'undefined' &&
    (window.innerWidth < 768 || 'ontouchstart' in window)
  );
}

export default function SmoothScroll({ children }) {
  const lenisRef = useRef(null);
  const location = useLocation();

  // Efeito principal para configurar e limpar o Lenis
  useEffect(() => {
    let lenisInstance = null;
    let rafId = null;

    function setupLenis() {
      // --- Limpeza Preventiva ---
      if (lenisInstance) {
        lenisInstance.destroy();
        lenisInstance = null;
        lenisRef.current = null;
      }
      if (rafId) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
      // Sempre reseta o overflow primeiro
      document.body.style.overflow = 'auto';
      // --- Fim da Limpeza ---

      if (isMobile()) {
        console.log("SmoothScroll: Lenis desativado (Mobile).");
        // Não fazemos mais nada, scroll nativo está ativo.
      } else {
        // Desktop: Ativa o Lenis imediatamente
        console.log("SmoothScroll: Lenis ativado (Desktop).");
        document.body.style.overflow = 'hidden'; // Esconde o scroll nativo

        lenisInstance = new Lenis({
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          // smoothTouch: true, // Pode ser desnecessário/causar problemas em alguns desktops
        });
        lenisRef.current = lenisInstance; // Atualiza o ref

        function raf(time) {
          lenisInstance?.raf(time);
          rafId = requestAnimationFrame(raf);
        }
        rafId = requestAnimationFrame(raf);
      }
    }

    // Chama a configuração diretamente após o mount
    setupLenis();

    // Listener para redimensionamento
    window.addEventListener('resize', setupLenis);

    // Função de limpeza robusta
    return () => {
      window.removeEventListener('resize', setupLenis);
      if (lenisInstance) {
        lenisInstance.destroy();
      }
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      // Garante que o scroll sempre volte ao normal ao desmontar
      document.body.style.overflow = 'auto';
    };
  }, []); // Roda apenas uma vez no mount

  // Efeito para rolar para o topo (sem alterações)
  useEffect(() => {
    const currentLenis = lenisRef.current;
    if (currentLenis) {
      currentLenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return <>{children}</>;
}
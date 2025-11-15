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
  // Usamos o ref para PERSISTIR a instância do Lenis entre re-renderizações
  // e invocações do StrictMode.
  const lenisRef = useRef(null);
  const rafRef = useRef(null); // Ref para controlar o requestAnimationFrame
  const location = useLocation();

  // Efeito principal: Configura e limpa o Lenis e o listener de resize
  useEffect(() => {
    function setupLenis() {
      // --- Limpeza Primeiro ---
      // Destrói instância ANTERIOR, se existir (usando o Ref)
      if (lenisRef.current) {
        console.log("SmoothScroll: Destruindo instância Lenis anterior.");
        lenisRef.current.destroy();
        lenisRef.current = null;
      }
      // Cancela loop de animação ANTERIOR, se existir
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
      // Garante que o scroll nativo esteja habilitado antes de decidir
      document.body.style.overflow = 'auto';
      // --- Fim Limpeza ---

      if (isMobile()) {
        console.log("SmoothScroll: Lenis desativado (Mobile). Scroll nativo ativo.");
        // Não fazemos mais nada.
      } else {
        // Desktop: Cria e configura o Lenis
        console.log("SmoothScroll: Ativando Lenis (Desktop). Desativando scroll nativo.");
        document.body.style.overflow = 'hidden'; // Esconde scroll nativo

        const lenis = new Lenis({
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          // smoothTouch: false, // Recomendo desativar para evitar conflitos
        });
        lenisRef.current = lenis; // GUARDA a nova instância no Ref

        function raf(time) {
          // Acessa a instância ATUAL pelo Ref dentro do loop
          lenisRef.current?.raf(time);
          rafRef.current = requestAnimationFrame(raf);
        }
        rafRef.current = requestAnimationFrame(raf); // Inicia o loop
      }
    }

    // Chama a configuração inicial APÓS a montagem
    setupLenis();

    // Adiciona o listener de resize que REEXECUTA a configuração
    window.addEventListener('resize', setupLenis);

    // Função de limpeza robusta: Garante que tudo seja limpo ao desmontar
    return () => {
      console.log("SmoothScroll: Limpando no desmontar...");
      window.removeEventListener('resize', setupLenis);
      if (lenisRef.current) {
        lenisRef.current.destroy();
        lenisRef.current = null;
      }
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
      document.body.style.overflow = 'auto'; // Garante scroll nativo ao sair
    };
  }, []); // Array vazio: Roda apenas no mount e cleanup no unmount

  // Efeito para rolar para o topo quando a rota muda
  useEffect(() => {
    const currentLenis = lenisRef.current;
    if (currentLenis) {
      currentLenis.scrollTo(0, { immediate: true });
    } else {
      // Apenas rola nativamente se NÃO estivermos usando Lenis
      if (isMobile()) {
         window.scrollTo(0, 0);
      }
    }
  }, [location]); // Depende da 'location'

  return <>{children}</>;
}
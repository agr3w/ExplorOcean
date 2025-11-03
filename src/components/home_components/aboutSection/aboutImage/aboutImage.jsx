import React from 'react';
import { Box } from '@mui/material';
import aboutVideo from '@/assets/videos/ocean.mp4';

export default function AboutImage() {
    return (
        <Box
            sx={{
                flex: 1,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: 220,
            }}
        >
            {/* O contêiner da "bolha" de cristal */}
            <Box
                sx={{
                    // 1. Garantir que seja um círculo perfeito
                    width: 300,
                    height: 300, // Estava 280
                    borderRadius: '50%',
                    overflow: 'hidden',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'relative', // Necessário para o brilho ::before

                    // 2. Efeito "Crystal Glass" com sombras
                    // Removemos a borda e o fundo antigos
                    background: '#000', // Fundo de fallback caso o vídeo não carregue
                    boxShadow: `
                        /* Sombra externa suave para "flutuar" */
                        0 4px 24px rgba(30, 60, 120, 0.18),
                        
                        /* Borda interna branca para simular a borda do vidro */
                        inset 0 0 0 2px rgba(255, 255, 255, 0.4),
                        
                        /* Sombra interna ciano para dar profundidade */
                        inset 0 0 15px rgba(54, 209, 224, 0.5)
                    `,
                    
                    // 3. Adiciona um "brilho" de reflexo sobre o vídeo
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        zIndex: 2, // Fica em cima do vídeo
                        borderRadius: '50%',
                        // Gradiente que simula um reflexo de luz
                        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0) 60%)',
                        pointerEvents: 'none', // Permite interações com o vídeo (se houver)
                    }
                }}
            >
                <video
                    src={aboutVideo}
                    autoPlay
                    loop
                    muted
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        filter: 'brightness(0.95) saturate(1.1)',
                        zIndex: 1, // Fica abaixo do brilho
                        position: 'relative',
                    }}
                />
            </Box>
        </Box>
    );
}
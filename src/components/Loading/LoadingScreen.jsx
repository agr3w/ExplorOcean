import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { FaWater } from "react-icons/fa";

// ...existing imports...

const messages = [
    "Sabia que mais de 80% do oceano ainda não foi explorado?",
    "A maior cadeia de montanhas do mundo está submersa!",
    "O oceano produz mais de 50% do oxigênio do planeta.",
    "Existem mais espécies marinhas do que terrestres!",
    "Mergulhe e descubra os mistérios do oceano conosco!"
];

export default function LoadingScreen({ show = true, progress = 0 }) {
    const [visible, setVisible] = useState(true);
    const [gradientStep, setGradientStep] = useState(0);
    const [msgIdx, setMsgIdx] = useState(0);

    useEffect(() => {
        if (!show) {
            setTimeout(() => setVisible(false), 1000);
        }
    }, [show]);

    useEffect(() => {
        const msgTimer = setInterval(() => {
            setMsgIdx((idx) => (idx + 1) % messages.length);
        }, 8000);
        return () => clearInterval(msgTimer);
    }, []);

    // Atualiza o gradiente conforme o progresso real
    useEffect(() => {
        setGradientStep(progress);
    }, [progress]);

    // Gradiente invertido: claro embaixo, escuro em cima
    const gradient = `linear-gradient(0deg, #17676eff 0%, #36d1e0 ${gradientStep}%, #8fd0ffff ${gradientStep}%, #02101a 100%)`;
    const depth = gradientStep;

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.7 }}
                    style={{
                        width: "100vw",
                        height: "100vh",
                        position: "fixed",
                        top: 0,
                        left: 0,
                        zIndex: 9999,
                        background: gradient,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        overflow: "hidden"
                    }}
                    role="status"
                    aria-label="Carregando exploração oceânica"
                >
                    {/* Indicador de profundidade com seta animada */}
                    <Box
                        sx={{
                            position: "absolute",
                            left: { xs: 12, md: 32 },
                            top: "50%",
                            transform: "translateY(-50%)",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: 1,
                            zIndex: 2,
                            background: "rgba(2,16,26,0.18)",
                            borderRadius: 2,
                            px: 1.5,
                            py: 2,
                            boxShadow: "0 2px 8px rgba(30,60,120,0.10)"
                        }}
                    >
                        <Typography
                            variant="caption"
                            sx={{
                                color: "#e3f2fd",
                                fontWeight: 600,
                                mb: 0.5,
                                letterSpacing: 1,
                                fontSize: "0.95rem"
                            }}
                        >
                            Profundidade
                        </Typography>
                        <Typography
                            variant="h5"
                            sx={{
                                color: "#36d1e0",
                                fontWeight: 700,
                                fontSize: "1.5rem"
                            }}
                        >
                            {depth}m
                        </Typography>
                        {/* Seta animada para baixo */}
                        <motion.div
                            animate={{
                                y: [0, 10, 0]
                            }}
                            transition={{
                                repeat: Infinity,
                                duration: 1.2,
                                ease: "easeInOut"
                            }}
                            style={{
                                marginTop: 4
                            }}
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M12 6v12M12 18l-6-6M12 18l6-6" stroke="#36d1e0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </motion.div>
                    </Box>
                    {/* Elementos centrais */}
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: 2,
                            px: 2,
                            py: 3,
                            borderRadius: 3,
                            background: "rgba(2,16,26,0.12)",
                            boxShadow: "0 2px 12px rgba(30,60,120,0.10)",
                            minWidth: 260,
                            maxWidth: 420
                        }}
                    >
                        <motion.div
                            animate={{
                                y: [0, -20, 0],
                                scale: [1, 1.1, 1],
                                rotate: [0, 8, -8, 0]
                            }}
                            transition={{
                                repeat: Infinity,
                                duration: 2.2,
                                ease: "easeInOut"
                            }}
                            style={{
                                marginBottom: 12
                            }}
                        >
                            <FaWater size={48} color="#36d1e0" aria-label="Ícone de água animado" />
                        </motion.div>
                        <Typography
                            variant="h6"
                            sx={{
                                color: "#fff",
                                fontWeight: 700,
                                letterSpacing: 2,
                                textShadow: "0 2px 12px #02101a88",
                                mb: 1,
                                px: 1,
                                textAlign: "center",
                                maxWidth: 340
                            }}
                        >
                            {messages[msgIdx]}
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{
                                color: "#e3f2fd",
                                fontWeight: 500,
                                letterSpacing: 1,
                                textShadow: "0 1px 6px #02101a44",
                                mb: 0.5,
                                textAlign: "center"
                            }}
                        >
                            Carregando o ExplorOcean...
                        </Typography>
                    </Box>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { FaWater } from "react-icons/fa";

export default function LoadingScreen() {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        bgcolor: "linear-gradient(180deg, #02101a 0%, #36d1e0 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 9999,
      }}
    >
      <motion.div
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.2,
          ease: "easeInOut",
        }}
        style={{
          marginBottom: 24,
        }}
      >
        <FaWater size={64} color="#36d1e0" />
      </motion.div>
      <Typography
        variant="h5"
        sx={{
          color: "#36d1e0",
          fontWeight: 700,
          letterSpacing: 2,
          textShadow: "0 2px 12px #02101a88",
        }}
      >
        Carregando Exploração Oceânica...
      </Typography>
    </Box>
  );
}
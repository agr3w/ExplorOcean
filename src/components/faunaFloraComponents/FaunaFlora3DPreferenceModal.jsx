import { Box, Typography, Modal, Button, Backdrop } from "@mui/material";
import { GiWhaleTail } from "react-icons/gi";
import { motion, AnimatePresence } from "framer-motion";
import { forwardRef } from "react";

// Paleta de cores (sem alterações)
const themeColors = {
  primaryCyan: "#36d1e0",
  primaryBlue: "#1976d2",
  modalBackground: "rgba(2, 20, 30, 0.75)",
  lightText: "#FFFFFF",
  shadow: "rgba(54, 209, 224, 0.4)",
};

// Placeholder da imagem (sem alterações)
const oceanBackgroundImage = "https://static.vecteezy.com/system/resources/previews/022/967/094/large_2x/the-blue-underwater-sea-with-ai-generated-free-photo.jpg";

// Componente Backdrop animado para o fundo
const AnimatedBackdrop = forwardRef((props, ref) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.4 }}
  >
    <Backdrop ref={ref} {...props} />
  </motion.div>
));

export default function FaunaFlora3DPreferenceModal({ open, onSelect }) {
  return (
    <>
      {/* A imagem de fundo agora só é renderizada quando o modal está aberto */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundImage: `url(${oceanBackgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "blur(8px) brightness(0.7)",
              zIndex: -1,
            }}
          />
        )}
      </AnimatePresence>
      
      <Modal
        open={open}
        onClose={() => onSelect(null)} // Adicionado para permitir fechar o modal clicando fora
        closeAfterTransition
        // A propriedade 'slots' foi removida para usar o Backdrop padrão do MUI, evitando o conflito
        // A propriedade 'slotProps' também foi removida
        slots={{ backdrop: AnimatedBackdrop }} // Usando um Backdrop customizado e estável
      >
        {/* AnimatePresence garante a animação de saída do conteúdo do modal */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ y: -50, opacity: 0, scale: 0.9 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 50, opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                // O transform agora é feito pelo framer-motion, então removemos daqui
              }}
            >
              <Box
                sx={{
                  // Centralização via transform no CSS
                  transform: "translate(-50%, -50%)",
                  width: { xs: "90vw", sm: 420 }, // Usando vw para melhor ajuste em telas pequenas
                  maxWidth: 420,
                  backgroundColor: themeColors.modalBackground,
                  backdropFilter: "blur(5px) saturate(180%)",
                  WebkitBackdropFilter: "blur(5px) saturate(180%)",
                  borderRadius: 4,
                  boxShadow: `0 12px 40px 0 ${themeColors.shadow}`,
                  border: `1.5px solid ${themeColors.primaryCyan}`,
                  p: { xs: 3, md: 5 },
                  textAlign: "center",
                  color: themeColors.lightText,
                }}
              >
                {/* O restante do conteúdo do modal permanece o mesmo */}
                <motion.div
                  animate={{ y: [0, -8, 0], scale: [1, 1.05, 1] }}
                  transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                  style={{ marginBottom: 16 }}
                >
                  <GiWhaleTail size={60} color={themeColors.primaryCyan} />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold", textShadow: '1px 1px 5px rgba(0,0,0,0.4)' }}>
                    Explore o Mundo Submarino em 3D?
                  </Typography>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <Typography variant="body1" sx={{ mb: 4, color: "rgba(255, 255, 255, 0.9)" }}>
                    A visualização em 3D oferece uma imersão completa, mas pode exigir mais do seu dispositivo. Escolha como prefere explorar!
                  </Typography>
                </motion.div>

                <Box sx={{ display: "flex", gap: 2, justifyContent: "center", flexDirection: { xs: "column", sm: "row" } }}>
                  {/* Botões permanecem os mesmos */}
                  <Button
                    variant="contained"
                    onClick={() => onSelect(true)}
                    sx={{
                      background: `linear-gradient(90deg, ${themeColors.primaryCyan} 0%, ${themeColors.primaryBlue} 100%)`,
                      color: themeColors.lightText,
                      fontWeight: 700,
                      px: 4, py: 1.5,
                      borderRadius: 2, boxShadow: "none",
                      transition: "all 0.3s ease-in-out", backgroundSize: "200% 100%",
                      "&:hover": { backgroundPosition: "100% 0", transform: "translateY(-3px) scale(1.02)", boxShadow: `0 8px 20px 0 ${themeColors.shadow}` },
                      "&:active": { transform: "translateY(0px) scale(0.98)" },
                    }}
                  >
                    Ativar Experiência 3D
                  </Button>
                  <Button
                    variant="outlined"
                    onClick={() => onSelect(false)}
                    sx={{
                      borderColor: themeColors.primaryCyan, color: themeColors.primaryCyan,
                      fontWeight: 700, px: 4, py: 1.5, borderRadius: 2,
                      "&:hover": { borderColor: themeColors.lightText, color: themeColors.lightText, backgroundColor: "rgba(54, 209, 224, 0.15)", transform: "translateY(-3px) scale(1.02)" },
                      "&:active": { transform: "translateY(0px) scale(0.98)" },
                      transition: "all 0.2s ease-in-out",
                    }}
                  >
                    Ver Somente Imagens
                  </Button>
                </Box>
              </Box>
            </motion.div>
          )}
        </AnimatePresence>
      </Modal>
    </>
  );
}
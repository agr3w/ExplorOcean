import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Typography,
  Modal,
  CircularProgress,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { deleteUserProfile } from "../../services/userService";

const modalVariants = {
  hidden: { opacity: 0, scale: 0.85, y: 40 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 120, damping: 18 },
  },
  exit: { opacity: 0, scale: 0.85, y: 40, transition: { duration: 0.25 } },
};

export default function ProfileDangerZone({ onAccountDelete }) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [farewell, setFarewell] = useState(false);
  const navigate = useNavigate();

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    if (loading) return; // previne fechamento durante a requisição
    setOpen(false);
    setErrorMsg("");
  };

  const handleDelete = async () => {
    setLoading(true);
    setErrorMsg("");
    try {
      await deleteUserProfile();
      setFarewell(true);
      setLoading(false);
      setTimeout(() => {
        if (onAccountDelete) onAccountDelete();
        window.location.reload();
        navigate("/auth");
      }, 2000); // 2 segundos de despedida
    } catch (error) {
      console.error("Erro ao excluir conta", error);
      setErrorMsg(
        error.response?.data?.message ||
          "Erro ao excluir conta. Tente novamente."
      );
      setLoading(false);
    }
  };

  return (
    <>
      <Box
        sx={{
          mt: 4,
          p: 3,
          borderRadius: 2,
          background:
            "linear-gradient(90deg, rgba(255,23,68,0.1) 0%, rgba(2,16,26,0.3) 100%)",
          border: "1.5px solid rgba(255,23,68,0.3)",
          boxShadow: "0 2px 12px rgba(255,23,68,0.10)",
          backdropFilter: "blur(8px)",
        }}
      >
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", mb: 1, color: "#ff5252" }}
        >
          Zona de Risco
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: "rgba(227, 242, 253, 0.7)", mb: 2 }}
        >
          A exclusão da sua conta é uma ação permanente e irreversível.
        </Typography>
        <Button variant="contained" color="error" onClick={handleOpen}>
          Excluir Conta
        </Button>
      </Box>

      <Modal
        open={open}
        onClose={handleClose}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backdropFilter: "blur(5px)",
        }}
        closeAfterTransition
      >
        <AnimatePresence>
          {open && (
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              style={{
                outline: "none",
                width: "100%",
                maxWidth: 450,
                margin: "0 auto",
                position: "relative",
              }}
            >
              <Box
                sx={{
                  bgcolor: "rgba(2, 16, 26, 0.93)",
                  border: "1.5px solid #ff5252",
                  borderRadius: 2,
                  boxShadow: 24,
                  p: { xs: 3, md: 4 },
                  textAlign: "center",
                  mx: "auto",
                  width: { xs: "90vw", sm: 400, md: 450 },
                }}
              >
                {!farewell ? (
                  <>
                    <Typography
                      variant="h5"
                      sx={{ fontWeight: "bold", color: "#ff5252" }}
                    >
                      Atenção!
                    </Typography>
                    <Typography variant="body1" sx={{ my: 2, color: "white" }}>
                      Você tem certeza que deseja excluir sua conta? Todos os
                      seus dados, incluindo histórico e preferências, serão
                      perdidos para sempre.
                    </Typography>
                    {errorMsg && (
                      <Typography
                        variant="body2"
                        sx={{ color: "error.main", mb: 2 }}
                      >
                        {errorMsg}
                      </Typography>
                    )}
                    <Box
                      sx={{
                        mt: 3,
                        display: "flex",
                        gap: 2,
                        justifyContent: "center",
                      }}
                    >
                      <Button
                        variant="outlined"
                        color="primary"
                        onClick={handleClose}
                        disabled={loading}
                      >
                        Cancelar
                      </Button>
                      <Button
                        variant="contained"
                        color="error"
                        onClick={handleDelete}
                        disabled={loading}
                        startIcon={
                          loading ? (
                            <CircularProgress color="inherit" size={18} />
                          ) : null
                        }
                      >
                        {loading
                          ? "Processando..."
                          : "Sim, Excluir Minha Conta"}
                      </Button>
                    </Box>
                  </>
                ) : (
                  <Typography variant="h6" sx={{ color: "#1976d2", mt: 4 }}>
                    Sua conta foi excluída.
                    <br />
                    Obrigado por fazer parte da nossa comunidade!
                    <br />
                    Redirecionando...
                  </Typography>
                )}
              </Box>
            </motion.div>
          )}
        </AnimatePresence>
      </Modal>
    </>
  );
}

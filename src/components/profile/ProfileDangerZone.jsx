import React, { useState } from 'react';
import { Box, Button, Typography, Modal } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { deleteUserProfile } from '@/services/userService';

const modalVariants = {
  hidden: { opacity: 0, scale: 0.85, y: 40 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 120, damping: 18 }
  },
  exit: { opacity: 0, scale: 0.85, y: 40, transition: { duration: 0.25 } }
};

export default function ProfileDangerZone({ onAccountDelete }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleDelete = async () => {
    try {
      await deleteUserProfile();
      handleClose();
      onAccountDelete();
    } catch (error) {
      console.error("Erro ao excluir conta", error);
      // Aqui você pode mostrar um alerta de erro para o usuário se quiser
    }
  };

  return (
    <>
      <Box sx={{
        mt: 4, p: 3, borderRadius: 2,
        background: 'linear-gradient(90deg, rgba(255,23,68,0.1) 0%, rgba(2,16,26,0.3) 100%)',
        border: '1.5px solid rgba(255,23,68,0.3)',
        boxShadow: '0 2px 12px rgba(255,23,68,0.10)',
        backdropFilter: 'blur(8px)',
      }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1, color: '#ff5252' }}>Zona de Risco</Typography>
        <Typography variant="body2" sx={{ color: 'rgba(227, 242, 253, 0.7)', mb: 2 }}>
          A exclusão da sua conta é uma ação permanente e irreversível.
        </Typography>
        <Button variant="contained" color="error" onClick={handleOpen}>Excluir Conta</Button>
      </Box>

      <Modal
        open={open}
        onClose={handleClose}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backdropFilter: 'blur(5px)',
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
                outline: 'none',
                width: '100%',
                maxWidth: 450,
                margin: '0 auto',
                position: 'relative',
              }}
            >
              <Box sx={{
                bgcolor: 'rgba(2, 16, 26, 0.93)',
                border: '1.5px solid #ff5252',
                borderRadius: 2,
                boxShadow: 24,
                p: { xs: 3, md: 4 },
                textAlign: 'center',
                mx: 'auto',
                width: { xs: '90vw', sm: 400, md: 450 },
              }}>
                <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#ff5252' }}>Atenção!</Typography>
                <Typography variant="body1" sx={{ my: 2, color: 'white' }}>
                  Você tem certeza que deseja excluir sua conta? Todos os seus dados, incluindo histórico e preferências, serão perdidos para sempre.
                </Typography>
                <Box sx={{ mt: 3, display: 'flex', gap: 2, justifyContent: 'center' }}>
                  <Button variant="outlined" color="primary" onClick={handleClose}>Cancelar</Button>
                  <Button variant="contained" color="error" onClick={handleDelete}>Sim, Excluir Minha Conta</Button>
                </Box>
              </Box>
            </motion.div>
          )}
        </AnimatePresence>
      </Modal>
    </>
  );
}
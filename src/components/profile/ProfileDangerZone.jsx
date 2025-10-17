// src/components/profile/ProfileDangerZone.jsx

import React, { useState } from 'react';
import { Box, Button, Typography, Modal } from '@mui/material';
import { motion } from 'framer-motion';

export default function ProfileDangerZone() {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleDelete = () => {
        // AQUI IRÁ A LÓGICA PARA CHAMAR A API DE EXCLUSÃO
        console.log("Conta excluída!");
        handleClose();
    };

    return (
        <>
            <Box sx={{
                mt: 4, p: 3, borderRadius: 3,
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

            {/* MODAL DE CONFIRMAÇÃO */}
            <Modal open={open} onClose={handleClose} sx={{ backdropFilter: 'blur(5px)' }}>
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
                    <Box sx={{
                        position: 'absolute', top: '50%', left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: { xs: '90vw', md: 450 },
                        bgcolor: 'rgba(2, 16, 26, 0.8)',
                        backdropFilter: 'blur(15px)',
                        border: '1.5px solid #ff5252',
                        borderRadius: 4, boxShadow: 24, p: 4,
                        textAlign: 'center'
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
            </Modal>
        </>
    );
}
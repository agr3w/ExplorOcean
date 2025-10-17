import React, { useState, useEffect } from 'react';
import { Box, Typography, TextField, Button, CircularProgress, Modal } from '@mui/material';
import { updateUserProfile } from '../../services/userService';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProfileSettings({ user, setUser }) {
    const [isEditing, setIsEditing] = useState(false);
    const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
    const [oldPassword, setOldPassword] = useState('');
    const [modalError, setModalError] = useState('');
    const [formData, setFormData] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setFormData({
            username: user.username || '',
            email: user.email || '',
            password: '',
        });
    }, [user]);

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleCancel = () => {
        setFormData({
            username: user.username,
            email: user.email,
            password: '',
        });
        setIsEditing(false);
    };

    const handleSaveClick = async () => {
        if (formData.password) {
            setIsConfirmModalOpen(true);
        } else {
            await handleUpdateProfile();
        }
    };

    const handleUpdateProfile = async () => {
        setLoading(true);
        setModalError('');
        try {
            const dataToUpdate = { ...formData, oldPassword };
            if (!dataToUpdate.password) delete dataToUpdate.password;

            const { data } = await updateUserProfile(dataToUpdate);
            setUser(prev => ({ ...prev, ...data }));
            setIsEditing(false);
            setIsConfirmModalOpen(false);
            setOldPassword('');
        } catch (error) {
            console.error("Erro ao atualizar perfil", error);
            if (error.response && error.response.status === 401) {
                setModalError(error.response.data.message);
            }
        } finally {
            setLoading(false);
        }
    };

    const inputStyles = {
        '& .MuiInput-underline:before': { borderBottomColor: !isEditing ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.3)' },
        '& .MuiInput-underline:after': {
            borderBottom: '2px solid #36d1e0',
            boxShadow: '0 5px 15px -5px #36d1e0',
        },
        '& .MuiInputBase-input.Mui-disabled': {
            WebkitTextFillColor: '#e3f2fd',
            color: '#e3f2fd',
        },
        '& .MuiFormLabel-root.Mui-disabled': {
            color: 'rgba(255, 255, 255, 0.7)',
        },
    };

    return (
        <>
            <Box sx={{
                mb: 4,
                px: { xs: 4, md: 8 },
                py: { xs: 4, md: 6 },
                borderRadius: 2,
                width: { xs: '100%', md: '90%' },
                maxWidth: '1100px',
                mx: 'auto',
                background: 'linear-gradient(120deg, rgba(54,209,224,0.22) 0%, rgba(41,118,194,0.13) 100%, rgba(255,255,255,0.10) 100%)',
                boxShadow: '0 12px 48px 0 rgba(54,209,224,0.18), 0 2px 8px rgba(0,0,0,0.12)',
                border: '2px solid rgba(54,209,224,0.18)',
                backdropFilter: 'blur(18px)',
                display: 'flex',
                flexDirection: 'column',
                minHeight: '420px',
            }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 3, color: '#36d1e0' }}>Configurações da Conta</Typography>
                <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 3 }}>
                    <TextField
                        disabled={!isEditing}
                        name="username"
                        label="Nome de Usuário"
                        value={formData.username}
                        onChange={handleChange}
                        variant="standard"
                        fullWidth
                        sx={inputStyles}
                    />
                    <TextField
                        disabled={!isEditing}
                        name="email"
                        label="Email"
                        value={formData.email}
                        onChange={handleChange}
                        variant="standard"
                        fullWidth
                        sx={inputStyles}
                    />
                    <AnimatePresence>
                        {isEditing && (
                            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}>
                                <TextField
                                    disabled={!isEditing}
                                    name="password"
                                    label="Nova Senha"
                                    type="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    variant="standard"
                                    fullWidth
                                    sx={inputStyles}
                                />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </Box>
                <Box
                    sx={{
                        mt: 3,
                        display: 'flex',
                        gap: 2,
                        minHeight: 56,
                        alignItems: 'center',
                    }}
                >
                    <AnimatePresence mode="wait">
                        {isEditing ? (
                            <motion.div
                                key="save-cancel"
                                layout
                                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -10, scale: 0.9 }}
                                style={{ display: 'flex', gap: '16px' }}
                            >
                                <Button variant="contained" onClick={handleSaveClick} disabled={loading}>
                                    {loading ? <CircularProgress size={24} /> : "Salvar Alterações"}
                                </Button>
                                <Button variant="outlined" onClick={handleCancel}>Cancelar</Button>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="edit"
                                layout
                                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -10, scale: 0.9 }}
                                style={{ minWidth: 180 }} // <-- Reserva espaço para o botão único
                            >
                                <Button variant="contained" onClick={() => setIsEditing(true)}>Alterar Configurações</Button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </Box>
            </Box>

            {/* MODAL DE CONFIRMAÇÃO DE SENHA */}
            <Modal open={isConfirmModalOpen} onClose={() => setIsConfirmModalOpen(false)} sx={{ backdropFilter: 'blur(5px)' }}>
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
                    <Box sx={{
                        position: 'absolute', top: '50%', left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: { xs: '90vw', sm: 400, md: 450 },
                        bgcolor: 'rgba(2, 16, 26, 0.93)',
                        border: '1.5px solid #36d1e0',
                        borderRadius: 4, boxShadow: 24, p: 4,
                        textAlign: 'center'
                    }}>
                        <Typography variant="h5" sx={{ fontWeight: 'bold', color: 'primary.light' }}>Confirmar Alteração</Typography>
                        <Typography variant="body1" sx={{ my: 2, color: 'white' }}>
                            Para sua segurança, por favor, insira sua senha antiga para confirmar a alteração.
                        </Typography>
                        <TextField
                            label="Senha Antiga"
                            type="password"
                            variant="standard"
                            fullWidth
                            value={oldPassword}
                            onChange={(e) => setOldPassword(e.target.value)}
                            onFocus={() => setModalError('')}
                            error={!!modalError}
                            helperText={modalError || ' '}
                            sx={{
                                '& .MuiInput-underline:before': { borderBottomColor: 'rgba(255, 255, 255, 0.3)' },
                                '& .MuiInput-underline:after': {
                                    borderBottom: '2px solid #36d1e0',
                                    boxShadow: '0 5px 15px -5px #36d1e0',
                                },
                                input: { color: 'white' },
                                label: { color: 'rgba(255,255,255,0.7)' }
                            }}
                        />
                        <Box sx={{ mt: 3, display: 'flex', gap: 2, justifyContent: 'center' }}>
                            <Button variant="outlined" onClick={() => setIsConfirmModalOpen(false)}>Cancelar</Button>
                            <Button variant="contained" onClick={handleUpdateProfile} disabled={loading}>
                                {loading ? <CircularProgress size={24} /> : "Confirmar e Salvar"}
                            </Button>
                        </Box>
                    </Box>
                </motion.div>
            </Modal>
        </>
    );
}
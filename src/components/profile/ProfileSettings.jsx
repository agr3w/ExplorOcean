import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography, TextField, Button, CircularProgress, Alert } from '@mui/material';
import { updateUserProfile } from '@/services/userService';
import { motion, AnimatePresence } from 'framer-motion';
import { validateProfile } from '@/services/validationService';

const inputGroupVariants = {
    initial: { opacity: 1, y: 0 },
    editing: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 80, damping: 18 } },
    notEditing: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 80, damping: 18 } }
};

const buttonGroupVariants = {
    initial: { opacity: 1, y: 0 },
    animate: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 80, damping: 18 } },
    exit: { opacity: 0, y: 10, transition: { duration: 0.2 } }
};

export default function ProfileSettings({ user, setUser }) {
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({});
    const [oldPassword, setOldPassword] = useState('');
    const [modalError, setModalError] = useState('');
    const [loading, setLoading] = useState(false);
    const [validationError, setValidationError] = useState('');
    const [successMsg, setSuccessMsg] = useState('');

    // Para manter altura dos campos sempre igual, mesmo com/sem senha antiga
    const fieldBoxRef = useRef(null);
    const [fieldBoxMinHeight, setFieldBoxMinHeight] = useState(0);

    useEffect(() => {
        setFormData({
            username: user.username || '',
            email: user.email || '',
            password: '',
        });
        setIsEditing(false);
        setValidationError('');
        setModalError('');
        setOldPassword('');
    }, [user]);

    // Calcula a altura máxima dos campos para manter o tamanho fixo
    useEffect(() => {
        if (fieldBoxRef.current) {
            setFieldBoxMinHeight(fieldBoxRef.current.scrollHeight);
        }
    }, [isEditing, formData.password]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setValidationError('');
    };

    const handleCancel = () => {
        setFormData({
            username: user.username,
            email: user.email,
            password: '',
        });
        setIsEditing(false);
        setValidationError('');
        setModalError('');
        setOldPassword('');
    };

    const handleSaveClick = async () => {
        const validationMsg = validateProfile(formData);
        if (validationMsg) {
            setValidationError(validationMsg);
            return;
        }
        // Se for alterar senha, exige senha antiga
        if (formData.password && !oldPassword) {
            setModalError('Informe sua senha antiga para alterar a senha.');
            return;
        }
        await handleUpdateProfile();
    };

    const handleUpdateProfile = async () => {
        setLoading(true);
        setModalError('');
        setValidationError('');
        setSuccessMsg('');
        try {
            const dataToUpdate = { ...formData };
            if (!dataToUpdate.password) delete dataToUpdate.password;
            if (formData.password) dataToUpdate.oldPassword = oldPassword;

            const { data } = await updateUserProfile(dataToUpdate);
            setUser(prev => ({ ...prev, ...data }));
            setIsEditing(false);
            setOldPassword('');
            setSuccessMsg('Alterações salvas com sucesso!');
            setTimeout(() => setSuccessMsg(''), 2500);
        } catch (error) {
            if (error.response && error.response.status === 409) {
                setValidationError(error.response.data.message || 'Este email já está em uso.');
            } else if (error.response && error.response.status === 401) {
                setModalError(error.response.data.message);
            } else {
                setValidationError('Erro ao atualizar perfil.');
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
        <Box sx={{
            mb: 4,
            px: { xs: 2, md: 6 },
            py: { xs: 2, md: 6 },
            borderRadius: 2,
            width: { xs: '100%', md: '100%' },
            maxWidth: '1100px',
            mx: 'auto',
            background: 'linear-gradient(120deg, rgba(54,209,224,0.22) 0%, rgba(41,118,194,0.13) 100%, rgba(255,255,255,0.10) 100%)',
            boxShadow: '0 12px 48px 0 rgba(54,209,224,0.18), 0 2px 8px rgba(0,0,0,0.12)',
            border: '2px solid rgba(54,209,224,0.18)',
            backdropFilter: 'blur(18px)',
            display: 'flex',
            flexDirection: 'column',            
        }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 3, color: '#36d1e0' }}>Configurações da Conta</Typography>
            <motion.div
                variants={inputGroupVariants}
                initial="initial"
                animate={isEditing ? "editing" : "notEditing"}
                style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 24, minHeight: fieldBoxMinHeight || 260 }}
                ref={fieldBoxRef}
            >
            <TextField
                disabled={!isEditing}
                name="username"
                label="Nome de Usuário"
                value={formData.username ?? ''}
                onChange={handleChange}
                variant="standard"
                fullWidth
                sx={inputStyles}
                aria-label="Nome de Usuário"
            />
            <TextField
                disabled={!isEditing}
                name="email"
                label="Email"
                value={formData.email ?? ''}
                onChange={handleChange}
                variant="standard"
                fullWidth
                sx={inputStyles}
                aria-label="Email"
            />
                <AnimatePresence>
                    {isEditing && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0, transition: { type: 'spring', stiffness: 80, damping: 18 } }}
                            exit={{ opacity: 0, y: 20, transition: { duration: 0.2 } }}
                        >
                            <TextField
                                disabled={!isEditing}
                                name="password"
                                label="Nova Senha"
                                type="password"
                                value={formData.password ?? ''}
                                onChange={handleChange}
                                variant="standard"
                                fullWidth
                                sx={inputStyles}
                                aria-label="Nova Senha"
                            />
                            <AnimatePresence>
                                {formData.password && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0, transition: { type: 'spring', stiffness: 80, damping: 18 } }}
                                        exit={{ opacity: 0, y: 20, transition: { duration: 0.2 } }}
                                    >
                                       <TextField
                                            name="oldPassword"
                                            label="Senha Antiga"
                                            type="password"
                                            value={oldPassword ?? ''}
                                            onChange={e => { setOldPassword(e.target.value); setModalError(''); }}
                                            variant="standard"
                                            fullWidth
                                            sx={{ ...inputStyles, mt: 2 }}
                                            aria-label="Senha Antiga"
                                            error={!!modalError}
                                            helperText={modalError || ' '}
                                        />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
            {/* Mostra erro de validação geral */}
            <AnimatePresence>
                {validationError && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                    >
                        <Alert severity="error" sx={{ mt: 2 }}>{validationError}</Alert>
                    </motion.div>
                )}
                {successMsg && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                    >
                        <Alert severity="success" sx={{ mt: 2 }}>{successMsg}</Alert>
                    </motion.div>
                )}
            </AnimatePresence>
            <Box sx={{
                mt: 3,
                display: 'flex',
                gap: 2,
                minHeight: 56,
                justifyContent: 'flex-start',
                alignItems: 'center',
            }}>
                <AnimatePresence mode="wait">
                    {isEditing ? (
                        <motion.div
                            key="save-cancel"
                            variants={buttonGroupVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            style={{ display: 'flex', gap: '16px', minWidth: 320 }}
                        >
                            <Button variant="contained" onClick={handleSaveClick} disabled={loading} aria-label="Salvar Alterações">
                                {loading ? <CircularProgress size={24} /> : "Salvar Alterações"}
                            </Button>
                            <Button variant="outlined" onClick={handleCancel} aria-label="Cancelar">Cancelar</Button>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="edit"
                            variants={buttonGroupVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            style={{ minWidth: 320 }}
                        >
                            <Button variant="contained" onClick={() => setIsEditing(true)} aria-label="Alterar Configurações" fullWidth >
                                Alterar Configurações
                            </Button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </Box>
        </Box>
    );
}
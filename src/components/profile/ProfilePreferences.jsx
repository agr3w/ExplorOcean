import React, { useState } from 'react';
import { Box, Typography, Switch, FormControlLabel, Fade, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import { updateUserProfile } from '@/services/userService';
import { MdCheckCircle } from 'react-icons/md';

// Switch estilizado
const ThemedSwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb': {
        backgroundColor: theme.palette.primary.main,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: 'rgba(54, 209, 224, 0.4)',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: '#e3f2fd',
    width: 32,
    height: 32,
  },
  '& .MuiSwitch-track': {
    borderRadius: 20 / 2,
    opacity: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
  },
}));

export default function ProfilePreferences({ user, setUser }) {
  const [prefs, setPrefs] = useState({
    enable3d: user.enable3d,
    notifications: user.notifications,
  });
  const [success, setSuccess] = useState({ enable3d: false, notifications: false });

  const handleChange = async (event) => {
    const { name, checked } = event.target;
    setPrefs(prev => ({ ...prev, [name]: checked }));

    try {
      const { data } = await updateUserProfile({ [name]: checked });
      setUser(prevUser => ({ ...prevUser, ...data }));

      // Se for o switch de 3D, salva no localStorage
      if (name === 'enable3d') {
        localStorage.setItem('show3D', checked ? 'true' : 'false');
      }
      // Mostra o ícone de sucesso minimalista ao lado do switch alterado
      setSuccess(prev => ({ ...prev, [name]: true }));
      setTimeout(() => setSuccess(prev => ({ ...prev, [name]: false })), 1400);
    } catch (error) {
      // Em caso de erro, não mostra o ícone de sucesso
      setSuccess(prev => ({ ...prev, [name]: false }));
      console.error("Erro ao salvar preferência", error);
    }
  };

  return (
    <Box sx={{
      mb: 4, p: 3, borderRadius: 2,
      background: 'linear-gradient(120deg, rgba(54,209,224,0.13) 0%, rgba(41,118,194,0.10) 100%)',
      boxShadow: '0 2px 12px rgba(54,209,224,0.10)',
      backdropFilter: 'blur(8px)',
    }}>
      <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>Preferências</Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <FormControlLabel
            control={<ThemedSwitch checked={prefs.enable3d} onChange={handleChange} name="enable3d" />}
            label="Ativar modelos 3D por padrão"
            sx={{ m: 0 }}
          />
          <Fade in={success.enable3d}>
            <span>
              <MdCheckCircle size={22} color="#36d1e0" style={{ verticalAlign: 'middle' }} />
            </span>
          </Fade>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <FormControlLabel
            control={<ThemedSwitch checked={prefs.notifications} onChange={handleChange} name="notifications" />}
            label="Receber notificações por email"
            sx={{ m: 0 }}
          />
          <Fade in={success.notifications}>
            <span>
              <MdCheckCircle size={22} color="#36d1e0" style={{ verticalAlign: 'middle' }} />
            </span>
          </Fade>
        </Box>
      </Box>
    </Box>
  );
}
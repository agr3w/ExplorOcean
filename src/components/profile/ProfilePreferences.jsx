import React, { useState } from 'react';
import { Box, Typography, Switch, FormControlLabel } from '@mui/material';
import { styled } from '@mui/material/styles';
import { updateUserProfile } from '../../services/userService';

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

  const handleChange = async (event) => {
    const { name, checked } = event.target;
    setPrefs(prev => ({ ...prev, [name]: checked }));

    try {
      const { data } = await updateUserProfile({ [name]: checked });
      setUser(prevUser => ({ ...prevUser, ...data }));
    } catch (error) {
      console.error("Erro ao salvar preferência", error);
    }
  };

  return (
    <Box sx={{
      mb: 4, p: 3, borderRadius: 3,
      background: 'rgba(2,16,26,0.5)',
      boxShadow: '0 2px 12px rgba(54,209,224,0.10)',
      backdropFilter: 'blur(8px)',
    }}>
      <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>Preferências</Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <FormControlLabel
          control={<ThemedSwitch checked={prefs.enable3d} onChange={handleChange} name="enable3d" />}
          label="Ativar modelos 3D por padrão"
        />
        <FormControlLabel
          control={<ThemedSwitch checked={prefs.notifications} onChange={handleChange} name="notifications" />}
          label="Receber notificações por email"
        />
      </Box>
    </Box>
  );
}
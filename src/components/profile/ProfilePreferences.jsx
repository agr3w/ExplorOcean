// src/components/profile/ProfilePreferences.jsx

import React, { useState } from 'react';
import { Box, Typography, Switch, FormControlLabel } from '@mui/material';
import { styled } from '@mui/material/styles';

// 1. COMPONENTE DE SWITCH ESTILIZADO
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
        backgroundColor: theme.palette.primary.main, // Ciano quando ligado
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

export default function ProfilePreferences() {
  const [prefs, setPrefs] = useState({
    enable3d: true,
    notifications: false,
  });

  const handleChange = (event) => {
    setPrefs({
      ...prefs,
      [event.target.name]: event.target.checked,
    });
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
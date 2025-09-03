import React from 'react';
import { AppBar, Toolbar, Box, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

export default function NavigatorBase({
  transparent = false,
  sx = {},
  buttonColor = '#333',
  menuBg = '#b2ebf2',
  menuText = '#333',
  children,
}) {
  return (
    <AppBar
      position={transparent ? 'absolute' : 'fixed'}
      sx={{
        background: transparent ? 'transparent' : '#36d1e0',
        boxShadow: 'none',
        ...sx,
      }}
    >
      <Toolbar
        sx={{
          minHeight: 56,
          display: 'flex',
          justifyContent: 'space-between',
          px: transparent ? 6 : 0,
          pt: transparent ? 6 : 0,
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Button
            startIcon={<MenuIcon />}
            component={Link}
            to="/explorerHub"
            sx={{
              background: transparent ? '#fff' : menuBg,
              color: transparent ? '#333' : menuText,
              borderRadius: transparent ? 4 : 2,
              textTransform: 'none',
              fontWeight: 500,
              px: transparent ? 3 : 2,
              py: 1,
              fontSize: '1rem',
              boxShadow: transparent ? '0 2px 8px rgba(0,0,0,0.08)' : undefined,
            }}
          >
            Explore os recursos
          </Button>
        </Box>
        <Box sx={{ display: 'flex', gap: 6 }}>
          <Button sx={{ color: buttonColor, textTransform: 'none', fontSize: '1rem' }} component={Link} to="/">Inicio</Button>
          <Button sx={{ color: buttonColor, textTransform: 'none', fontSize: '1rem' }} component={Link} to="/perfil">Acessar</Button>
        </Box>
        {children}
      </Toolbar>
    </AppBar>
  );
}
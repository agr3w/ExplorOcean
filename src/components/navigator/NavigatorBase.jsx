import React, { useState } from 'react';
import { AppBar, Toolbar, Box, Button, Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const drawerLinks = [
  { label: 'Globo 3D', to: '/globe' },
  { label: 'Fauna e Flora', to: '/fauna-flora' },
  { label: 'História com o Oceano', to: '/timeline' },
  { label: 'Documentários', to: '/documentaries' },
  { label: 'Quizzes', to: '/quizzes' },
  { label: 'Home', to: '/' },
  { label: 'Perfil', to: '/perfil' },
];

export default function NavigatorBase({
  transparent = false,
  sx = {},
  buttonColor = '#333',
  menuBg = '#b2ebf2',
  menuText = '#333',
  children,
}) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerOpen = () => setDrawerOpen(true);
  const handleDrawerClose = () => setDrawerOpen(false);

  return (
    <>
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
              onClick={handleDrawerOpen}
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
      <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerClose}>
        <Box sx={{ width: 260, pt: 2 }}>
          <List>
            {drawerLinks.map((item) => (
              <ListItem key={item.to} disablePadding>
                <ListItemButton component={Link} to={item.to} onClick={handleDrawerClose}>
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
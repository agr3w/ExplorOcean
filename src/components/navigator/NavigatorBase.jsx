import React, { useState } from 'react';
import { AppBar, Toolbar, Box, Button, Drawer, List, ListItem, ListItemButton, ListItemText, ListSubheader, Divider, Typography } from '@mui/material';
import { MdMenu } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { navigationLinks } from '../../content/navigatorContet/navigatorLinks';

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
              startIcon={<MdMenu size={24} />}
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
        <Box sx={{ width: 280, pt: 2 }}>
          <Typography variant="h6" sx={{ px: 2, pb: 1, fontWeight: 700 }}>
            Navegação
          </Typography>
          <Divider />
          {navigationLinks.map((section, idx) => (
            <List
              key={section.subheader}
              subheader={
                <ListSubheader sx={{ bgcolor: 'transparent', fontWeight: 600, fontSize: '1rem', color: '#1976d2' }}>
                  {section.subheader}
                </ListSubheader>
              }
            >
              {section.items.map((item) => (
                <ListItem key={item.to} disablePadding>
                  <ListItemButton component={Link} to={item.to} onClick={handleDrawerClose}>
                    <Box sx={{ minWidth: 32, color: '#1976d2', display: 'flex', alignItems: 'center' }}>  {item.icon && React.createElement(item.icon, { size: 22 })}</Box>
                    <ListItemText primary={item.label} />
                  </ListItemButton>
                </ListItem>
              ))}
              {idx < navigationLinks.length - 1 && <Divider sx={{ my: 1 }} />}
            </List>
          ))}
        </Box>
      </Drawer>
    </>
  );
}
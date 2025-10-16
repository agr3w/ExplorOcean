import React, { useState } from 'react';
// 1. Importações adicionais do MUI para as novas funcionalidades
import {
  AppBar, Toolbar, Box, Button, Drawer, List, ListItem, ListItemButton, ListItemText,
  ListSubheader, Divider, Typography, IconButton, Tooltip, Slide, useScrollTrigger
} from '@mui/material';
import { MdMenu, MdHome, MdPerson } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { navigationLinks } from '../../content/navigatorContet/navigatorLinks';



export default function NavigatorBase({
  transparent = false,
  sx = {},
  buttonColor = '#fff',
  menuBg = '#b2ebf2',
  menuText = '#333',
}) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerOpen = () => setDrawerOpen(true);
  const handleDrawerClose = () => setDrawerOpen(false);

  return (
    <>

      <AppBar
        position={transparent ? 'absolute' : 'fixed'}
        sx={{
          background: transparent
            ? 'transparent'
            : 'rgba(2, 16, 26, 0.85)',
          backdropFilter: transparent ? 'none' : 'blur(10px)',
          borderBottom: transparent ? 'none' : '1px solid rgba(54, 209, 224, 0.2)',
          boxShadow: 'none',
          ...sx,
        }}
      >
        <Toolbar
          sx={{
            minHeight: 56,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            px: { xs: 2, md: 6 },
            pt: transparent ? 6 : 0,
          }}
        >
          {/* --- SEÇÃO ESQUERDA --- */}
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-start' }}>
            {/* Botão "Explorar" responsivo */}
            <Button
              startIcon={<MdMenu size={24} />}
              onClick={handleDrawerOpen}
              sx={{
                display: { xs: 'none', md: 'inline-flex' },
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
            <IconButton
              onClick={handleDrawerOpen}
              sx={{
                display: { xs: 'inline-flex', md: 'none' },
                color: buttonColor,
                background: transparent ? '#fff' : 'rgba(255,255,255,0.1)',
              }}
            >
              <MdMenu size={24} />
            </IconButton>
          </Box>

          {/* --- SEÇÃO CENTRAL (LOGO) --- */}
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
            <Typography
              component={Link}
              to="/"
              variant="h5"
              sx={{
                color: buttonColor,
                fontWeight: 'bold',
                textDecoration: 'none',
                letterSpacing: 1,
              }}
            >
              ExplorOcean
            </Typography>
          </Box>

          {/* --- SEÇÃO DIREITA --- */}
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
            <Tooltip title="Acessar Perfil" arrow>
              <IconButton component={Link} to="/auth" sx={{ color: buttonColor }}>
                <MdPerson size={26} />
              </IconButton>
            </Tooltip>
          </Box>
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
                    <Box sx={{ minWidth: 32, color: '#1976d2', display: 'flex', alignItems: 'center' }}>
                      {item.icon && React.createElement(item.icon, { size: 22 })}
                    </Box>
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
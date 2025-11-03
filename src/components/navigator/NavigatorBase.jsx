import React, { useState } from 'react';
import {
  AppBar, Toolbar, Box, Button, Drawer, List, ListItem, ListItemButton, ListItemText,
  ListSubheader, Divider, Typography, IconButton, Tooltip
} from '@mui/material';
import { MdMenu, MdHome, MdPerson, MdLogout } from 'react-icons/md'; // Adicione o ícone de Logout
import { Link } from 'react-router-dom';
import { navigationLinks } from '../../content/navigatorContet/navigatorLinks';
import { useAuth } from '../../context/AuthContext'; // Importe o useAuth

function NavigatorBase({
  transparent = false,
  sx = {},
  buttonColor = '#fff',
  menuBg = '#b2ebf2',
  menuText = '#333',
}) {
  const { token, logout } = useAuth(); // Pegue o token e a função de logout do contexto
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
            px: { xs: 4.5, md: 6 },
            pt: transparent ? 6 : 0,
          }}
        >
          {/* --- SEÇÃO ESQUERDA --- */}
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-start' }}>
            <Button
              startIcon={<MdMenu size={24} />}
              onClick={handleDrawerOpen}
              sx={{
                display: { xs: 'none', md: 'inline-flex' },
                textTransform: 'none',
                fontWeight: 500,
                px: 3, py: 1,
                fontSize: '1rem',
                borderRadius: 4,
                transition: 'all 0.3s ease',
                ...(transparent
                  ? {
                    backgroundColor: 'rgba(255, 255, 255, 0.15)',
                    backdropFilter: 'blur(5px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    color: '#fff',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.25)',
                    }
                  }
                  : {
                    backgroundColor: 'rgba(54, 209, 224, 0.1)',
                    border: '1px solid rgba(54, 209, 224, 0.2)',
                    color: '#e3f2fd',
                    '&:hover': {
                      backgroundColor: 'rgba(54, 209, 224, 0.2)',
                    }
                  }
                ),
              }}
            >
              Explore os recursos
            </Button>
            <IconButton
              onClick={handleDrawerOpen}
              sx={{
                display: { xs: 'inline-flex', md: 'none' },
                color: buttonColor,
                transition: 'all 0.3s ease',
                ...(transparent
                  ? {
                    backgroundColor: 'rgba(255, 255, 255, 0.15)',
                    backdropFilter: 'blur(5px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                  }
                  : {
                    backgroundColor: 'rgba(54, 209, 224, 0.1)',
                    border: '1px solid rgba(54, 209, 224, 0.2)',
                  }
                ),
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

          {/* --- SEÇÃO DIREITA ATUALIZADA --- */}
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
            <Tooltip title="Início" arrow>
              <IconButton component={Link} to="/" sx={{ color: buttonColor }}>
                <MdHome size={26} />
              </IconButton>
            </Tooltip>
            {token ? (
              <>
                <Tooltip title="Acessar Perfil" arrow>
                  <IconButton component={Link} to="/profile" sx={{ color: buttonColor }}>
                    <MdPerson size={26} />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Sair" arrow>
                  <IconButton onClick={logout} sx={{ color: buttonColor }}>
                    <MdLogout size={26} />
                  </IconButton>
                </Tooltip>
              </>
            ) : (
              <Tooltip title="Acessar" arrow>
                <IconButton component={Link} to="/auth" sx={{ color: buttonColor }}>
                  <MdPerson size={26} />
                </IconButton>
              </Tooltip>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={handleDrawerClose}
        // 1. Adicione a prop PaperProps para estilizar o fundo do Drawer
        PaperProps={{
          sx: {
            backgroundColor: 'rgba(2, 16, 26, 0.85)', // Fundo escuro e mais opaco
            backdropFilter: 'blur(10px)',
            borderRight: '1px solid rgba(54, 209, 224, 0.2)',
            color: '#e3f2fd', // Cor de texto padrão para branco suave
          }
        }}
      >
        <Box sx={{ width: 280, pt: 2 }}>
          <Typography variant="h6" sx={{ px: 2, pb: 1, fontWeight: 700 }}>
            Navegação
          </Typography>
          <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.1)' }} />
          {navigationLinks.map((section, idx) => (
            <List
              key={section.subheader}
              subheader={
                <ListSubheader sx={{
                  bgcolor: 'transparent',
                  fontWeight: 600,
                  fontSize: '1rem',
                  // 2. Ajuste as cores do texto e ícones para o novo fundo escuro
                  color: '#36d1e0', // Ciano para destaque
                }}>
                  {section.subheader}
                </ListSubheader>
              }
            >
              {section.items.map((item) => (
                <ListItem key={item.to} disablePadding>
                  <ListItemButton component={Link} to={item.to} onClick={handleDrawerClose}>
                    <Box sx={{
                      minWidth: 32,
                      color: '#36d1e0', // Ciano para o ícone
                      display: 'flex',
                      alignItems: 'center'
                    }}>
                      {item.icon && React.createElement(item.icon, { size: 22 })}
                    </Box>
                    <ListItemText primary={item.label} />
                  </ListItemButton>
                </ListItem>
              ))}
              {idx < navigationLinks.length - 1 && <Divider sx={{ my: 1, borderColor: 'rgba(255, 255, 255, 0.1)' }} />}
            </List>
          ))}
        </Box>
      </Drawer>
    </>
  );
}

export default React.memo(NavigatorBase);
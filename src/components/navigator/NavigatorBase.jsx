import React, { useState } from 'react';
import {
  AppBar, Toolbar, Box, Button, Drawer, List, ListItem, ListItemButton, ListItemText,
  ListSubheader, Divider, Typography, IconButton, Tooltip
} from '@mui/material';
import { MdMenu, MdHome, MdPerson, MdLogout } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import { navigationLinks } from '../../content/navigatorContet/navigatorLinks';
import { useAuth } from '../../context/AuthContext';

function NavigatorBase({
  transparent = false,
  sx = {},
  buttonColor = '#fff',
  menuBg = '#b2ebf2',
  menuText = '#333',
}) {
  const { token, logout } = useAuth();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();

  const handleDrawerOpen = () => setDrawerOpen(true);
  const handleDrawerClose = () => setDrawerOpen(false);

  const handleProfileClick = () => {
    if (token) {
      navigate('/profile');
    } else {
      navigate('/auth');
    }
  };

  return (
    <>
      <AppBar
        position={transparent ? 'absolute' : 'fixed'}
        sx={{
          transition: 'background 0.3s, color 0.3s',
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
            px: { xs: 2, md: 6 }, // Menor padding no mobile
            pt: transparent ? 6 : 0,
          }}
        >
          {/* --- ESQUERDA --- */}
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-start' }}>
            <Button
              startIcon={<MdMenu size={24} />}
              onClick={handleDrawerOpen}
              sx={{
                display: { xs: 'none', md: 'inline-flex' },
                textTransform: 'none',
                fontWeight: 500,
                px: 2, py: 0.8, // Mais compacto
                fontSize: '1rem',
                borderRadius: 3,
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
                p: 1, // padding menor
                mx: 0.5, // margem menor
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
              <MdMenu size={22} />
            </IconButton>
          </Box>

          {/* --- CENTRAL (LOGO) --- */}
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
                fontSize: { xs: '1.3rem', md: '1.7rem' }, // Ajusta tamanho no mobile
              }}
            >
              ExplorOcean
            </Typography>
          </Box>

          {/* --- DIREITA --- */}
          <Box sx={{
            flex: 1,
            display: 'flex',
            justifyContent: 'flex-end',
            gap: { xs: 0.5, md: 1 }, // Menor espaçamento no mobile
          }}>
            <Tooltip title="Início" arrow>
              <IconButton component={Link} to="/" sx={{ color: buttonColor, p: { xs: 1, md: 2 } }}>
                <MdHome size={24} />
              </IconButton>
            </Tooltip>
            {token ? (
              <>
                <Tooltip title="Acessar Perfil" arrow>
                  <IconButton onClick={handleProfileClick} sx={{ color: buttonColor, p: { xs: 1, md: 2 } }}>
                    <MdPerson size={24} />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Sair" arrow>
                  <IconButton onClick={logout} sx={{ color: buttonColor, p: { xs: 1, md: 2 } }}>
                    <MdLogout size={24} />
                  </IconButton>
                </Tooltip>
              </>
            ) : (
              <Tooltip title="Acessar" arrow>
                <IconButton component={Link} to="/auth" sx={{ color: buttonColor, p: { xs: 1, md: 2 } }}>
                  <MdPerson size={24} />
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
        PaperProps={{
          sx: {
            backgroundColor: 'rgba(2, 16, 26, 0.92)',
            backdropFilter: 'blur(10px)',
            borderRight: '1px solid rgba(54, 209, 224, 0.2)',
            color: '#e3f2fd',
            width: { xs: '85vw', sm: 280 },
            transition: 'background-color 0.3s, color 0.3s', // Transição leve
          }
        }}
      >
        <Box sx={{ width: '100%', pt: 2 }}>
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
                  color: '#36d1e0',
                }}>
                  {section.subheader}
                </ListSubheader>
              }
            >
              {section.items.map((item) => (
                <ListItem key={item.to} disablePadding>
                  {item.label === 'Perfil' ? (
                    <ListItemButton
                      onClick={() => {
                        handleDrawerClose();
                        handleProfileClick();
                      }}
                    >
                      <Box sx={{
                        minWidth: 32,
                        color: '#36d1e0',
                        display: 'flex',
                        alignItems: 'center'
                      }}>
                        {item.icon && React.createElement(item.icon, { size: 22 })}
                      </Box>
                      <ListItemText
                        primary={item.label}
                        sx={{
                          '.MuiTypography-root': {
                            fontSize: { xs: '1rem', md: '1.1rem' },
                          }
                        }}
                      />
                    </ListItemButton>
                  ) : (
                    <ListItemButton
                      component={Link}
                      to={item.to}
                      onClick={handleDrawerClose}
                    >
                      <Box sx={{
                        minWidth: 32,
                        color: '#36d1e0',
                        display: 'flex',
                        alignItems: 'center'
                      }}>
                        {item.icon && React.createElement(item.icon, { size: 22 })}
                      </Box>
                      <ListItemText
                        primary={item.label}
                        sx={{
                          '.MuiTypography-root': {
                            fontSize: { xs: '1rem', md: '1.1rem' },
                          }
                        }}
                      />
                    </ListItemButton>
                  )}
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
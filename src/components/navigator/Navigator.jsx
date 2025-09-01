import React from 'react'
import { AppBar, Toolbar, Button, Box } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

export default function Navigator() {
  return (
    <AppBar position="fixed" sx={{ background: '#36d1e0', boxShadow: 'none' }}>
      <Toolbar sx={{ minHeight: 56, display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Button
            startIcon={<MenuIcon />}
            sx={{
              background: '#b2ebf2',
              color: '#333',
              borderRadius: 2,
              textTransform: 'none',
              fontWeight: 500,
              px: 2,
              py: 1,
              fontSize: '1rem',
            }}
          >
            Explore os recursos
          </Button>
        </Box>
        <Box sx={{ display: 'flex', gap: 6 }}>
          <Button sx={{ color: '#333', textTransform: 'none', fontSize: '1rem' }}>Inicio</Button>
          <Button sx={{ color: '#333', textTransform: 'none', fontSize: '1rem' }}>Acessar</Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
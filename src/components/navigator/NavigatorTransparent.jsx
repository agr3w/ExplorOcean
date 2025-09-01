import React from 'react'
import { Box, Button } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

export default function NavigatorTransparent() {
  return (
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 10,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        px: 6,
        pt: 6,
        pointerEvents: 'none', // permite interação apenas nos botões
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, pointerEvents: 'auto' }}>
        <Button
          startIcon={<MenuIcon />}
          sx={{
            background: '#fff',
            color: '#333',
            borderRadius: 4,
            textTransform: 'none',
            fontWeight: 500,
            px: 3,
            py: 1,
            fontSize: '1rem',
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
          }}
        >
          Explore os recursos
        </Button>
      </Box>
      <Box sx={{ display: 'flex', gap: 6, pointerEvents: 'auto' }}>
        <Button sx={{ color: '#fff', textTransform: 'none', fontSize: '1rem' }}>Inicio</Button>
        <Button sx={{ color: '#fff', textTransform: 'none', fontSize: '1rem' }}>Acessar</Button>
      </Box>
    </Box>
  )
}
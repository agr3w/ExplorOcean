import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#36d1e0', // Turquesa oceano
      dark: '#1976d2', // Azul profundo
      contrastText: '#fff',
    },
    secondary: {
      main: '#00bcd4', // Azul claro
      dark: '#0097a7',
      contrastText: '#fff',
    },
    background: {
      default: '#02101a', // cor sólida
      paper: 'rgba(2,16,26,0.85)',
    },
    text: {
      primary: '#e3f2fd', // Azul claro para contraste
      secondary: '#b3c2d6',
    },
  },
  shape: {
    borderRadius: 24,
  },
  typography: {
    fontFamily: 'Montserrat, Arial, sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '3rem',
      letterSpacing: '0.04em',
    },
    subtitle1: {
      fontSize: '1.3rem',
      color: '#b3c2d6',
    },
  },
  shadows: [
    "none",
    "0 2px 12px rgba(30,60,120,0.10)",
    ...Array(23).fill("0 2px 12px rgba(30,60,120,0.10)")
  ],
})

export default theme
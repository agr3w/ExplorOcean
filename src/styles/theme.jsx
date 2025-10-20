import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#36d1e0',
      dark: '#1976d2',
      contrastText: '#fff',
    },
    secondary: {
      main: '#00bcd4',
      dark: '#0097a7',
      contrastText: '#fff',
    },
    background: {
      default: '#02101a',
      paper: 'rgba(2,16,26,0.85)',
    },
    text: {
      primary: '#e3f2fd',
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
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          background: 'rgba(255,255,255,0.10)',
        },
      },
    },
    StyledCard: {
      styleOverrides: {
        root: {
          background: 'rgba(255,255,255,0.10)',
        },
      },
    },
  },

})




export default theme
import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#1e90ff',
      dark: '#187acd',
      contrastText: '#fff',
    },
    background: {
      default: '#0a2540',
      paper: '#02101a',
    },
    text: {
      primary: '#fff',
      secondary: '#b3c2d6',
    },
  },
  shape: {
    borderRadius: 20,
  },
  typography: {
    fontFamily: 'Montserrat, Arial, sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '3rem',
    },
    subtitle1: {
      fontSize: '1.3rem',
    },
  },
})

export default theme
import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRoutes from './Routes'
import { ThemeProvider } from '@mui/material/styles'
import theme from './styles/theme'
import './styles/reset.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
        <AppRoutes />
    </ThemeProvider>
  </React.StrictMode>
)
// src/main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRoutes from './Routes';
import { ThemeProvider } from '@mui/material/styles';
import theme from './styles/theme';
import './styles/reset.css';
import SmoothScroll from './components/universal/SmoothScroll';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Router>
        <SmoothScroll>
          <AppRoutes />
        </SmoothScroll>
      </Router>
    </ThemeProvider>
  </React.StrictMode>
);
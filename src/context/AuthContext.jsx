// src/context/AuthContext.jsx

import React, { createContext, useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('authToken'));
  const navigate = useNavigate();

  // Efeito para atualizar o estado se o localStorage mudar em outra aba
  useEffect(() => {
    const handleStorageChange = () => {
      setToken(localStorage.getItem('authToken'));
    };
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const loginAction = (newToken) => {
    localStorage.setItem('authToken', newToken);
    setToken(newToken);
    navigate('/profile'); // Redireciona para a página de perfil após o login
  };

  const logoutAction = () => {
    localStorage.removeItem('authToken');
    setToken(null);
    navigate('/auth'); // Redireciona para a página de autenticação após o logout
  };

  const value = {
    token,
    login: loginAction,
    logout: logoutAction,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Hook customizado para facilitar o uso do contexto
export const useAuth = () => {
  return useContext(AuthContext);
};
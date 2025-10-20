// src/context/AuthContext.jsx

import React, { createContext, useState, useContext, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUserProfile } from '../services/userService'; // Importe o serviço de perfil

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('authToken'));
  const [user, setUser] = useState(null); // 1. NOVO ESTADO PARA OS DADOS DO USUÁRIO
  const navigate = useNavigate();

  // 2. FUNÇÃO PARA BUSCAR E ATUALIZAR OS DADOS DO USUÁRIO
  const fetchAndSetUser = useCallback(async () => {
    const currentToken = localStorage.getItem('authToken');
    if (currentToken) {
      try {
        const { data } = await getUserProfile();
        setUser(data);
      } catch (error) {
        console.error("Sessão inválida, deslogando.", error);
        logoutAction(); // Se o token for inválido, desloga
      }
    } else {
      setUser(null);
    }
  }, []);

  // Busca os dados do usuário quando o app carrega ou o token muda
  useEffect(() => {
    fetchAndSetUser();
  }, [token, fetchAndSetUser]);

  const loginAction = (newToken) => {
    localStorage.setItem('authToken', newToken);
    setToken(newToken);
    // O useEffect acima cuidará de buscar o usuário e redirecionar
  };

  const logoutAction = () => {
    localStorage.removeItem('authToken');
    setToken(null);
    setUser(null);
    navigate('/auth');
  };

  const value = {
    token,
    user, // 3. Exponha o usuário
    login: loginAction,
    logout: logoutAction,
    refetchUser: fetchAndSetUser, // 4. Exponha uma função para refazer o fetch
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
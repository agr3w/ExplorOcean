import React, { createContext, useState, useContext, useEffect, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUserProfile } from '../services/userService';
import apiClient from '../services/api';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('authToken'));
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Função para logout
  const logoutAction = useCallback(() => {
    localStorage.removeItem('authToken');
    apiClient.defaults.headers.common['Authorization'] = undefined;
    setToken(null);
    setUser(null);
    navigate('/auth');
  }, [navigate]);

  // Função para buscar e setar o usuário
  const fetchAndSetUser = useCallback(async () => {
    const currentToken = localStorage.getItem('authToken');
    if (currentToken) {
      apiClient.defaults.headers.common['Authorization'] = `Bearer ${currentToken}`;
      try {
        const { data } = await getUserProfile();
        setUser(data);
        setToken(currentToken);
      } catch (error) {
        console.error("Sessão inválida, deslogando.", error);
        logoutAction();
      }
    } else {
      setUser(null);
      setToken(null);
    }
  }, [logoutAction]);

  useEffect(() => {
    fetchAndSetUser();
  }, [fetchAndSetUser]);

  // Função para login, agora async e busca o usuário após login
  const loginAction = useCallback(async (newToken) => {
    localStorage.setItem('authToken', newToken);
    apiClient.defaults.headers.common['Authorization'] = `Bearer ${newToken}`;
    setToken(newToken);
    try {
      const { data } = await getUserProfile();
      setUser(data);
    } catch (error) {
      console.error("Falha ao buscar usuário pós-login, deslogando.", error);
      logoutAction();
      throw error;
    }
  }, [logoutAction]);

  const value = useMemo(() => ({
    token,
    user,
    login: loginAction,
    logout: logoutAction,
    refetchUser: fetchAndSetUser,
  }), [token, user, loginAction, logoutAction, fetchAndSetUser]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
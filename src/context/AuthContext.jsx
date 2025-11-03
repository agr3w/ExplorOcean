// src/context/AuthContext.jsx

import React, { createContext, useState, useContext, useEffect, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUserProfile } from '../services/userService';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('authToken'));
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const fetchAndSetUser = useCallback(async () => {
    const currentToken = localStorage.getItem('authToken');
    if (currentToken) {
      try {
        const { data } = await getUserProfile();
        setUser(data);
      } catch (error) {
        console.error("Sessão inválida, deslogando.", error);
        logoutAction();
      }
    } else {
      setUser(null);
    }
  }, []);

  useEffect(() => {
    fetchAndSetUser();
  }, [token, fetchAndSetUser]);

  const loginAction = useCallback((newToken) => {
    localStorage.setItem('authToken', newToken);
    setToken(newToken);
  }, []);

  const logoutAction = useCallback(() => {
    localStorage.removeItem('authToken');
    setToken(null);
    setUser(null);
    navigate('/auth');
  }, [navigate]);

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
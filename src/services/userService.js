// src/services/userService.js

import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3001/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor para adicionar o token de autenticação em todas as requisições
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('authToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

// --- Funções da API ---

export const getUserProfile = () => {
  return apiClient.get('/users/me');
};

export const updateUserProfile = (userData) => {
  return apiClient.put('/users/me', userData);
};

export const deleteUserProfile = () => {
  return apiClient.delete('/users/me');
};
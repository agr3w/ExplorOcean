// src/services/authService.js
import axios from 'axios';
import apiClient from './api';

export const registerUser = (userData) => {
  return apiClient.post('/users/register', userData);
};

export const loginUser = (credentials) => {
  return apiClient.post('/users/login', credentials);
};
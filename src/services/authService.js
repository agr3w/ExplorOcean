// src/services/authService.js

import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3001/api', // URL base da nossa API
  headers: {
    'Content-Type': 'application/json',
  },
});

export const registerUser = (userData) => {
  // O userData será { username, email, password }
  return apiClient.post('/users/register', userData);
};

export const loginUser = (credentials) => {
  // O credentials será { email, password }
  return apiClient.post('/users/login', credentials);
};
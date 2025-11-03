// src/services/userService.js

import axios from 'axios';
import apiClient from './api';

export const getUserProfile = () => {
  return apiClient.get('/users/me');
};

export const updateUserProfile = (userData) => {
  return apiClient.put('/users/me', userData);
};

export const deleteUserProfile = () => {
  return apiClient.delete('/users/me');
};
// src/services/userActionsService.js

import axios from 'axios';
import apiClient from './api';

export const addHistoryItem = (historyData, config = {}) => {
  return apiClient.post('/history/add', historyData, config); // Passe a config para o post
};

export const addFavoriteItem = (favoriteData) => {
  return apiClient.post('/favorites/add', favoriteData);
};

export const removeFavoriteItem = (favoriteData) => {
  return apiClient.delete('/favorites/remove', { data: favoriteData });
};
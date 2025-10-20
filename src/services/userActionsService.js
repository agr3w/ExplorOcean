// src/services/userActionsService.js

import axios from 'axios';
import apiClient from './api';

export const addHistoryItem = (historyData) => {
  return apiClient.post('/history/add', historyData);
};

export const addFavoriteItem = (favoriteData) => {
  return apiClient.post('/favorites/add', favoriteData);
};

export const removeFavoriteItem = (favoriteData) => {
  return apiClient.delete('/favorites/remove', { data: favoriteData });
};
// src/services/authService.js
import axios from "axios";
import apiClient from "./api";

export const registerUser = async (userData) => {
  try {
    return await apiClient.post("/users/register", userData);
  } catch (err) {
    console.error(
      "registerUser error:",
      err.response?.status,
      err.response?.data || err.message
    );
    throw err;
  }
};

export const loginUser = async (credentials) => {
  try {
    return await apiClient.post("/users/login", credentials);
  } catch (err) {
    console.error(
      "loginUser error:",
      err.response?.status,
      err.response?.data || err.message
    );
    throw err;
  }
};

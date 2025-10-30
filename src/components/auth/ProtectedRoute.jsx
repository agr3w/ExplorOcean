// src/components/auth/ProtectedRoute.jsx
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Use nosso hook

const ProtectedRoute = () => {
  const { token } = useAuth(); // Pega o token do estado global

  if (token) {
    return <Outlet />;
  }

  return <Navigate to="/auth" replace />;
};

export default ProtectedRoute;
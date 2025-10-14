// src/hooks/useAuthForm.js

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser, registerUser } from '../services/authService';

// ...existing code...
export const useAuthForm = (isLogin, onToggle, onSuccess, onError, setError, setMood) => {
    // Remova o estado local de erro do hook!
    const [formData, setFormData] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [success, setSuccess] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setSuccess('');
        setError && setError('');
        setMood && setMood('idle');

        try {
            if (isLogin) {
                const { data } = await loginUser(formData);
                localStorage.setItem('authToken', data.token);
                onSuccess && onSuccess();
                setMood && setMood('happy');
                setTimeout(() => navigate('/'), 1000);
            } else {
                await registerUser(formData);
                setSuccess('Cadastro realizado! Redirecionando para o login...');
                onSuccess && onSuccess();
                setMood && setMood('happy');
                setTimeout(() => onToggle(), 2000);
            }
        } catch (err) {
            setError && setError(err.response?.data?.message || 'Ocorreu um erro. Tente novamente.');
            setMood && setMood('sad');
            onError && onError();
        } finally {
            setIsLoading(false);
        }
    };

    return { formData, isLoading, success, handleChange, handleSubmit };
};
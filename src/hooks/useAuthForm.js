import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser, registerUser } from '../services/authService';
import { useAuth } from '../context/AuthContext'; 

export const useAuthForm = (isLogin, onToggle, setSuccess, setError, setMood) => {
  const navigate = useNavigate();
  const { login } = useAuth(); 
  const [formData, setFormData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});

  useEffect(() => {
    setValidationErrors({});
    setError && setError('');
    setSuccess && setSuccess('');
    setFormData({});
  }, [isLogin, setError, setSuccess]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
    if (validationErrors[name]) {
      setValidationErrors(prevErrors => ({ ...prevErrors, [name]: '' }));
    }
  };

  const validateForm = () => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!isLogin) {
      if (!formData.username?.trim()) errors.username = "Nome de usuário é obrigatório.";
    }
    if (!formData.email?.trim()) {
      errors.email = "Email é obrigatório.";
    } else if (!emailRegex.test(formData.email)) {
      errors.email = "Por favor, insira um email válido.";
    }
    if (!formData.password?.trim()) {
      errors.password = "Senha é obrigatória.";
    } else if (!isLogin && formData.password.length < 6) {
      errors.password = "A senha deve ter no mínimo 6 caracteres.";
    }
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError && setError('');
    setSuccess && setSuccess('');
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setValidationErrors(formErrors);
      setMood && setMood('sad');
      return;
    }
    setIsLoading(true);
    setValidationErrors({});

    const submissionData = { ...formData, email: formData.email.toLowerCase() };

    try {
      if (isLogin) {
        const { data } = await loginUser(submissionData);
        // Use o contexto para login e navegação
        login(data.token);
        setMood && setMood('happy');
        setSuccess && setSuccess('Login bem-sucedido! Bem-vindo(a) de volta.');
        setTimeout(() => navigate('/profile'), 1500);
      } else {
        await registerUser(submissionData);
        setMood && setMood('happy');
        setSuccess && setSuccess('Cadastro realizado! Redirecionando para o login...');
        setTimeout(() => onToggle(), 2000);
      }
    } catch (err) {
      setError && setError(err.response?.data?.message || 'Ocorreu um erro. Tente novamente.');
      setMood && setMood('sad');
    } finally {
      setIsLoading(false);
    }
  };

  return { formData, isLoading, validationErrors, handleChange, handleSubmit };
};
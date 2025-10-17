export function validateProfile({ username, email }) {
  if (!username || !username.trim()) {
    return 'O nome de usuário não pode ser vazio.';
  }
  if (!email || !email.trim()) {
    return 'O email não pode ser vazio.';
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return 'Por favor, insira um email válido.';
  }
  return '';
}
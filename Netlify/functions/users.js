import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import authHelper from '../../middleware/authHelper.js';

const prisma = new PrismaClient();

function parseBody(event) {
  try {
    return JSON.parse(event.body || '{}');
  } catch (e) {
    return {};
  }
}

function getRoute(path) {
  const parts = path.split('/').filter(Boolean);
  return parts[2] || 'me';
}

export async function handler(event, context) {  
  const route = getRoute(event.path);
  const method = event.httpMethod;

  try {
    // Registro
    if (route === 'register' && method === 'POST') {
      const { username, email, password } = parseBody(event);
      if (!username || !email || !password) {
        return { statusCode: 400, body: JSON.stringify({ message: "Todos os campos são obrigatórios." }) };
      }
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = await prisma.user.create({
        data: { username, email: email.toLowerCase(), password: hashedPassword },
      });
      const { password: _, ...userWithoutPassword } = newUser;
      return { statusCode: 201, body: JSON.stringify(userWithoutPassword) };
    }

    // Login
    if (route === 'login' && method === 'POST') {
      const { email, password } = parseBody(event);
      if (!email || !password) {
        return { statusCode: 400, body: JSON.stringify({ message: "Email e senha são obrigatórios." }) };
      }
      const user = await prisma.user.findUnique({ where: { email: email.toLowerCase() } });
      if (!user || !(await bcrypt.compare(password, user.password))) {
        return { statusCode: 401, body: JSON.stringify({ message: "Email ou senha inválidos." }) };
      }
      const token = jwt.sign(
      { userId: user.id, username: user.username }, 
      'essa-chave-e-um-teste-final-para-provar-o-cache-do-netlify-987654', // MESMA CHAVE
      { expiresIn: '24h' }
  );
  return { statusCode: 200, body: JSON.stringify({ token }) };
    }

    // Autenticação obrigatória
    let userPayload;
    try {
      userPayload = authHelper(event);
    } catch (authError) {
      return { statusCode: 401, body: JSON.stringify({ message: authError.message }) };
    }
    const userId = userPayload.userId;

    // Buscar dados do usuário
    if (route === 'me' && method === 'GET') {
      const user = await prisma.user.findUnique({
        where: { id: userId },
        select: {
          id: true,
          username: true,
          email: true,
          createdAt: true,
          enable3d: true,
          notifications: true,
          history: { orderBy: { completedAt: 'desc' } },
          favorites: true
        }
      });
      if (!user) return { statusCode: 404, body: JSON.stringify({ message: 'Usuário não encontrado.' }) };
      return { statusCode: 200, body: JSON.stringify(user) };
    }

    // Atualizar usuário
    if (route === 'me' && method === 'PUT') {
      const { username, email, password, oldPassword, enable3d, notifications } = parseBody(event);
      const dataToUpdate = {};
      if (username !== undefined) dataToUpdate.username = username;
      if (email !== undefined) dataToUpdate.email = email.toLowerCase();
      if (enable3d !== undefined) dataToUpdate.enable3d = enable3d;
      if (notifications !== undefined) dataToUpdate.notifications = notifications;

      if (password) {
        if (!oldPassword) return { statusCode: 400, body: JSON.stringify({ message: 'A senha antiga é necessária.' }) };
        const user = await prisma.user.findUnique({ where: { id: userId } });
        const isPasswordCorrect = await bcrypt.compare(oldPassword, user.password);
        if (!isPasswordCorrect) return { statusCode: 401, body: JSON.stringify({ message: 'A senha antiga está incorreta.' }) };
        dataToUpdate.password = await bcrypt.hash(password, 10);
      }
      const updatedUser = await prisma.user.update({ where: { id: userId }, data: dataToUpdate });
      const { password: _, ...userWithoutPassword } = updatedUser;
      return { statusCode: 200, body: JSON.stringify(userWithoutPassword) };
    }

    // Deletar usuário
    if (route === 'me' && method === 'DELETE') {
      await prisma.user.delete({ where: { id: userId } });
      return { statusCode: 200, body: JSON.stringify({ message: 'Conta excluída com sucesso.' }) };
    }

    return { statusCode: 404, body: JSON.stringify({ message: 'Rota não encontrada.' }) };

  } catch (error) {
    let statusCode = 500;
    let message = "Erro interno do servidor.";
    if (error.code === 'P2002') {
      statusCode = 409;
      message = "Email ou nome de usuário já cadastrado.";
    }
    return { statusCode, body: JSON.stringify({ message, error: error.message }) };
  }
};
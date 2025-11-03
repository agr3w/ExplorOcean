const express = require('express');
const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();
const prisma = new PrismaClient();

// Rotas públicas (sem alterações)
router.post('/register', async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({ message: "Todos os campos são obrigatórios." });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await prisma.user.create({
            data: {
                username,
                email: email.toLowerCase(),
                password: hashedPassword,
            },
        });

        const { password: _, ...userWithoutPassword } = newUser;
        res.status(201).json(userWithoutPassword);

    } catch (error) {
        if (error.code === 'P2002') {
            return res.status(409).json({ message: "Email ou nome de usuário já cadastrado." });
        }
        res.status(500).json({ message: "Erro ao criar usuário.", error: error.message });
    }
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: "Email e senha são obrigatórios." });
    }

    try {
        const user = await prisma.user.findUnique({ where: { email: email.toLowerCase() } });
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ message: "Email ou senha inválidos." });
        }

        const token = jwt.sign(
            { userId: user.id, username: user.username },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        );

        res.status(200).json({ token });

    } catch (error) {
        res.status(500).json({ message: "Erro ao fazer login.", error: error.message });
    }
});

// --- NOVAS ROTAS PROTEGIDAS ---

// ROTA PARA BUSCAR DADOS DO USUÁRIO LOGADO
router.get('/me', authMiddleware, async (req, res) => {
    try {
        const user = await prisma.user.findUnique({
            where: { id: req.user.userId },
            select: {
                id: true,
                username: true,
                email: true,
                createdAt: true,
                enable3d: true,
                notifications: true,
                history: {
                    orderBy: { completedAt: 'desc' }
                },
                favorites: true 
            }
        });
        if (!user) return res.status(404).json({ message: 'Usuário não encontrado.' });
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar dados do usuário.' });
    }
});

// ROTA PARA ATUALIZAR AS CONFIGURAÇÕES E PREFERÊNCIAS DO USUÁRIO
router.put('/me', authMiddleware, async (req, res) => {
    // 1. ADICIONE 'oldPassword' À DESESTRUTURAÇÃO
    const { username, email, password, oldPassword, enable3d, notifications } = req.body;

    try {
        const dataToUpdate = {};
        if (username !== undefined) dataToUpdate.username = username;
        if (email !== undefined) dataToUpdate.email = email.toLowerCase();
        if (enable3d !== undefined) dataToUpdate.enable3d = enable3d;
        if (notifications !== undefined) dataToUpdate.notifications = notifications;

        // 2. LÓGICA DE VERIFICAÇÃO DE SENHA
        if (password) {
            if (!oldPassword) {
                return res.status(400).json({ message: 'A senha antiga é necessária para definir uma nova.' });
            }

            const user = await prisma.user.findUnique({ where: { id: req.user.userId } });

            const isPasswordCorrect = await bcrypt.compare(oldPassword, user.password);
            if (!isPasswordCorrect) {
                return res.status(401).json({ message: 'A senha antiga está incorreta.' });
            }

            // Se a senha antiga estiver correta, criptografa a nova
            dataToUpdate.password = await bcrypt.hash(password, 10);
        }

        const updatedUser = await prisma.user.update({
            where: { id: req.user.userId },
            data: dataToUpdate,
        });

        const { password: _, ...userWithoutPassword } = updatedUser;
        res.json(userWithoutPassword);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao atualizar usuário.' });
    }
});

// ROTA PARA DELETAR O USUÁRIO
router.delete('/me', authMiddleware, async (req, res) => {
    try {
        await prisma.user.delete({
            where: { id: req.user.userId },
        });
        res.status(200).json({ message: 'Conta excluída com sucesso.' });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao excluir conta.' });
    }
});

module.exports = router;
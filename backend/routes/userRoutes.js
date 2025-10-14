// backend/routes/userRoutes.js

const express = require('express');
const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const router = express.Router();
const prisma = new PrismaClient();

// Rota: POST /api/users/register
router.post('/register', async (req, res) => {
    const { username, email, password } = req.body;

    // Validação simples
    if (!username || !email || !password) {
        return res.status(400).json({ message: "Todos os campos são obrigatórios." });
    }

    try {
        // Criptografa a senha antes de salvar
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await prisma.user.create({
            data: {
                username,
                email,
                password: hashedPassword,
            },
        });

        // Retorna o usuário criado (sem a senha!)
        const { password: _, ...userWithoutPassword } = newUser;
        res.status(201).json(userWithoutPassword);

    } catch (error) {
        // Verifica se o erro é de campo único (email ou username já existe)
        if (error.code === 'P2002') {
            return res.status(409).json({ message: "Email ou nome de usuário já cadastrado." });
        }
        // Outros erros
        res.status(500).json({ message: "Erro ao criar usuário.", error: error.message });
    }
});

// Rota: POST /api/users/login
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: "Email e senha são obrigatórios." });
    }

    try {
        // Procura o usuário pelo email no banco
        const user = await prisma.user.findUnique({ where: { email } });

        // Se o usuário não for encontrado, ou se a senha não bater...
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ message: "Email ou senha inválidos." });
        }

        // Se deu tudo certo, gera um token de autenticação
        const token = jwt.sign(
            { userId: user.id, username: user.username }, // O que queremos guardar no token
            process.env.JWT_SECRET, // Nossa chave secreta
            { expiresIn: '24h' } // Duração do token
        );

        // Retorna o token para o front-end
        res.status(200).json({ token });

    } catch (error) {
        res.status(500).json({ message: "Erro ao fazer login.", error: error.message });
    }
});

module.exports = router;
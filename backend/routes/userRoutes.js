// backend/routes/userRoutes.js

const express = require('express');
const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

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

module.exports = router;
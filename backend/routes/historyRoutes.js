// backend/routes/historyRoutes.js
const express = require('express');
const { PrismaClient } = require('@prisma/client');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();
const prisma = new PrismaClient();

// Rota: POST /api/history/add
// Adiciona um novo item ao histórico do usuário logado
router.post('/add', authMiddleware, async (req, res) => {
    const { type, name, contentId } = req.body;
    const userId = req.user.userId;

    try {
        const newHistoryItem = await prisma.activityHistory.create({
            data: { type, name, contentId, userId },
        });
        res.status(201).json(newHistoryItem);
    } catch (error) {
        res.status(500).json({ message: "Erro ao adicionar item ao histórico.", error: error.message });
    }
});

module.exports = router;
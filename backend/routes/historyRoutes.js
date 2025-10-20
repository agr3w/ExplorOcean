// backend/routes/historyRoutes.js
const express = require('express');
const { PrismaClient } = require('@prisma/client');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();
const prisma = new PrismaClient();
const HISTORY_LIMIT = 10; // Limite de itens no histórico

// Rota: POST /api/history/add
router.post('/add', authMiddleware, async (req, res) => {
    const { type, name, contentId } = req.body;
    const userId = req.user.userId;

    try {
        // 1. LÓGICA ANTI-DUPLICAÇÃO
        // Verifica se já existe um registro idêntico nos últimos 10 segundos
        const tenSecondsAgo = new Date(Date.now() - 10000);
        const recentHistory = await prisma.activityHistory.findFirst({
            where: {
                userId,
                contentId,
                completedAt: { gte: tenSecondsAgo }, // gte = greater than or equal
            },
        });

        // Se encontrou um registro recente, não faz nada e retorna sucesso
        if (recentHistory) {
            return res.status(200).json({ message: "Atividade já registrada recentemente.", item: recentHistory });
        }

        // 2. LÓGICA DE LIMITE AUTOMÁTICO (usando uma transação)
        const [newHistoryItem] = await prisma.$transaction([
            // Passo A: Cria o novo registro
            prisma.activityHistory.create({
                data: { type, name, contentId, userId },
            }),
            
            // Passo B (opcional): Conta os itens
            prisma.activityHistory.count({ where: { userId } }),
        ]);

        const totalCount = await prisma.activityHistory.count({ where: { userId } });

        if (totalCount > HISTORY_LIMIT) {
            // Se o total exceder o limite, encontra o registro mais antigo
            const oldestItem = await prisma.activityHistory.findFirst({
                where: { userId },
                orderBy: { completedAt: 'asc' }, // 'asc' = ascendente (o mais antigo primeiro)
            });

            if (oldestItem) {
                // E o deleta
                await prisma.activityHistory.delete({
                    where: { id: oldestItem.id },
                });
            }
        }
        
        res.status(201).json(newHistoryItem);

    } catch (error) {
        res.status(500).json({ message: "Erro ao adicionar item ao histórico.", error: error.message });
    }
});

module.exports = router;
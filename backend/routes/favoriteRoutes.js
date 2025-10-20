// backend/routes/favoriteRoutes.js
const express = require('express');
const { PrismaClient } = require('@prisma/client');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();
const prisma = new PrismaClient();

// Rota: POST /api/favorites/add
// Adiciona um item aos favoritos do usuário
router.post('/add', authMiddleware, async (req, res) => {
    const { contentId, contentType } = req.body;
    const userId = req.user.userId;

    try {
        const newFavorite = await prisma.favorite.create({
            data: { contentId, contentType, userId },
        });
        res.status(201).json(newFavorite);
    } catch (error) {
        if (error.code === 'P2002') { // Já é um favorito
            return res.status(409).json({ message: "Este item já está nos seus favoritos." });
        }
        res.status(500).json({ message: "Erro ao favoritar item." });
    }
});

// Rota: DELETE /api/favorites/remove
// Remove um item dos favoritos
router.delete('/remove', authMiddleware, async (req, res) => {
    const { contentId, contentType } = req.body;
    const userId = req.user.userId;

    try {
        await prisma.favorite.deleteMany({
            where: { userId, contentId, contentType },
        });
        res.status(200).json({ message: "Item removido dos favoritos." });
    } catch (error) {
        res.status(500).json({ message: "Erro ao remover favorito." });
    }
});

module.exports = router;
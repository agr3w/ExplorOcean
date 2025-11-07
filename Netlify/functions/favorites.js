import { PrismaClient } from '@prisma/client';
import { authHelper } from '../../middleware/authHelper.js';

const prisma = new PrismaClient();

function parseBody(event) {
    try {
        return JSON.parse(event.body || '{}');
    } catch {
        return {};
    }
}

export async function handler(event, context) {   
    let userPayload;
    try {
        userPayload = authHelper(event);
    } catch (authError) {
        return { statusCode: 401, body: JSON.stringify({ message: authError.message }) };
    }
    const userId = userPayload.userId;
    const { contentId, contentType } = parseBody(event);

    // Adicionar favorito
    if (event.httpMethod === 'POST' && event.path.endsWith('/add')) {
        try {
            const newFavorite = await prisma.favorite.create({
                data: { contentId, contentType, userId },
            });
            return { statusCode: 201, body: JSON.stringify(newFavorite) };
        } catch (error) {
            if (error.code === 'P2002') {
                return { statusCode: 409, body: JSON.stringify({ message: "Este item já está nos seus favoritos." }) };
            }
            return { statusCode: 500, body: JSON.stringify({ message: "Erro ao favoritar item." }) };
        }
    }

    // Remover favorito
    if (event.httpMethod === 'DELETE' && event.path.endsWith('/remove')) {
        try {
            await prisma.favorite.deleteMany({
                where: { userId, contentId, contentType },
            });
            return { statusCode: 200, body: JSON.stringify({ message: "Item removido dos favoritos." }) };
        } catch (error) {
            return { statusCode: 500, body: JSON.stringify({ message: "Erro ao remover favorito." }) };
        }
    }

    return { statusCode: 404, body: JSON.stringify({ message: 'Rota não encontrada.' }) };
};
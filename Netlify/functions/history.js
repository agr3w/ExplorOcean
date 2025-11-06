import { PrismaClient } from '@prisma/client';
import authHelper from '../../middleware/authHelper.js';

const prisma = new PrismaClient();
const HISTORY_LIMIT = 10;

function parseBody(event) {
    try {
        return JSON.parse(event.body || '{}');
    } catch {
        return {};
    }
}

export async function handler(event, context) {  
    if (event.httpMethod !== 'POST' || !event.path.endsWith('/add')) {
        return { statusCode: 404, body: JSON.stringify({ message: 'Rota não encontrada.' }) };
    }

    let userPayload;
    try {
        userPayload = authHelper(event);
    } catch (authError) {
        return { statusCode: 401, body: JSON.stringify({ message: authError.message }) };
    }
    const userId = userPayload.userId;
    const { type, name, contentId } = parseBody(event);

    try {
        const tenSecondsAgo = new Date(Date.now() - 10000);
        const recentHistory = await prisma.activityHistory.findFirst({
            where: {
                userId,
                contentId,
                completedAt: { gte: tenSecondsAgo },
            },
        });

        if (recentHistory) {
            return { statusCode: 200, body: JSON.stringify({ message: "Atividade já registrada recentemente.", item: recentHistory }) };
        }

        const [newHistoryItem] = await prisma.$transaction([
            prisma.activityHistory.create({
                data: { type, name, contentId, userId },
            }),
            prisma.activityHistory.count({ where: { userId } }),
        ]);

        const totalCount = await prisma.activityHistory.count({ where: { userId } });

        if (totalCount > HISTORY_LIMIT) {
            const oldestItem = await prisma.activityHistory.findFirst({
                where: { userId },
                orderBy: { completedAt: 'asc' },
            });

            if (oldestItem) {
                await prisma.activityHistory.delete({
                    where: { id: oldestItem.id },
                });
            }
        }

        return { statusCode: 201, body: JSON.stringify(newHistoryItem) };

    } catch (error) {
        return { statusCode: 500, body: JSON.stringify({ message: "Erro ao adicionar item ao histórico.", error: error.message }) };
    }
};
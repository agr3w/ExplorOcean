import jwt from 'jsonwebtoken';

export default function (event) {
    const authHeader = event.headers['authorization'];
    if (!authHeader) {
        throw new Error('Acesso negado. Nenhum token fornecido.');
    }
    try {
        const token = authHeader.split(' ')[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        return decoded;
    } catch (ex) {
        throw new Error('Token inválido.');
    }
}
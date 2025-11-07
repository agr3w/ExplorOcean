import jwt from 'jsonwebtoken';

export default function (event) {
    const authHeader = event.headers['authorization'];
    if (!authHeader) {
        throw new Error('Acesso negado. Nenhum token fornecido.');
    }
    try {
        const token = authHeader.split(' ')[1];
    const decoded = jwt.verify(token, 'essa-chave-e-um-teste-final-para-provar-o-cache-do-netlify-987654');
    return decoded;
    } catch (ex) {
        throw new Error('Token inválido.');
    }
}
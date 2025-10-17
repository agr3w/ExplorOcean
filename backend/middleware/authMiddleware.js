const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
    const authHeader = req.header('Authorization');
    if (!authHeader) {
        return res.status(401).json({ message: 'Acesso negado. Nenhum token fornecido.' });
    }

    try {
        const token = authHeader.split(' ')[1]; // Formato "Bearer TOKEN"
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Adiciona os dados do usuário (ex: userId) à requisição
        next(); // Continua para a próxima etapa (a rota)
    } catch (ex) {
        res.status(400).json({ message: 'Token inválido.' });
    }
};
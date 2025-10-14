// backend/index.js

const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middlewares
app.use(cors()); // Permite requisições de outros endereços
app.use(express.json()); // Permite que o Express entenda JSON no corpo das requisições

// Rota de teste
app.get('/', (req, res) => {
    res.send('API do ExplorOcean está no ar!');
});

// Importa e usa as rotas de usuário
const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes); // Todas as rotas em userRoutes começarão com /api/users


// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
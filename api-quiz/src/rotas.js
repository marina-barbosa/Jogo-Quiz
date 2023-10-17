const express = require('express');
const knex = require('./database.js');

const rotas = express();


rotas.get('/linha', async (req, res) => {
    try {
        await knex('teste').insert({ linha: 'banco ok' });
        console.log('console.log ok')
        return res.status(200).json({ mensagem: 'return ok' });
    } catch (error) {
        console.log(error)
        return res.status(500).json(error);
    }
});

module.exports = rotas;
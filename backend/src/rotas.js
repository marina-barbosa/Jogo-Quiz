const express = require('express');

const rotas = express();

const criarJogador = require('./controladores/jogador/postJogador.js');
const getJogador = require('./controladores/jogador/getJogador.js');
const atualizarJogador = require('./controladores/jogador/putJogador.js');
const deletarJogador = require('./controladores/jogador/deleteJogador.js');

const criarSala = require('./controladores/sala/postSala.js');
const getSala = require('./controladores/sala/getSala.js');
const deletarSala = require('./controladores/sala/deleteSala.js');

const criarRank = require('./controladores/rank/postRank.js');
const getRank = require('./controladores/rank/getRank.js');


//rota teste
rotas.get('/teste', async (req, res) => {
    try {
        return res.status(200).json({ mensagem: 'return ok' });
    } catch (error) {
        console.log(error)
        return res.status(500).json(error);
    }
});

rotas.post('/jogador', criarJogador);
rotas.get('/jogador', getJogador);
rotas.put('/jogador', atualizarJogador);
rotas.delete('/jogador', deletarJogador);

rotas.post('/sala', criarSala);
rotas.get('/sala', getSala);
rotas.delete('/sala', deletarSala);

rotas.post('/rank', criarRank);
rotas.get('/rank', getRank);




module.exports = rotas;

const knex = require('../../database');


const criarRank = async (req, res) => {
    const { quiz, jogador_id, pontos } = req.body;

    try {        

        const novoDado = {
            quiz,
            jogador_id,
            pontos
        }

        await knex('rank_geral').insert(novoDado);

        return res.status(201).json({ mensagem: 'Novo dado criado no rank' });
    } catch (error) {
        return res.status(error.statusCode || 500).json({ mensagem: error.message });
    }
};

module.exports = criarRank;
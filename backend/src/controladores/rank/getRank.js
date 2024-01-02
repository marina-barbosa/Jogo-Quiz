const knex = require('../../database');


const getRank = async (req, res) => {
    const { quiz, jogador_id, pontos } = req.body;

    try {
        const rankEncontrado = await knex('rank').where({ quiz, jogador_id, pontos }).first();

        return res.status(200).json(rankEncontrado);
    } catch (error) {
        return res.status(error.statusCode || 500).json({ mensagem: error.message });
    }
};

module.exports = getRank;
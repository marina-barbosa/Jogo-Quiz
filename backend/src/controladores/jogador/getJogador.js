
const knex = require('../../database');


const getJogador = async (req, res) => {
    const { id, nome } = req.body;

    try {
        const jogadorEncontrado = await knex('jogador').where({ id, nome }).first();

        return res.status(200).json(jogadorEncontrado);
    } catch (error) {
        return res.status(error.statusCode || 500).json({ mensagem: error.message });
    }
};

module.exports = getJogador;

const knex = require('../../database');


const deletarJogador = async (req, res) => {
    const { id, nome } = req.body;

    try {

        await knex('jogador').where({ id, nome }).delete();

        return res.status(200).json({ mensagem: 'Jogador deletado.' });
    } catch (error) {
        return res.status(error.statusCode || 500).json({ mensagem: error.message });
    }
};

module.exports = deletarJogador;

const knex = require('../../database');


const deletarSala = async (req, res) => {
    const { id, nome } = req.body;

    try {

        await knex('salas').where({ id, nome }).delete();

        return res.status(200).json({ mensagem: 'Sala deletada.' });
    } catch (error) {
        return res.status(error.statusCode || 500).json({ mensagem: error.message });
    }
};

module.exports = deletarSala;
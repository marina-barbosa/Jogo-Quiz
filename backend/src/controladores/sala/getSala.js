
const knex = require('../../database');


const getSala = async (req, res) => {
    const { id, nome } = req.body;

    try {
        const salaEncontrada = await knex('salas').where({ id, nome }).first();

        return res.status(200).json(salaEncontrada);
    } catch (error) {
        return res.status(error.statusCode || 500).json({ mensagem: error.message });
    }
};

module.exports = getSala;
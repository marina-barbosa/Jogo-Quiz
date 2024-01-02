
const knex = require('../../database');


const criarSala = async (req, res) => {
    const { nome, password, quiz, numero_de_jogadores } = req.body;

    try {

        const novaSala = {
            nome,
            password,
            quiz,
            numero_de_jogadores
        }

        await knex('salas').insert(novaSala);

        return res.status(201).json({ mensagem: 'Sala criada' });
    } catch (error) {
        return res.status(error.statusCode || 500).json({ mensagem: error.message });
    }
};

module.exports = criarSala;
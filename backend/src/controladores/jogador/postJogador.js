
const knex = require('../../database');


const criarJogador = async (req, res) => {
    const { nome, avatar, sala_id, espera, jogando, final, pontos } = req.body;

    try {        

        const novoJogador = {
            nome,
            avatar,
            sala_id,
            espera,
            jogando,
            final,
            pontos
        }

        await knex('jogador').insert(novoJogador);

        return res.status(201).json({ mensagem: 'Jogador criado' });
    } catch (error) {
        return res.status(error.statusCode || 500).json({ mensagem: error.message });
    }
};

module.exports = criarJogador;
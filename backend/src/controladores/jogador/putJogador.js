const knex = require('../../database');

const atualizarJogador = async (req, res) => {
    const { id, nome, avatar, sala_id, espera, jogando, final, pontos } = req.body;

    try {

        await knex('jogador')
            .where({ id, nome })
            .update({
                nome,
                avatar,
                sala_id,
                espera,
                jogando,
                final,
                pontos
            });

        return res.status(200).json({ mensagem: "Jogador atualizado." });

    } catch (error) {
        console.log(error);
        return res.status(error.statusCode || 500).json({ mensagem: error.message })
    };
};

module.exports = atualizarJogador;
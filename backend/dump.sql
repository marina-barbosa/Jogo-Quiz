-- Criando a tabela salas
CREATE TABLE salas (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100),
    password VARCHAR(50),
    quiz VARCHAR(50),
    numero_de_jogadores INTEGER
);

-- Criando a tabela jogador
CREATE TABLE jogador (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100),
    avatar VARCHAR(100),
    sala_id INTEGER REFERENCES salas(id),
    espera BOOLEAN,
    jogando BOOLEAN,
    final BOOLEAN,
    pontos INTEGER
);

-- Criando a tabela rank_geral
CREATE TABLE rank_geral (
    id SERIAL PRIMARY KEY,
    quiz VARCHAR(50),
    jogador_id INTEGER REFERENCES jogador(id),
    pontos INTEGER
);
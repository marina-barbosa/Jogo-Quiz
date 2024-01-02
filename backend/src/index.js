require('dotenv').config();

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rotas = require('./rotas');

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(rotas);


app.listen(process.env.PORT, () => {
    console.log(`Servidor online na porta ${process.env.PORT}`);
})
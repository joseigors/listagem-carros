const express = require('express');
const { exibirCarros, exibirCarrosId } = require('./controller/carros')
const { validaSenha } = require('./intermediador')
const app = express();

app.use(validaSenha);
app.get('/carros', exibirCarros);
app.get('/carros/:id', exibirCarrosId);

app.listen(3000);
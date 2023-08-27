const carros = require('../db');

const exibirCarros = (req, res) => {
    const { marca, cor } = req.query;
    let listaCarros = carros;

    if (marca) {
        listaCarros = listaCarros.filter((carro) => {
            return carro.marca === marca;
        });
    }

    if (cor) {
        listaCarros = listaCarros.filter((carro) => {
            return carro.cor === cor;
        });
    }
    res.send(listaCarros);
};

const exibirCarrosId = (req, res) => {
    const carroEncontrado = carros.find((carro) => {
        return carro.id === Number(req.params.id);
    });

    res.send(carroEncontrado);
};

module.exports = { exibirCarros, exibirCarrosId };
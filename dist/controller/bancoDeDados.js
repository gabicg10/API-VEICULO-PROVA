"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inicializarVeiculo = exports.listarVeiculos = exports.persistirVeiculo = void 0;
const VeiculoLeve_1 = require("../model/VeiculoLeve");
const VeiculoPesado_1 = require("../model/VeiculoPesado");
/**
 * Lista de veiculos que são armazenadas durante a execução do programa
 */
let bancoDadosVeiculo = [];
/**
 *
 * @param Veiculo - veiculo a ser inserida na lista
 * @returns Em caso de erro, é retornado os detalhes do erro a quem chamou esta função
 */
function persistirVeiculo(veiculo) {
    //persistindo os dados
    try {
        bancoDadosVeiculo.push(veiculo);
    }
    catch (_a) {
        return `Erro ao persistir os dados\n ${Error}`;
    }
}
exports.persistirVeiculo = persistirVeiculo;
/**
 * Lista todos veiculos cadastrados
 * @returns Lista de veiculos cadastrados
 */
function listarVeiculos() {
    return bancoDadosVeiculo;
}
exports.listarVeiculos = listarVeiculos;
function inicializarVeiculo() {
    bancoDadosVeiculo.push(new VeiculoLeve_1.VeiculoLeve(10, 4, 'amarelo', 'honda', 'GSB7593', 2017, 'carro', 300));
    bancoDadosVeiculo.push(new VeiculoLeve_1.VeiculoLeve(15, 2, 'vermelho', 'yamaha', 'BHN6390', 2006, 'moto', 70));
    bancoDadosVeiculo.push(new VeiculoLeve_1.VeiculoLeve(8, 4, 'branco', 'ford', 'KMJ7503', 2022, 'caminhonete', 250));
    bancoDadosVeiculo.push(new VeiculoPesado_1.VeiculoPesado(13, 4, 'cinza', 'ford', 'GST7589', 2018, 'caminhao', 5));
    bancoDadosVeiculo.push(new VeiculoPesado_1.VeiculoPesado(10, 4, 'amarelo', 'mercedez', 'BSH03827', 2019, 'onibus', 1));
}
exports.inicializarVeiculo = inicializarVeiculo;
//# sourceMappingURL=bancoDeDados.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inicializarVeiculo = exports.listarVeiculos = exports.persistirVeiculo = void 0;
const Veiculo_1 = require("../model/Veiculo");
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
    bancoDadosVeiculo.push(new Veiculo_1.Veiculo(10, 4, 'preto', 'ford', 'GST7589', 'Ka', 2016, 'carro'));
    bancoDadosVeiculo.push(new Veiculo_1.Veiculo(15, 2, 'vermelho', 'yamaha', 'BHN6390', 'Biz', 2006, 'moto'));
    bancoDadosVeiculo.push(new Veiculo_1.Veiculo(8, 4, 'branco', 'ford', 'KMJ7503', 'hillux', 2022, 'caminhonete'));
    bancoDadosVeiculo.push(new Veiculo_1.Veiculo(13, 4, 'cinza', 'ford', 'GST7589', 'Ka', 2013, 'caminhao'));
    bancoDadosVeiculo.push(new Veiculo_1.Veiculo(10, 4, 'amarelo', 'mercedez', 'BSH03827', 'benz', 2019, 'onibus'));
}
exports.inicializarVeiculo = inicializarVeiculo;
//# sourceMappingURL=bancoDeDados.js.map
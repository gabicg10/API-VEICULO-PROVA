import { Veiculo } from "../model/Veiculo";
import { VeiculoLeve } from "../model/VeiculoLeve";
import { VeiculoPesado } from "../model/VeiculoPesado";

/**
 * Lista de veiculos que são armazenadas durante a execução do programa
 */
let bancoDadosVeiculo: Veiculo[] = [];

/** 
 * 
 * @param Veiculo - veiculo a ser inserida na lista
 * @returns Em caso de erro, é retornado os detalhes do erro a quem chamou esta função
 */
export function persistirVeiculo(veiculo: Veiculo) {
    //persistindo os dados
    try {
        bancoDadosVeiculo.push(veiculo);
    } catch {
        return `Erro ao persistir os dados\n ${Error}`;
    }
}

/**
 * Lista todos veiculos cadastrados
 * @returns Lista de veiculos cadastrados
 */
export function listarVeiculos() {
    return bancoDadosVeiculo;
}

export function inicializarVeiculo() {
    bancoDadosVeiculo.push(
        new VeiculoLeve(10, 4, 'amarelo', 'honda', 'GSB7593', 2017, 'carro', 300));

    bancoDadosVeiculo.push(
        new VeiculoLeve(15, 2, 'vermelho', 'yamaha', 'BHN6390', 2006, 'moto', 70));

    bancoDadosVeiculo.push(
        new VeiculoLeve(8, 4, 'branco', 'ford', 'KMJ7503', 2022, 'caminhonete', 250));

    bancoDadosVeiculo.push(
        new VeiculoPesado(13, 4, 'cinza', 'ford', 'GST7589', 2018, 'caminhao', 5));

    bancoDadosVeiculo.push(
        new VeiculoPesado(10, 4, 'amarelo', 'mercedez', 'BSH03827', 2019, 'onibus', 1));
}
import { Veiculo } from "../model/Veiculo";

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
        new Veiculo(10, 4, 'preto', 'ford', 'GST7589', 2016));

    bancoDadosVeiculo.push(
        new Veiculo(15, 2, 'vermelho', 'yamaha', 'BHN6390', 2006));

    bancoDadosVeiculo.push(
        new Veiculo(8, 4, 'branco', 'ford', 'KMJ7503', 2022));

    bancoDadosVeiculo.push(
        new Veiculo(13, 4, 'cinza', 'ford', 'GST7589', 2013));

    bancoDadosVeiculo.push(
        new Veiculo(10, 4, 'amarelo', 'mercedez', 'BSH03827', 2019));
}
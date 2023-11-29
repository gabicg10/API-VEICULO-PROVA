"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Veiculo = void 0;
class Veiculo {
    //método construtor
    constructor(_combustivel, _rodas, _cor, _marca, _placa, _modelo, _ano, _tipo) {
        this.combustivel = _combustivel;
        this.rodas = _rodas;
        this.cor = _cor;
        this.marca = _marca;
        this.placa = _placa;
        this.modelo = _modelo;
        this.ano = _ano;
        this.tipo = _tipo;
    }
    setCombustivel(_combustivel) {
        this.combustivel = _combustivel;
    }
    getCombustivel() {
        return this.combustivel;
    }
    setRodas(_rodas) {
        this.rodas = _rodas;
    }
    getRodas() {
        return this.rodas;
    }
    setCor(_cor) {
        this.cor = _cor;
    }
    getCor() {
        return this.cor;
    }
    setMarca(_marca) {
        this.marca = _marca;
    }
    getMarca() {
        return this.marca;
    }
    setPlaca(_placa) {
        this.placa = _placa;
    }
    getPlaca() {
        return this.placa;
    }
    setModelo(_modelo) {
        this.modelo = _modelo;
    }
    getModelo() {
        return this.modelo;
    }
    setAno(_ano) {
        this.ano = _ano;
    }
    getAno() {
        return this.ano;
    }
    setTipo(_tipo) {
        this.tipo = _tipo;
    }
    getTipo() {
        return this.tipo;
    }
    mostrarVeiculo() {
        console.log(`Combustivel: ${this.combustivel}
        Rodas: ${this.rodas}
        Cor: ${this.cor}
        Marca: ${this.marca}
        Placa: ${this.placa}
        Modelo: ${this.modelo}
        Ano: ${this.ano}
        Tipo: ${this.tipo}`);
    }
}
exports.Veiculo = Veiculo;
//# sourceMappingURL=Veiculo.js.map
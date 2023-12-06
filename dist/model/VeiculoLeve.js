"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VeiculoLeve = void 0;
const Veiculo_1 = require("./Veiculo");
class VeiculoLeve extends Veiculo_1.Veiculo {
    constructor(_combustivel, _rodas, _cor, _marca, _placa, _ano, _tipo, _peso) {
        super(_combustivel, _rodas, _cor, _marca, _placa, _ano, _tipo);
        this.peso = _peso;
    }
    setPeso(_tipo) {
        this.peso = _tipo;
    }
    getPeso() {
        return this.peso;
    }
}
exports.VeiculoLeve = VeiculoLeve;
//# sourceMappingURL=VeiculoLeve.js.map
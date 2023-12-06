"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VeiculoPesado = void 0;
const Veiculo_1 = require("./Veiculo");
class VeiculoPesado extends Veiculo_1.Veiculo {
    constructor(_combustivel, _rodas, _cor, _marca, _placa, _ano, _tipo, _cargaMaxima) {
        super(_combustivel, _rodas, _cor, _marca, _placa, _ano, _tipo);
        this.cargaMaxima = _cargaMaxima;
    }
    setCargaMaxima(_cargaMaxima) {
        this.cargaMaxima = _cargaMaxima;
    }
    getCargaMaxima() {
        return this.cargaMaxima;
    }
}
exports.VeiculoPesado = VeiculoPesado;
//# sourceMappingURL=VeiculoPesado.js.map
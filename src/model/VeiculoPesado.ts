import { Veiculo } from "./Veiculo";

export class VeiculoPesado extends Veiculo {
    private cargaMaxima: number;

    public constructor(_combustivel: number, _rodas: number, _cor: string, _marca: string, _placa: string, _ano: number, _tipo: string, _cargaMaxima: number) {
        super(_combustivel, _rodas, _cor, _marca, _placa, _ano, _tipo);
        this.cargaMaxima = _cargaMaxima;
    }

    public setCargaMaxima(_cargaMaxima: number) {
        this.cargaMaxima = _cargaMaxima;
    }
    public getCargaMaxima() {
        return this.cargaMaxima;
    }
}
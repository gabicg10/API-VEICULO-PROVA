import { Veiculo } from "./Veiculo";

export class VeiculoLeve extends Veiculo {
    private peso: number;

    public constructor(_combustivel: number, _rodas: number, _cor: string, _marca: string, _placa: string, _ano: number, _tipo: string, _peso: number) {
        super(_combustivel, _rodas, _cor, _marca, _placa, _ano, _tipo);
        this.peso = _peso;
    }

    public setPeso(_tipo: number) {
        this.peso = _tipo;
    }
    public getPeso() {
        return this.peso;
    }
}



export class Veiculo {

    // atributos da classe
    private combustivel: number;
    private rodas: number;
    private cor: string;
    private marca: string;
    private placa: string;
    private modelo: string;
    private ano: number;
    private tipo: string;

    //método construtor
    public constructor (_combustivel: number, _rodas: number, _cor:string, _marca: string, _placa: string, _modelo: string, _ano: number, _tipo:string) {
            this.combustivel = _combustivel;
            this.rodas = _rodas;
            this.cor = _cor;
            this.marca = _marca;
            this.placa = _placa;
            this.modelo = _modelo;
            this.ano = _ano;
            this.tipo = _tipo;
    }

    public setCombustivel(_combustivel:number){
        this.combustivel = _combustivel;
    }
    public getCombustivel(){
        return this.combustivel;
    }

    public setRodas(_rodas: number) {
        this.rodas = _rodas;
    }
    public getRodas() {
        return this.rodas;
    }

    public setCor(_cor:string){
        this.cor = _cor;
    }
    public getCor() {
        return this.cor;
    }

    public setMarca(_marca: string) {
        this.marca = _marca;
    }
    public getMarca() {
        return this.marca;
    }

    public setPlaca(_placa: string) {
        this.placa = _placa;
    }
    public getPlaca() {
        return this.placa;
    }

    public setModelo(_modelo: string) {
        this.modelo = _modelo;
    }
    public getModelo() {
        return this.modelo;
    }

    public setAno(_ano: number) {
        this.ano = _ano;
    }
    public getAno() {
        return this.ano;
    }

    public setTipo(_tipo:string) {
        this.tipo = _tipo;
    }
    public getTipo() {
        return this.tipo;
    }

    public mostrarVeiculo() {
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
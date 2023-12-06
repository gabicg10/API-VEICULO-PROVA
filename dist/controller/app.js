"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const Veiculo_1 = require("../model/Veiculo");
const bancoDeDados_1 = require("./bancoDeDados");
// Inicializa o módulo de veículos
(0, bancoDeDados_1.inicializarVeiculo)();
// Cria o servidor Express
const app = (0, express_1.default)();
// Define a porta que o servidor vai escutar as requisições
const port = 5000;
// Habilitando o uso de JSON no servidor Express
app.use(express_1.default.json());
// Habilitando o uso do CORS para garantir a segurança das requisições
app.use((0, cors_1.default)());
// Primeira rota, a rota PRINCIPAL do servidor
app.get("/", (req, res) => {
    console.log("Recebi sua requisição");
    res.send({ mensagem: "Estou devolvendo a resposta para sua requisição" });
});
// Rota para consultar veículos
app.get("/veiculo", (req, res) => {
    console.log('entrei na rota');
    const listaDeVeiculos = (0, bancoDeDados_1.listarVeiculos)();
    console.log("Retornando a lista de veículos cadastrados");
    res.json(listaDeVeiculos);
});
// Rota para cadastrar veículo
app.post("/cadastro", (req, res) => {
    try {
        // Recuperando as informações JSON que vieram no corpo (body) da requisição (req) e desestruturando essa informação para cada atributo
        const { combustivel, rodas, cor, marca, placa, ano, peso, cargaMaxima } = req.body;
        // Criando um novo objeto do tipo Veiculo com as informações recuperadas da requisição
        const veiculo = new Veiculo_1.Veiculo(combustivel, rodas, cor, marca, placa, ano, peso);
        // Apenas imprimindo as informações do objeto no console do servidor
        console.log(veiculo);
        // Chamando a função para persistir (salvar) os dados do veículo no banco de dados
        (0, bancoDeDados_1.persistirVeiculo)(veiculo);
        // Resposta que o servidor irá enviar ao front-end (A resposta será estrutura em um JSON)
        res.json({ mensagem: "Veículo cadastrado com sucesso" });
    }
    catch (error) {
        console.error("Erro ao cadastrar veículo:");
        res.status(500).json({ error: "Erro interno ao processar a requisição" });
    }
});
// Servidor sendo executado
app.listen(port, () => {
    console.log(`Servidor Express ouvindo no endereço http://localhost:${port}/`);
});
//# sourceMappingURL=app.js.map
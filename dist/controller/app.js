"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const Veiculo_1 = require("../model/Veiculo");
const bancoDeDados_1 = require("./bancoDeDados");
(0, bancoDeDados_1.inicializarVeiculo)();
// Cria o servidor express
const app = (0, express_1.default)();
// Define a porta que o servidor vai escutar as requisições
const port = 5000;
// Habilitando o uso de JSON no servidor express
app.use(express_1.default.json());
// Habilitando o uso do CORS para garantir a segurança das requisições
app.use((0, cors_1.default)());
// Primeira rota, a rota PRINCIPAL do servidor
app.get('/', (req, res) => {
    console.log('Recebi sua requisição');
    res.send({ mensagem: "Estou devolvendo a resposta para sua requisição" });
});
// Rota para consultar veiculos
app.get('/veiculos', (req, res) => {
    const listaDeVeiculos = (0, bancoDeDados_1.listarVeiculos)();
    console.log(`Retornando a lista de veiculos cadastrados`);
    res.json(listaDeVeiculos);
});
// Servidor sendo executado
app.listen(port, () => {
    console.log(`Servidor express ouvindo no endereço http://localhost:${port}/`);
});
// Rota para cadastraar veiculo
app.post('/cadastro', (req, res) => {
    // Recuperando as informações JSON que vieram no corpo (body) da requisição (req) e desestruturando essa informação para cada atributo
    const { combustivel, rodas, cor, marca, placa, modelo, ano, tipo } = req.body;
    // Criando um novo objeto do tipo Veiculo com as informações recuperadas da requisição
    const veiculo = new Veiculo_1.Veiculo(combustivel, rodas, cor, marca, placa, modelo, ano, tipo);
    // Apenas imprimindo as informações do objeto no console do servidor
    console.log(veiculo);
    // Chamando a função para persistir (salvar) os dados do veiculo no banco de dados
    (0, bancoDeDados_1.persistirVeiculo)(veiculo);
    // Resposta que o servidor irá enviar ao front-end (A resposta será estrutura em um JSON)
    res.json({ mensagem: "Veiculo cadastrado com sucesso" });
});
//# sourceMappingURL=app.js.map
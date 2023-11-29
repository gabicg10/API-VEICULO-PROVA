import express from "express";
import cors from 'cors';
import { Veiculo } from "../model/Veiculo";
import { inicializarVeiculo, listarVeiculos, persistirVeiculo } from "./bancoDeDados";


inicializarVeiculo();

// Cria o servidor express
const app = express();
// Define a porta que o servidor vai escutar as requisições
const port: number = 5000;

// Habilitando o uso de JSON no servidor express
app.use(express.json());

// Habilitando o uso do CORS para garantir a segurança das requisições
app.use(cors());

// Primeira rota, a rota PRINCIPAL do servidor
app.get('/', (req, res) => {
    console.log('Recebi sua requisição');

    res.send({ mensagem: "Estou devolvendo a resposta para sua requisição" });
});

// Rota para consultar veiculos
app.get('/veiculos', (req, res) => {
    const listaDeVeiculos = listarVeiculos();

    console.log(`Retornando a lista de veiculos cadastrados`);

    res.json(listaDeVeiculos);
});

// Servidor sendo executado
app.listen(port, () => {
    console.log(`Servidor express ouvindo no endereço http://localhost:${port}/`);
});
// Rota para cadastraar veiculo
app.post('/', (req, res) => {
    // Recuperando as informações JSON que vieram no corpo (body) da requisição (req) e desestruturando essa informação para cada atributo
    const {combustivel,rodas,cor,marca,placa,ano,tipo } = req.body;

    // Criando um novo objeto do tipo Veiculo com as informações recuperadas da requisição
    const veiculo = new Veiculo(combustivel,rodas,cor,marca,placa,ano,tipo );

    // Apenas imprimindo as informações do objeto no console do servidor
    console.log(veiculo);

    // Chamando a função para persistir (salvar) os dados do veiculo no banco de dados
    persistirVeiculo(veiculo);

    // Resposta que o servidor irá enviar ao front-end (A resposta será estrutura em um JSON)
    res.json({ mensagem: "Veiculo cadastrado com sucesso" })
})
import express, { Request, Response } from "express";
import cors from "cors";
import { Veiculo } from "../model/Veiculo";
import { inicializarVeiculo, listarVeiculos, persistirVeiculo } from "./bancoDeDados";

// Inicializa o módulo de veículos
inicializarVeiculo();

// Cria o servidor Express
const app = express();
// Define a porta que o servidor vai escutar as requisições
const port: number = 5000;

// Habilitando o uso de JSON no servidor Express
app.use(express.json());

// Habilitando o uso do CORS para garantir a segurança das requisições
app.use(cors());

// Primeira rota, a rota PRINCIPAL do servidor
app.get("/", (req, res) => {
    console.log("Recebi sua requisição");
    res.send({ mensagem: "Estou devolvendo a resposta para sua requisição" });
});

// Rota para consultar veículos
app.get("/veiculo", (req, res) => {
    const listaDeVeiculos = listarVeiculos();
    console.log("Retornando a lista de veículos cadastrados");
    res.json(listaDeVeiculos);
});

// Rota para cadastrar veículo
app.post("/cadastro", (req: Request, res: Response) => {
    try {
        // Recuperando as informações JSON que vieram no corpo (body) da requisição (req) e desestruturando essa informação para cada atributo
        const { combustivel, rodas, cor, marca, placa, ano, peso, cargaMaxima } = req.body;

        // Criando um novo objeto do tipo Veiculo com as informações recuperadas da requisição
        const veiculo = new Veiculo(combustivel, rodas, cor, marca, placa, ano, peso);

        // Apenas imprimindo as informações do objeto no console do servidor
        console.log(veiculo);

        // Chamando a função para persistir (salvar) os dados do veículo no banco de dados
        persistirVeiculo(veiculo);

        // Resposta que o servidor irá enviar ao front-end (A resposta será estrutura em um JSON)
        res.json({ mensagem: "Veículo cadastrado com sucesso" });
    } catch (error) {
        console.error("Erro ao cadastrar veículo:");
        res.status(500).json({ error: "Erro interno ao processar a requisição" });
    }
});

// Servidor sendo executado
app.listen(port, () => {
    console.log(`Servidor Express ouvindo no endereço http://localhost:${port}/`);
});

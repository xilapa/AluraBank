import { NegociacaoController } from './controllers/NegociacaoController';

const negociacaoController = new NegociacaoController();
document.querySelector('form').addEventListener('submit', negociacaoController.adiciona.bind(negociacaoController))

document.querySelector('#botao-importar').addEventListener('click', negociacaoController.importa.bind(negociacaoController));



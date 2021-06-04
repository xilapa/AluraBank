import { NegociacaoController } from './controllers/NegociacaoController';

const negociacaoController = new NegociacaoController();
document.querySelector('form').addEventListener('submit', negociacaoController.adiciona.bind(negociacaoController))

document.querySelector('#botao-importar').addEventListener('click', negociacaoController.importa.bind(negociacaoController));



// interface ehIgual em negociacao com tipo generico
// usar interface ehIgual na controller para evitar importa negociacao igual com filter e some
// estender estas duas interfaces em uma outra = uma interface herda outras (tipo classe) e a classe implements ...interfaces
// mudar texto de interfaces para anotações TS
// logar erro no serviço e lançar nova execeção com uma mensagem para o user
// mudar para async/await







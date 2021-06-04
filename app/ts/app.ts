import { NegociacaoController } from './controllers/NegociacaoController';

const negociacaoController = new NegociacaoController();
document.querySelector('form').addEventListener('submit', negociacaoController.adiciona.bind(negociacaoController))

document.querySelector('#botao-importar').addEventListener('click', negociacaoController.importa.bind(negociacaoController));


// video 5, decorator debounce com evento global para previnir default
// video 6
// video 7, isolar fetch em serviço com handler/callback da resposta
// video 8, interface de método sem nome
import { injectDOM } from '../helpers/decorators/index';
import { Negociacoes, Negociacao, INegociacaoParcial } from '../models/index'
import { NegociacoesView, MensagemView } from '../views/index'

export class NegociacaoController {

    @injectDOM('#data')
    private _elementoInputData: HTMLInputElement;

    @injectDOM('#quantidade')
    private _elementoInputQuantidade: HTMLInputElement;

    @injectDOM('#valor')
    private _elementoInputValor: HTMLInputElement;
    private _negociacoes: Negociacoes = new Negociacoes();
    private _negociacoesView: NegociacoesView = new NegociacoesView('#negociacoesView');
    private _mensagemView: MensagemView = new MensagemView('#mensagemView');

    constructor() {

        this._negociacoesView.update(this._negociacoes);
    }

    adiciona(event: Event) {
        event.preventDefault();
        const negociacao = new Negociacao(
            new Date(this._elementoInputData.value.replace(/-/g,',')),
            parseInt(this._elementoInputQuantidade.value),
            parseFloat(this._elementoInputValor.value)
        );

        this._negociacoes.adiciona(negociacao);
        this._negociacoesView.update(this._negociacoes);
        this._mensagemView.update("Negociação adicionada com sucesso!");
        setTimeout(()=> this._mensagemView.clear(),5000)
    }

    importa() {

        function isOkay(res : Response) {
            if (res.ok)
                return res
            else
                throw new Error(res.statusText)
        }

        fetch('http://localhost:8080/dados')
            .then(res => isOkay(res))
            .then(res => res.json())
            .then((dados : INegociacaoParcial[]) => {
                dados
                    .map(dado => new Negociacao(new Date(), dado.vezes, dado.montante))
                    .forEach(negociacao => this._negociacoes.adiciona(negociacao))
                
                this._negociacoesView.update(this._negociacoes);

            })
            .catch( (err : Error) => console.log(err.message))
    }
}
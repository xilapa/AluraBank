import { injectDOM } from '../helpers/decorators/index';
import { Negociacoes, Negociacao } from '../models/index'
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
}
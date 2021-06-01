import { Negociacoes, Negociacao } from '../models/index'
import { NegociacoesView, MensagemView } from '../views/index'

export class NegociacaoController {

    private _elementoInputData: HTMLInputElement;
    private _elementoInputQuantidade: HTMLInputElement;
    private _elementoInputValor: HTMLInputElement;
    private _negociacoes: Negociacoes = new Negociacoes();
    private _negociacoesView: NegociacoesView = new NegociacoesView('#negociacoesView');
    private _mensagemView: MensagemView = new MensagemView('#mensagemView');

    constructor() {
        this._elementoInputData = document.querySelector('#data');
        this._elementoInputQuantidade = document.querySelector('#quantidade');
        this._elementoInputValor = document.querySelector('#valor');
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
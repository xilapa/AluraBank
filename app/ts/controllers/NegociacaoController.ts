import { debounce, injectDOM } from '../helpers/decorators/index';
import { Negociacoes, Negociacao, INegociacaoParcial } from '../models/index'
import { NegociacaoService } from '../service/index';
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
    private _negociacoesService: NegociacaoService = new NegociacaoService();

    constructor() {

        this._negociacoesView.update(this._negociacoes);
    }

    @debounce()
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

    @debounce()
    importa() {

        function isOkay(res: Response) {
            if (res.ok)
                return res
            else
                throw new Error(res.statusText)
        }

        this._negociacoesService.getNegociacoes(isOkay)
            .then(negociacaoArray => {
                negociacaoArray.forEach(negociacao => this._negociacoes.adiciona(negociacao))
                this._negociacoesView.update(this._negociacoes)
            })
                
    }
}
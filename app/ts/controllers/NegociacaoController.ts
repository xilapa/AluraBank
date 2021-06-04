import { debounce, injectDOM } from '../helpers/decorators/index';
import { imprime } from '../helpers/index';
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
            new Date(this._elementoInputData.value.replace(/-/g, ',')),
            parseInt(this._elementoInputQuantidade.value),
            parseFloat(this._elementoInputValor.value)
        );

        this._negociacoes.adiciona(negociacao);

        imprime(negociacao, this._negociacoes)

        this._negociacoesView.update(this._negociacoes);
        this._mensagemView.update("Negociação adicionada com sucesso!");
        setTimeout(() => this._mensagemView.clear(), 5000)
    }

    @debounce()
    async importa() {

        function isOkay(res: Response) {
            if (res.ok)
                return res
            else
                throw new Error(res.statusText)
        }

        try {
            const negociacoesParaImportar = await this._negociacoesService.getNegociacoes(isOkay)

            negociacoesParaImportar.filter(novaNegociacao =>
                !this._negociacoes.paraArray().some(negociacaoJaAdicionada => negociacaoJaAdicionada.ehIgual(novaNegociacao)))
                .forEach(negociacaoFiltrada => this._negociacoes.adiciona(negociacaoFiltrada));

            this._negociacoesView.update(this._negociacoes)
        }
        catch (err) {
            this._mensagemView.update(err.message);
            setTimeout(() => this._mensagemView.clear(), 5000)
        }

    }
}
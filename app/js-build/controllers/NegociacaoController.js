class NegociacaoController {
    constructor() {
        this._negociacoes = new Negociacoes();
        this._negociacoesView = new NegociacoesView('#negociacoesView');
        this._elementoInputData = document.querySelector('#data');
        this._elementoInputQuantidade = document.querySelector('#quantidade');
        this._elementoInputValor = document.querySelector('#valor');
        this._negociacoesView.update(this._negociacoes);
    }
    adiciona(event) {
        event.preventDefault();
        const negociacao = new Negociacao(new Date(this._elementoInputData.value.replace(/-/g, ',')), parseInt(this._elementoInputQuantidade.value), parseFloat(this._elementoInputValor.value));
        this._negociacoes.adiciona(negociacao);
        this._negociacoesView.update(this._negociacoes);
    }
}

class NegociacaoController {

    private _elementoInputData: HTMLInputElement;
    private _elementoInputQuantidade: HTMLInputElement;
    private _elementoInputValor: HTMLInputElement;

    constructor() {
        this._elementoInputData = document.querySelector('#data');
        this._elementoInputQuantidade = document.querySelector('#quantidade');
        this._elementoInputValor = document.querySelector('#valor');
    }

    adiciona(event: Event) {
        event.preventDefault();
        const negociacao = new Negociacao(
            new Date(this._elementoInputData.value.replace(/-/g,',')),
            parseInt(this._elementoInputQuantidade.value),
            parseFloat(this._elementoInputValor.value)
        );
        console.log(negociacao);
    }
}
System.register(["../models/index", "../views/index"], function (exports_1, context_1) {
    "use strict";
    var index_1, index_2, NegociacaoController;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            }
        ],
        execute: function () {
            NegociacaoController = class NegociacaoController {
                constructor() {
                    this._negociacoes = new index_1.Negociacoes();
                    this._negociacoesView = new index_2.NegociacoesView('#negociacoesView');
                    this._mensagemView = new index_2.MensagemView('#mensagemView');
                    this._elementoInputData = document.querySelector('#data');
                    this._elementoInputQuantidade = document.querySelector('#quantidade');
                    this._elementoInputValor = document.querySelector('#valor');
                    this._negociacoesView.update(this._negociacoes);
                }
                adiciona(event) {
                    event.preventDefault();
                    const negociacao = new index_1.Negociacao(new Date(this._elementoInputData.value.replace(/-/g, ',')), parseInt(this._elementoInputQuantidade.value), parseFloat(this._elementoInputValor.value));
                    this._negociacoes.adiciona(negociacao);
                    this._negociacoesView.update(this._negociacoes);
                    this._mensagemView.update("Negociação adicionada com sucesso!");
                    setTimeout(() => this._mensagemView.clear(), 5000);
                }
            };
            exports_1("NegociacaoController", NegociacaoController);
        }
    };
});

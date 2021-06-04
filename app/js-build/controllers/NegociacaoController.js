System.register(["../helpers/decorators/index", "../models/index", "../views/index"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var index_1, index_2, index_3, NegociacaoController;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            },
            function (index_3_1) {
                index_3 = index_3_1;
            }
        ],
        execute: function () {
            NegociacaoController = class NegociacaoController {
                constructor() {
                    this._negociacoes = new index_2.Negociacoes();
                    this._negociacoesView = new index_3.NegociacoesView('#negociacoesView');
                    this._mensagemView = new index_3.MensagemView('#mensagemView');
                    this._negociacoesView.update(this._negociacoes);
                }
                adiciona(event) {
                    event.preventDefault();
                    const negociacao = new index_2.Negociacao(new Date(this._elementoInputData.value.replace(/-/g, ',')), parseInt(this._elementoInputQuantidade.value), parseFloat(this._elementoInputValor.value));
                    this._negociacoes.adiciona(negociacao);
                    this._negociacoesView.update(this._negociacoes);
                    this._mensagemView.update("Negociação adicionada com sucesso!");
                    setTimeout(() => this._mensagemView.clear(), 5000);
                }
                importa() {
                    function isOkay(res) {
                        if (res.ok)
                            return res;
                        else
                            throw new Error(res.statusText);
                    }
                    fetch('http://localhost:8080/dados')
                        .then(res => isOkay(res))
                        .then(res => res.json())
                        .then((dados) => {
                        dados
                            .map(dado => new index_2.Negociacao(new Date(), dado.vezes, dado.montante))
                            .forEach(negociacao => this._negociacoes.adiciona(negociacao));
                        this._negociacoesView.update(this._negociacoes);
                    })
                        .catch((err) => console.log(err.message));
                }
            };
            __decorate([
                index_1.injectDOM('#data')
            ], NegociacaoController.prototype, "_elementoInputData", void 0);
            __decorate([
                index_1.injectDOM('#quantidade')
            ], NegociacaoController.prototype, "_elementoInputQuantidade", void 0);
            __decorate([
                index_1.injectDOM('#valor')
            ], NegociacaoController.prototype, "_elementoInputValor", void 0);
            exports_1("NegociacaoController", NegociacaoController);
        }
    };
});

System.register(["./ViewBase"], function (exports_1, context_1) {
    "use strict";
    var ViewBase_1, NegociacoesView;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (ViewBase_1_1) {
                ViewBase_1 = ViewBase_1_1;
            }
        ],
        execute: function () {
            NegociacoesView = class NegociacoesView extends ViewBase_1.ViewBase {
                template(modelo) {
                    return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>

            <tbody>
                ${modelo.paraArray().map(negociacao => {
                        return `<tr>
                                <td>${negociacao.data.getDate()}/${negociacao.data.getMonth() + 1}/${negociacao.data.getFullYear()}</td>
                                <td>${negociacao.quantidade}</td>
                                <td>${negociacao.valor}</td>
                                <td>${negociacao.volume}</td>
                            </tr>`;
                    }).join('')}
                </tbody>

            <tfoot>
            </tfoot>
        </table>               
        `;
                }
            };
            exports_1("NegociacoesView", NegociacoesView);
        }
    };
});

System.register(["./ViewBase"], function (exports_1, context_1) {
    "use strict";
    var ViewBase_1, MensagemView;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (ViewBase_1_1) {
                ViewBase_1 = ViewBase_1_1;
            }
        ],
        execute: function () {
            MensagemView = class MensagemView extends ViewBase_1.ViewBase {
                template(modelo) {
                    return `<div class='alert alert-info'>${modelo}</div>`;
                }
            };
            exports_1("MensagemView", MensagemView);
        }
    };
});

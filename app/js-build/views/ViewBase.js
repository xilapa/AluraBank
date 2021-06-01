System.register([], function (exports_1, context_1) {
    "use strict";
    var ViewBase;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            ViewBase = class ViewBase {
                constructor(seletor) {
                    this._elemento = document.querySelector(seletor);
                }
                update(modelo) {
                    this._elemento.innerHTML = this.template(modelo);
                }
                clear() {
                    this._elemento.innerHTML = '';
                }
            };
            exports_1("ViewBase", ViewBase);
        }
    };
});

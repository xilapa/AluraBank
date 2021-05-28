class ViewBase {
    constructor(seletor) {
        this._elemento = document.querySelector(seletor);
    }
    update(modelo) {
        this._elemento.innerHTML = this.template(modelo);
    }
    clear() {
        this._elemento.innerHTML = '';
    }
    template(modelo) {
        throw new Error("o método template não foi implementado");
    }
}

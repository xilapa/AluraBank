class ViewBase<T> {
    
    private _elemento: Element;

    constructor(seletor: string) {
        this._elemento = document.querySelector(seletor);
    }

    update(modelo: T) : void{
        this._elemento.innerHTML = this.template(modelo);
    }

    clear() : void {
        this._elemento.innerHTML = '';
    }

    template(modelo: T): string {
        throw new Error("o método template não foi implementado")
    }
}
import { IImprimivel } from './IImprimivel';

export class Negociacao implements IImprimivel{

    constructor(readonly data: Date, readonly quantidade: number, readonly valor: number) { }

    get volume() { return this.quantidade * this.valor; }

    imprime(): void {
        console.log(`
            Negociacão adicionada:
            \tData: ${this.data.getDate()}/${this.data.getMonth()+1}/${this.data.getFullYear()}
            \tQuantidade: ${this.quantidade}
            \tValor: ${this.valor}
            \tVolume: ${this.volume}
                    `)
    }

}
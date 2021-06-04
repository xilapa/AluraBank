import { IImprimivel } from './IImprimivel';
import { Negociacao } from './Negociacao';

export class Negociacoes implements IImprimivel{

    private _negociacoes: Array<Negociacao> = [];

    adiciona(negociacao: Negociacao): void{
        this._negociacoes.push(negociacao)
    }

    paraArray(): Negociacao[]{
        return [].concat(this._negociacoes);
    }

    imprime(): void {
        console.log(JSON.stringify(this._negociacoes))
    }
}
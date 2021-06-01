import { ViewBase } from './ViewBase'

export class MensagemView extends ViewBase<string> {


    template(modelo: string): string {
        return `<div class='alert alert-info'>${modelo}</div>`
    }
}
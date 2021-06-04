import { INegociacaoParcial, Negociacao } from '../models/index'

export class NegociacaoService {

    getNegociacoes(handler: IHandlerFunction): Promise<Negociacao[]> {
        return <Promise<Negociacao[]>>fetch('http://localhost:8080/dados')
            .then(res => handler(res))
            .then(res => res.json())
            .then((dados: INegociacaoParcial[]) =>
                dados.map(dado => new Negociacao(new Date(), dado.vezes, dado.montante))
            )
            .catch((err: Error) => console.log(err.message))

    }
}

export interface IHandlerFunction {
    (res: Response): Response;
}
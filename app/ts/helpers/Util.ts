import { IImprimivel } from '../models/Index';

export function imprime(...objs : IImprimivel[]) {
    objs.forEach(obj => { obj.imprime() });
}
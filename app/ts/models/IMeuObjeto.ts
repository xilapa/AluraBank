import { IComparavel } from './IComparavel';
import { IImprimivel } from './IImprimivel';

export interface IMeuObjeto<T> extends IComparavel<T>, IImprimivel {
    
}
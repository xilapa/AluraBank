export interface IComparavel<T> {
    // compara o objeto atual com outro objeto da mesma classe
    ehIgual(obj: T) : boolean
}
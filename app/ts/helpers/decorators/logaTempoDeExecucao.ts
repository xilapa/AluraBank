// decorator de método
export function logaTempoDeExecucao() {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const metodoOriginal = descriptor.value;

        descriptor.value = function (...args: any[]) {
            console.log(`método ${propertyKey}`)
            console.log(`args ${JSON.stringify(args)}`)
            const t1 = performance.now();
            const retorno = metodoOriginal.apply(this, args);
            const t2 = performance.now();
            console.log(`retorno ${retorno}`)
            console.log(`tempo de execução: ${t2-t1}`)
            return retorno;
        }

        return descriptor;
    }
}
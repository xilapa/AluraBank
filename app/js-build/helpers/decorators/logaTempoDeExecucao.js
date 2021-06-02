System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function logaTempoDeExecucao() {
        return function (target, propertyKey, descriptor) {
            const metodoOriginal = descriptor.value;
            descriptor.value = function (...args) {
                console.log(`método ${propertyKey}`);
                console.log(`args ${JSON.stringify(args)}`);
                const t1 = performance.now();
                const retorno = metodoOriginal.apply(this, args);
                const t2 = performance.now();
                console.log(`retorno ${retorno}`);
                console.log(`tempo de execução: ${t2 - t1}`);
                return retorno;
            };
            return descriptor;
        };
    }
    exports_1("logaTempoDeExecucao", logaTempoDeExecucao);
    return {
        setters: [],
        execute: function () {
        }
    };
});

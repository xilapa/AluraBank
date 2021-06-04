System.register(["./logaTempoDeExecucao", "./injectDOM", "./debounce"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function exportStar_1(m) {
        var exports = {};
        for (var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters: [
            function (logaTempoDeExecucao_1_1) {
                exportStar_1(logaTempoDeExecucao_1_1);
            },
            function (injectDOM_1_1) {
                exportStar_1(injectDOM_1_1);
            },
            function (debounce_1_1) {
                exportStar_1(debounce_1_1);
            }
        ],
        execute: function () {
        }
    };
});

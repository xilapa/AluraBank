// decorator de propriedade
export function injectDOM(seletor: string) {
    
    return function name(target: any, propertyKey: string) {
        
        let elemento: HTMLInputElement;

        const getter = function () {
            if (!elemento) {
                console.log(`buscando ${seletor} para injetar em ${propertyKey}`)
                elemento = document.querySelector(seletor);
            }

            
            return elemento;
        }

        Object.defineProperty(target, propertyKey, { get: getter})

    }
    
}
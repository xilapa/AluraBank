// decorator de método
export function debounce(delay = 500) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const metodoOriginal = descriptor.value;
        let timer: number;
        

        descriptor.value = function (...args: any[]) {
            
            if (event) event.preventDefault()
            clearInterval(timer);
            
            timer = setTimeout(() => {
                metodoOriginal.apply(this, args)
            }, delay)
        }

        return descriptor;

    }
}
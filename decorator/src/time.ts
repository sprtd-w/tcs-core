export function timeAnnotation(hasLog: boolean): MethodDecorator {
    hasLog && console.log(`Logged time: ${new Date().getTime()}`);    

    return time;
}

export function time(instance: any, functionName: string, descriptor: PropertyDescriptor): PropertyDescriptor {
    const originalFunc = descriptor.value; // replaced initial fn

    descriptor.value = (...args) => { // by new fn
        return originalFunc.call(instance, ...args).then(res => console.log(res));
    }

    return descriptor;    
}
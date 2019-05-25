import {time, timeAnnotation} from './time.ts';

// @ here decorator annotates a constructor; you dont get an instance, but instance.prototype. ...
export class Person {
    public name: string = '1';

    constructor(name: string) {
        this.name = name;
    }

    getName(): string {
        return this.name
    };

    printName() {
        console.log(this.name);
    }

    @time // -> fn that returns a fn
    async work(text): Promise<any> {
        const self = this;
        console.log(1, self);
        return await new Promise((res: any) => {
            setTimeout(() => {
                res(`${text} worked awesome`);
            }, 200);
        });
    }

    @timeAnnotation(true)
    async sleep(): Promise<any> {        
        return await new Promise((res: any) => {
            setTimeout(() => {
                res('slept away......');
            }, 200);
        });
    }

}
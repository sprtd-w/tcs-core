import {Person} from './person.ts';

const me = new Person('me');
me.printName();
console.log('inited me=', me.getName());

me.work(1);

me.sleep();

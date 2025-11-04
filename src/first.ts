//goal -> understand when to let Typescript infer types
// ts knows js very well
//know when to let ts write the the types and when to do it alone

const count: number = 0;
const site: string = "sam chris mboya";
const score = [10, 20, 30];

//over annotation is not actually bad

export const add = (a: number, b: number): number => a + b;

//you should annotate when the type is not obvious

let maybe: string | number;

maybe = Math.random() > 0.5 ? "test" : 12;
console.log(add(17, 2));

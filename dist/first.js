//goal -> understand when to let Typescript infer types
// ts knows js very well
//know when to let ts write the the types and when to do it alone
const count = 0;
const site = "sam chris mboya";
const score = [10, 20, 30];
//over annotation is not actually bad
export const add = (a, b) => a + b;
//you should annotate when the type is not obvious
let maybe;
maybe = Math.random() > 0.5 ? "test" : 12;
console.log(add(17, 2));

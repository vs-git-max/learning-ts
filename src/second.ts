let username: string = "Sam Chris";
let age: number = 22;
let isOfAge: boolean = true;
const big: bigint = 2n ** 63n - 1n;

//operator + cannot be applied to number and bigint
//const mixed  = big + age

const token: unique symbol = Symbol("token");

const yearsToDay = (years: number): number => years * 365;

console.log(username.toLowerCase());
console.log(age.toFixed(2));
let newAge = age.toString();

console.log(newAge);

console.log(yearsToDay(34));

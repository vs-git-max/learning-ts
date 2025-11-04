"use strict";
let username = "Sam Chris";
let age = 22;
let isOfAge = true;
const big = 2n ** 63n - 1n;
//operator + cannot be applied to number and bigint
//const mixed  = big + age
const token = Symbol("token");
const yearsToDay = (years) => years * 365;
console.log(username.toLowerCase());
console.log(age.toFixed(2));
let newAge = age.toString();
console.log(newAge);
console.log(yearsToDay(34));

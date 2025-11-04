"use strict";
//email ?:string -> email may be absent, if it is present it will be string
//it is not the same as email : string|undefined
const user1 = {
    id: 1,
    name: "sam",
    createdAt: new Date(),
};
const user2 = {
    id: 2,
    name: "John",
    createdAt: new Date(),
    email: "sam",
};
const count1 = { sam: 34 };
const count2 = { likes: 67, shares: 12, random: 67 };

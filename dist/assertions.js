"use strict";
const raw = '{"id":2,"name":"sam chris mboya"}';
function isUser(v) {
    return (typeof v === "object" &&
        v !== null &&
        "id" in v &&
        typeof v.id === "number" &&
        "name" in v &&
        typeof v.name === "string");
}
const maybe = JSON.parse(raw);
if (isUser(maybe)) {
    console.log(maybe.name);
}

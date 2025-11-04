"use strict";
function printValue(id) {
    return typeof id === "string" ? id.toLowerCase() : id.toFixed(3);
}
function userSelect(person) {
    let message;
    "permission" in person
        ? (message = "Admin user")
        : (message = "Customer user");
    return message;
}
const arrayOfUnions = [1, "a", 3, "d"];

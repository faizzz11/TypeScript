"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addFive(num) {
    return num + 5;
    //return "hello"
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, isPaid) { }
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
var myValue = addFive(34);
getUpper("faizzzz");
signUpUser("faizz", "faiz@g.com", true);
loginUser("f", "faizz@xxx.com");
// function getValue(myVal: number): boolean{
//     if (myVal > 5) {
//         return true
//     }
//     return "404 error"
// }
var getHello = function (s) {
    return "";
};
var BGMI = ["goblin", "neyo", "hector"];
// const BGMI = [1, 2, 3]
BGMI.map(function (pubg) {
    return "hero is ".concat(pubg);
});
function consoleError(errmsg) {
    console.log(errmsg);
}
function handleError(errmsg) {
    throw new Error(errmsg);
}

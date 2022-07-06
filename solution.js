//# 1
console.log("Loose comparison:", 3 == "3" ? "Equal" : "Not equal");
console.log("Strict comparison:", 3 === "3" ? "Equal" : "Not equal");

//Q1
console.log("Number: 3");

//Q2

console.log("Number: 6");

//Q3

console.log("Number: 9");

//# 2

let myVar = true;
console.log("Q#2:", myVar ? "good morning" : "goodevening");

//#3

let firstName = "" || "john" || 0;
let emptyStr = "" && false && "Hello World";
let zero = "" || false || 0;
let seven = 75 && "nine" && 7;

console.log(firstName, emptyStr, zero, seven);

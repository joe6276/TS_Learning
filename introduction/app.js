"use strict";
// Typescript is a superset of Javascript
// syntatic sugar 
//the browser only understands Javascript
// Drawback
// installation tsc  npm i -g typescript
//compiler
// Typescript => Javascript
// Advantages of TS
// - has extra types-- interface , Tuples
// It also support Next-Gen features
// Type safe 
// Error can be handled during development and not during compilation
// Rich configuration options
// Meta-programming ---()-- Decorators / Annotations  @hh  [Required]
// Modern Tooling (IDE)- intellisense
//  ??Javascript is Dynamic  --Typescript static
// const tax=16;
// let age:number =10
// age="13";
const n1 = document.querySelector("#num1");
const n2 = document.querySelector("#num2");
const btn = document.querySelector("#add");
function add(a, b) {
    console.log(a + b);
}
btn.addEventListener('click', () => {
    add(+n1.value, +n2.value);
});
console.log("Hello World");
console.log("Hello World");
console.log("Hello Watch Mode");

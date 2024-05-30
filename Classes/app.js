"use strict";
let x = {
    name: "",
    age: 12,
    manages: ['er'],
    addAdmin() {
    },
    greet() {
    }
};
x.name = "new";
// type Person1={
//     name:string
//     age:number
//     greet:()=>void
// }
let people = [];
let john = {
    name: "John",
    age: 12,
    greet() {
        console.log("Hi there");
    }
};
let mary = {
    name: "Mary",
    age: 12,
    greet() {
        console.log("Hi there");
    }
};
people.push(john);
people.push(mary);
class William {
    constructor() {
        this.name = "";
        this.age = 45;
    }
    greet() {
        console.log("");
    }
}
const w = new William();
console.log(w);

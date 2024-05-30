// Intersection type
//combine different types to come up with a new type

// type User={
//     name:string
//     age:number
// }
// type Manager={
// manages:string[]
// role:string[]
// }

// type Admin = User & Manager

// let admin:Admin={
//     name:"John",
//     age:20,
//     manages:['jane', 'Doe'],
//     role:['managing']
// }
//intersection for objects adds all the properties together

//intersection for built in types takes the common type

// type StrNum= string | number
// type StrBool= string |boolean

// type combined= StrBool & StrNum //string

// Type Guards
// Typeof -- check the type
// this only works for built in datatypes
// function add(a:StrNum, b:StrNum){
//     if(typeof a==='string' || typeof b==='string'){
//         return a.toString() + b.toString()
//     }
//     return a+b
// }

// console.log(add('Hello ', 'World'));

// console.log(add(12,45));

// type User = {
//   name: string;
//   age: number;
// };
// type Manager = {
//   name: string;
//   manages: string[];
//   role: string[];
// };

// type Employee = User | Manager;
//create a function that says if someone is a manager or a normal user

// in operator
// function printEmployee(emp: Employee) {
//     //we cant use Typeof - they are not built in types
//     if('manages' in emp){
//         // this is a manager
//         console.log("You are a Manager");
//         return
//     }
//     console.log("You are a Normal user");
//     return
// }

// printEmployee({name:"John", manages:[''],role:[]})

// class Car{
//     drive(){
//         console.log('Driving');

//     }
// }

// class Truck{
//     drive(){
//         console.log('Driving');

//     }
//     loadCargo(){
//         console.log("Carrying 1T cargo..");

//     }
// }

// type Vehicle= Car |Truck

// // Instance of
// //used with classes

// function checkVehicle(vehicle:Vehicle){

//     vehicle.drive()

//     if (vehicle instanceof Truck){// there might be  a typo
//         vehicle.loadCargo()
//     }
// }

// checkVehicle(new Truck())

// type User = {
//     name: string;
//     age: number;
//     role:'User'
//   };
//   type Manager = {
//     name: string;
//     manages: string[];
//     role: 'Admin';
//   };

//   type Employee = User | Manager;

//   //Discriminated Unions
//   // the two types must have a common property

//   function checkEmployee(emp:Employee){
//     switch(emp.role){
//         case"User":
//         console.log("This is a Normal user")
//         break

//         case "Admin":
//             console.log("This is an Admin");
//             return
//     }
//   }

//   checkEmployee({name:'', age:23, role:"User"})

//Type Casting

// const p = document.querySelector('p')!

// p.style.display=""

// const p1= <HTMLParagraphElement>document.querySelector('#message')!
// //downside -React JS
// // <> as an Element/Component

// const inputText= document.querySelector('#text')

// if(inputText){
//     (inputText as HTMLInputElement).value
// }

// const btn = document.getElementById("btn")! as HTMLButtonElement

// btn.addEventListener('click',()=>{

// })

// indexing Property
// {username:'username is taken'}
// {username:'username is taken', email:'email is required'}

// type ErrorContainer={
//     [j:string]:string|number
// }

// let errors:ErrorContainer={
//     username:'username is taken',
//     email:'email is required'
// }

// let errors1:ErrorContainer={
//     username:'username is taken'
// }

//function overloading

type StrNum = string | number;

function add(a: string, b: string): string;
function add(a: number, b: string): string;
function add(a: string, b: number): string;
function add(a: number, b: number): number;
function add(a: StrNum, b: StrNum) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

var result = add(13, 12);

//optional chaining

let person = {
  name: "john",
  job: {
    title: "CEO",
  },
};

let person1 = {
    name: "john",
    // job: {
    //   title: " ",
    // },
  };

 console.log( person1?.job?.title);


 //Nullish Coalescing
//check if something is null or undefined

let username =null

let storedData= username ?? 'John Doe'

console.log(storedData);


 



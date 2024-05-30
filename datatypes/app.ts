// let age =19
// // Type inference --infer (assign the type based on value held )
// //have not specified the type --- a type is still set

// // Type casting / Implicit typing 

//number to specify all data types that hold numeric types (whole numbers and floating)
let age1:number=20

let greeting="Hello World"// type inference

let isLegal:boolean= true



//Tuple --- Fixed-length array

//[number, string]

// let roles:[number, string]= [1,"Admin"]

// // roles.push("color") //exceptional
// roles[0]=45;

// enum --{Admin, User, Manager}

 //enum Role {"ADMIN"=9, "USER","MANAGER"}

// let person={
//     name:"John Doe",
//     role:Role.ADMIN
// }


// person.role=Role.MANAGER


// console.log(person.role);


// any
// taking us back to Javascript -dynamic
// not recommended

//Type Aliases
// type numstring =number|string
//union Types
// function add(a:numstring ,b:numstring){
//     //dynamic function
//     //if given  2 number it will add 
//     //if given atleast on string it will concatenate
//     if( typeof a ==='number' && typeof b ==='number'){
//         return a +b //sum
//     }
//     return a.toString() + b.toString() //concat
// }

//Literal types 
// type gender = "Male"| "Female"| "others"

// let person:{
//     name:string;
//     gender:gender,
//     role:Role
// }={
//     name:"John Doe",
//     gender:"Male",
//     role:Role.USER
// }
// person.gender="Female"
// console.log(add('12',3));
// console.log(person);

// let arr:(number|string|{})[]=[]
// arr.push(12)
// arr.push('23')
// arr.push(person)
// arr.push({})




function add (a:number,b:number):number{//return type
    return a+b
}


function add1 (a:number,b:number, cb:(res:number)=>void):void{ //void
    let result=a+b;
    cb(result)
}

function printsResult(message:string,result:number){
    console.log(message+result);
    
}

// let copyAdd:(x:number, y:number)=>number
// copyAdd=add

console.log(add1(1,23,printsResult.bind(this, "The sum is ")));

//unknown
// we dont know the type yet

// let x:any

// x=12
// x='srrbgf'
// console.log(x.toUpperCase())
// if(typeof x =='string'){
    
// }

// you want to perform datatypes methods


//never 

function showError(message:string){
    throw(message)
}

showError("error occured")






































// //Arrow 

// function add(a:number, b:number){
//     return a+b
// }

// const addFn= (a:number, b:number)=> a+b;
// const greet:(p:string)=>void= phrase=>console.log(phrase);
// const greet1= (phrase:string)=>console.log(phrase);

// const greettwice=(phrase:string, phrase1:string)=>{
//     //does not automatically return (incase you are returning something)

//     console.log(phrase);
//     console.log(phrase1);
    
    
// }

// // default parameters
// const greet2=(a:number,phrase:string="Hi There")=>console.log(phrase);

// greet2(3)
// greet2(2,"Good Morning")


//Spread --copying into an array or an object
//rest operator - When you represent an n number items

let fruits=['Apples', "Banana", 'Watermelon']
let morefruits =["Mango", "Pineapple"]
let numbers=[1,2,3,4,5,6]
let allFruits=[...fruits,...morefruits,...numbers]
//give me the first value of the allfurits array
//destructuring is extracting from an array 
//for array you have to know the index
// if i dont know the index/ the index is at an higher position (10) then i can opt for array methods.
let [x,,,y,...otheritems]=allFruits
console.log(otheritems);


let person ={
    firstName:'John',
    age:23,
    extra:{
        hobbies:['swimming']
    }
}

let moreprops={
    gender:"Male",
    Height:5.9
}

let john = {...person, ...moreprops}
console.log(john);

//Destructuring  /rest
//objects we destructure based on keys

let {age,firstName,...rest}=john
///check on the nesting
let{hobbies}=john.extra
console.log(age);
console.log(rest);

function add (...numbers:(number| string)[])
{
let sum=0

for( let x of numbers){
    if(typeof x==='number'){
        sum+=x
    }
    else if(typeof x==='string'){
        sum += +x
    }
}
console.log(sum);

}


add(1,2,3,5)
add(1,23,44,5,5,7,8,9,3,'34')

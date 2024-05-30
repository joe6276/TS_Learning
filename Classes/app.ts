
interface User{
    readonly name:string
    age:number
    greet:()=>void
}

type Manager={
    manages:string[]
}

interface Admin extends User,Manager{
    addAdmin:()=>void
}

let x:Admin={
    name:"",
    age:12,
    manages:['er'],
    addAdmin(){

    },
    greet(){

    }
}
// x.name="new"



// type Person1={
//     name:string
//     age:number
//     greet:()=>void
// }

let people:User[]=[]

let john:User={
    name:"John",
    age:12,
    greet(){
        console.log("Hi there");
        
    }
}

let mary={
    name:"Mary",
    age:12,
    greet(){
        console.log("Hi there");
        
    }
}

people.push(john)
people.push(mary)

class William implements User{
 name:string=""
 age: number=45

 greet() {
    console.log(""); 
 }
}


const w= new William()

console.log(w);

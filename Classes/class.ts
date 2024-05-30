// classes are blueprints of objects
// Define how an object will look(properties and methods)
// They are used to make creating multiple object easier

// object is an instance of class
// is an alternative to object literals / factory functions

abstract class School{
    protected static employees:string[]=[] //field => property in object
    public readonly schoolname="Dedan Kimathi"
    //special method called constructor
    //to initialize the fields
    //always the first thing called when we create an instance
    constructor(private readonly id:number){
       
    }


    // you dont implement {}
    // you also make the class abstract
    // you cannot instantiate an abstract class
   abstract createTimetable(units:string[]):void

    getEmployees(){
        console.log(School.employees);
        
    }
    
}

//object


// dekut.addEmployee("Justine")


// const newObj={addEmployee:dekut.addEmployee}

// newObj.addEmployee("Rodgers")

// dekut.employees.push("hf")// this may lead to loss of data
//to have only one way to add an employee

// console.log(dekut);
// dekut.getEmployees()

//Access Modifiers 
// public - tHe property & method is accessible inside & 
// outside the class

// private- the propertyy only accessible inside the class
// protected -- the property/method is accessible within the class
// and its sub classes -- but not from outside the class/classes


// creates an empty object
// points to the this keyword to the empty object created 
// return the created object
// set the prototype


//inheritance 

class ITDepartment extends School{
    

    constructor(id:number, public admin:string[]){
        super(id)
    }
    addEmployee(name:string){//method => functions 
        School.employees.push(name)
        // this.id=3
    }

     createTimetable(units: string[]) {
        console.log('Time table created');
    };
    getEmployees(){
        console.log(School.employees);
        
    }

}

class AccountingDepartment  extends School{
   
    constructor(id:number){
        super(id)
    }

     createTimetable(units: string[]){
        console.log("Timetable created")
    }
    addEmployee(name:string){//method => functions 
        School.employees.push(name)
        // this.id=3
    }
    
}


// const dekut = new School(1)
const it= new ITDepartment(4, ["Admin1", "Admin2"])
const it2= new ITDepartment(4, ["Admin1", "Admin2"])

console.log(it===it2);

const ac= new AccountingDepartment(8)
it.addEmployee("Jesse")
ac.addEmployee("Mary")
// with inheritance bot the child and the parent constructors are called
// when a class has no constructor the parent constructor is called 

// console.log(it)

it.getEmployees()

// console.log(dekut


// class Car{
//     private constructor(carName:string){
//     }
// }
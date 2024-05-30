// I want to write a function that can take any datatype in typescript
//without specifying all the types using union types(string|number)

// function print<T>(x:T){
//     console.log(x);
// }

// built in generics

// let x:string[]=[]
// let x:Array<string>=[]
// let y:Array<number>=[]

//Promise

// let baseURL = "https://jsonplaceholder.typicode.com/posts/1";



// function fetchData() {
//   return new Promise<Post>((resolve, reject) => {
//     fetch(baseURL)
//       .then((response) => response.json())
//       .then((data) => resolve(data))
//       .catch((error) => reject(error));
//   });
// }

// async function fetchData1(): Promise<Post> {
//   let response = await fetch(baseURL);
//   let posts = await response.json();
//   return posts;
// }

// fetchData1().then((data) => {
//   data.body;
// });

//generic is used on functions and classes


// function print<T>(x:T){
//     console.log(x);
// }

// print(1)
// print("Hello")
// print({name:'John'})


// function mergeObject<T extends object,U extends object>(obj1:T, obj2:U){
//     return Object.assign(obj1,obj2)
// }
// ///object ---general

// let result = mergeObject({name:"John", hobies:['']}, {age:30})
// console.log(result.name);
//  type Lengthy={
//     length:number
//  }

// function count<T extends Lengthy>(x:T){
//     if(x.length ===1){
//         console.log("Contains one Element");
//     }
//     else if(x.length>1){
//         console.log(`It contain ${x.length} elements `); 
//     }
// }

// count("Hello")
// count([1,2,3,4,5,5,66,335,6,45,65])

// function printsValue<T extends object, U extends keyof T>(x:T, key:U){
//     console.log(x[key]);
// }
// printsValue({name:'john', age:20},"name")



// class DataStore<T extends string|number|boolean>{

//     data:T[]=[]

//     addnewItem(item:T){
//         this.data.push(item)
//     }
//     getData(){
//         return [...this.data]
//     }
//     removeItem(item:T){
//         this.data.splice(this.data.indexOf(item), 1)
//     }
// }

// const st= new DataStore<string>()
// st.addnewItem("John")
// console.log(st.getData());


// const st1= new DataStore<number>()
// st1.addnewItem(1)
// console.log(st1.getData());




interface Person{
    name:string
    age:number
}

function createPerson():Person{
    //you are getting the name value and the age value from diff places
    let prs:Partial<Person>={}
    //partial make the properties optional
    prs.name="John"
    prs.age=30

    return prs as Person
}






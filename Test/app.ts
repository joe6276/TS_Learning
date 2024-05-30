

// interface Todo{
//     id:number
//     userId:number
//     title:string
//     completed:boolean
// }

// function getPost(){
//     return new Promise<Todo[]>((resolve,reject)=>{
//         fetch("https://jsonplaceholder.typicode.com/todos").then(res=>res.json())
//         .then(data=>resolve(data))
//         .catch(error=>{
//             throw new Error(error.message)
//         })
//     })
// }


// async function getPost1():Promise<Todo[]>{
   
//       var response= await fetch("https://jsonplaceholder.typicode.com/todos") 
//       let todos = await response.json() as Todo[]
//       return todos       
    
// }

// async function showPosts(){
//  var todos= await getPost1()
//  console.log(todos);
 
// }

// showPosts()


// function mergeObjects<T extends object,U extends object>(obj1:T, obj2:U){
//     return Object.assign(obj1,obj2)
// }

// let result=mergeObjects({name:"John Doe"}, {age:10})
// console.log(result.name);



// function getValue<T extends object,U extends keyof T>(obj:T, key:U){
//     return obj[key]
// }


// let x=getValue({name:"John", age:30}, 'name')
// // console.log(x)

// interface Lengthy{
//     length:number
// }

// function count<T extends Lengthy>(element:T){
//     let description=''
//     if(element.length===1){
//         description="You have one item";
        
//     }else if(element.length>1){
//         description="Yo have "+ element.length +"  elements"
//     }
//     console.log(description);
     

// }


// count("Hello There")
// count([1,2,3,4,4,5])


class DataStore<T extends string| number| boolean>{
     data:T[]=[]

     addItems(item:T){
        this.data.push(item)
     }
     removeItem(item:T){
        this.data.splice(this.data.indexOf(item), 1)
     }
     getItems(){
        console.log([...this.data]);
        
     }

}


























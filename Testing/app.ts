// let result="1,2,5,5,6, ,96,54,65,23"
// come up with sum

// 1. Check if its empty

function checkEmpty(s:string){
    if(s.trim()===''){
        throw new Error('input is required')
    }
    return s
}

// 2. change to array
function changetoArray(s:string){
return s.split(',')
}

// console.log(changetoArray(result));

// 3.  change the string array into number array

function changeToNumbers(nums:String[]){
    let arr:number[]=[]
    for(let val of nums){
        if(val!==''){
            
            let x = Number(val)
            if(isNaN(x)){
                throw new Error('Please provide numbers only')
            }
            arr.push(x)
        }
    }

    return arr;
}


function addNumbers(input:string){

    const  aftertrim= checkEmpty(input);
    const arr= changetoArray(aftertrim)
    const arrayNumbers= changeToNumbers(arr)
    return arrayNumbers.reduce((acc,cur)=> acc+cur , 0)
}

module.exports={checkEmpty, changetoArray,changeToNumbers,addNumbers}
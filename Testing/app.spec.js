const {checkEmpty,changetoArray,changeToNumbers,addNumbers} = require("./app") //common Js
// import {add} from './app'  //ES Module

// test('Should add two numbers', ()=>{
//     //Arrange- inputs required by the method
//         const num1=1
//         const num2=2
//     //Act-- call the method
//     const result = add(num1,num2)

//     //Assert- text against what you expected
//     expect(result).toBe(3)
// })

//test suite

describe('For Empty Strings',()=>{
    test('Should return the string if its not empty',()=>{
        const result = checkEmpty("1,2,3,4,6")
        expect(result).toBe("1,2,3,4,6")
    })

    test("Should throw an error if the string is empty", ()=>{
        const resultFn=()=>checkEmpty("")
        expect(resultFn).toThrow()
    })

    test("Should throw an error if the string is empty", ()=>{
        const resultFn=()=>checkEmpty("          ")
        expect(resultFn).toThrow(/input is required/)
    })
})

describe('Change to array Tests', ()=>{
     test('should return an array given a string', ()=>{
        const result= changetoArray("1,2,3")
        expect(result).toEqual(['1','2','3'])//reference type
     })

     test('should return an array given a string', ()=>{
        const result= changetoArray("1,2,3")
        expect(result).toEqual(['1','2','3'])//reference type
     })
})


describe(' Change to Number Tests', ()=>{
    test('Should convert string array to number array', ()=>{
        const result= changeToNumbers(['1','2','3'])
        expect(result).toEqual([1,2,3])
    })

    test('Should convert string array to number array', ()=>{
        const result= changeToNumbers(['1','','2', '','3'])
        expect(result).toEqual([1,2,3])
    })

    test('Should convert string array to number array', ()=>{
        const resultfn= ()=>changeToNumbers(['1','linton','2', '','3'])
        expect(resultfn).toThrow(/Please provide numbers only/)
    })
})

describe('Add Function Tests', ()=>{

    test('Should add numbers', ()=>{

        const result = addNumbers('1,2,3,4')
        expect(result).toBe(10)
    })
})
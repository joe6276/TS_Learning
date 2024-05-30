

jest.mock('./async.js')

const{getPost} = require('./async')


test('should return a post',()=>{
    const output="sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
    getPost().then(post=>{
        expect(post).toBe(output)
    })
})
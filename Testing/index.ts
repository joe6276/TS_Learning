const username = document.getElementById('username')! as HTMLInputElement
const password = document.getElementById('password')! as HTMLInputElement
const signup = document.getElementById('signup')!as HTMLButtonElement
const content = document.getElementById('content')!as HTMLDivElement

signup.addEventListener('click', ()=>{
    const listElement= document.createElement('li')
    listElement.textContent=`${username.value}  --- ${password.value}`
    content.appendChild(listElement)
})


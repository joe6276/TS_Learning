"use strict";
const username = document.getElementById('username');
const password = document.getElementById('password');
const signup = document.getElementById('signup');
const content = document.getElementById('content');
signup.addEventListener('click', () => {
    const listElement = document.createElement('li');
    listElement.textContent = `${username.value}  --- ${password.value}`;
    content.appendChild(listElement);
});

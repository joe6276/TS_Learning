"use strict";
let baseURL = "https://jsonplaceholder.typicode.com/posts/1";
function getPost() {
    console.log("We are reaching ou to an API");
    return new Promise((resolve, reject) => {
        fetch(baseURL).then(res => res.json())
            .then(post => resolve(post.title));
    });
}
module.exports = { getPost };

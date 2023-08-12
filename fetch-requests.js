/*
Make fetch requests in the browser for each of the following phases.
Paste your code for fetch requests here once you finish each phase.
*/

/* ============================== Phase 1 ============================== */

// Your code here
let url = "/products";
let method = "POST";
let body = "name=Caribbean+Delight+Coffee&description=Made+by+Manatee+Coffee&price=11%2E99&categories=grocery";
let headers = {
    "Content-Type": "application/x-www-form-urlencoded"
};

fetch(url, {
    method: method,
    body: body,
    headers: headers
});


/* ============================== Phase 2 ============================== */

// Your code here
fetch(url, {
    method: method,
    body: body,
    headers: headers
})
    .then((res) => {
        console.log(res.status);
        console.log(res.headers.get("Content-Type"));
        console.log(res.url);
    });


/* ============================== Phase 3 ============================== */

// Your code here
let name = "Caribbean Delight Coffee";
let description = "Made by Manatee Coffee";
let price = 11.99;
let categories = "grocery";

fetch(url, {
    method: method,
    body: new URLSearchParams({
        name: name,
        description: description,
        price: price,
        categories: categories
    }),
    headers: headers
});

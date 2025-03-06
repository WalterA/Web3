//Fetch api
let utenti = fetch('https://jsonplaceholder.typicode.com/users');
console.log(utenti);
utenti.then((response)=> {
    console.log(response);
    let u= response.json();
    u.then((x) => {
        //dom
        console.log(x);
    })
});
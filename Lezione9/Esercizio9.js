let utenti = fetch("https://jsonplaceholder.typicode.com/users");

utenti.then((response) => {
    let u= response.json();
    u.then((u2) => {
        document.getElementById("u2").innerHTML="u2";
    });
});
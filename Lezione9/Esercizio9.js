let utenti = fetch("https://jsonplaceholder.typicode.com/users");

utenti.then((response) => {
    let u= response.json();
   
    u.then((u2) => {
        let container = document.getElementById("u2");
        u2.forEach((u) => {
            let h1 = document.createElement("h4"); 
            h1.textContent = `ID: ${u.id},Nome: ${u.name},Username: ${u.username},Email: ${u.email},Indirizzo: ${u.address.street}, ${u.address.suite}, ${u.address.city}, ${u.address.zipcode}, ${u.address.geo.lat}, ${u.address.geo.lng},Telefono: ${u.phone},Sito web: ${u.website},Nome azienda: ${u.company.name}, ${u.company.catchPhrase}, ${u.company.bs}`;
            container.appendChild(h1);
        });
    }).catch((error) => {
        console.error("Errore durante il recupero dei dati:", error);
    });
});

let news = fetch("https://jsonplaceholder.typicode.com/posts");

news.then((response) => {
    let n= response.json();
    n.then((n2) => {
        let container = document.getElementById("n2");
        n2.forEach((n) => {
            let h1 = document.createElement("h4");
            h1.textContent = `UserId: ${n.userId},Id: ${n.id},Title: ${n.title},Body: ${n.body}`;
            container.appendChild(h1);
        });
    }
    ).catch((error) => {
        console.error("Errore durante il recupero dei dati:", error);
    });
});


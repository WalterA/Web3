
let utenti = fetch("https://jsonplaceholder.typicode.com/users");

utenti.then((response) => {
    return response.json();
}).then((data) => {
    let container = document.getElementById("lista");
    data.forEach((user) => {
        let h4 = document.createElement("h4");
        h4.textContent = ` Nome: ${user.name}, Username: ${user.username}`;//ID: ${user.id},, Email: ${user.email}
        
        let button = document.createElement("button");
        button.textContent = "dettagli";
        button.addEventListener("click", () => mostraDettagliu(user.id));

        let div = document.createElement("div");
        div.appendChild(h4);
        div.appendChild(button);
        container.appendChild(div);
    });
}).catch((error) => {
    console.error("Errore durante il recupero degli utenti:", error);
});

let nascondilista =()=> {
    let lista = document.getElementById("lista");
    lista.style.display = "none";

}

let nascondiDettagli=()=> {
    let dettagli = document.getElementById("dettagli");
    dettagli.style.display = "none";
    dettagli.textContent="";
    visualizzalista();
}

let visualizzadettaglio=()=> {
    let dettagli = document.getElementById("dettagli");
    dettagli.style.display = "block";
}
let visualizzalista=()=> {
    let lista = document.getElementById("lista");
    lista.style.display = "block";
}


let mostraDettagliu =(id)=> {
    nascondilista();
    visualizzadettaglio();
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((response) => response.json()).then((post) => {
        let dettagli = document.getElementById("dettagli");
        let h2 = document.createElement("h2");
        h2.textContent = `Dettagli: ${post.email}`;

        let button = document.createElement("button");
        button.textContent = "indietro";
        button.addEventListener("click", () => nascondiDettagli());

        dettagli.appendChild(h2);
        dettagli.appendChild(button);

    }).catch((error) => {
            console.error("Errore nel recupero della news dettagliata:", error);
    });
};



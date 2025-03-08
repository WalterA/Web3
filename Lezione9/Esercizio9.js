// Recupero utenti


let news = fetch("https://jsonplaceholder.typicode.com/posts");
news.then((response) => {
    return response.json();
}).then((data) => {
    let container = document.getElementById("lista");

    data.forEach((post) => {
        let h4 = document.createElement("h4");
        
        h4.textContent = `Title: ${post.title}`;

        let button = document.createElement("button");
        button.textContent = "Dettagli";
        button.addEventListener("click", () => mostraDettaglin(post.id));

        container.appendChild(h4);
        container.appendChild(button);
    });
}).catch((error) => {
    console.error("Errore durante il recupero delle news:", error);
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


function mostraDettaglin(id) {
    nascondilista();
    visualizzadettaglio();
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response) => response.json())
        .then((post) => {
            let dettagli = document.getElementById("dettagli");
            let h2 = document.createElement("h2");
            h2.textContent = `Dettagli: ${post.body}`;

            let button = document.createElement("button");
            button.textContent = "indietro";
            button.addEventListener("click", () => nascondiDettagli());
            
            dettagli.appendChild(h2);
            dettagli.appendChild(button);
            
        }).catch((error) => {
            console.error("Errore nel recupero della news dettagliata:", error);
        });
};
// Recupero e popolamento della select con gli utenti
fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => {
        let select = document.getElementById("utenteSelect");
        data.forEach(user => {
            let option = document.createElement("option");
            option.value = user.id;
            option.textContent = `${user.name} (${user.username})`;
            select.appendChild(option);
        });
    })
    .catch(error => console.error("Errore nel recupero degli utenti:", error));

// Funzione per recuperare e visualizzare le news filtrate per utente
document.getElementById("visualizzaBtn").addEventListener("click", () => {
    let userId = document.getElementById("utenteSelect").value;
    if (userId === "0") {
        alert("Seleziona un utente!");
        return;
    }

    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        .then(response => response.json())
        .then(data => {
            let container = document.getElementById("newsContainer");
            container.innerHTML = ""; // Pulisce il contenuto precedente

            if (data.length === 0) {
                container.innerHTML = "<p>Nessuna news trovata per questo utente.</p>";
                return;
            }

            data.forEach(post => {
                let card = document.createElement("div");
                card.className = "card mb-3";
                card.innerHTML = `
                    <div class="card-body">
                        <h5 class="card-title">${post.title}</h5>
                        <p class="card-text">${post.body}</p>
                    </div>
                `;
                container.appendChild(card);
            });
        })
        .catch(error => console.error("Errore nel recupero delle news:", error));
});



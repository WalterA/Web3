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

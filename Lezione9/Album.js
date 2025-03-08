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

    fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
        .then(response => response.json())
        .then(data => {
            let container = document.getElementById("newsContainer");
            container.innerHTML = ""; 

            if (data.length === 0) {
                container.innerHTML = "<p>Nessuna news trovata per questo utente.</p>";
                return;
            }

            data.forEach(post => {
                let card = document.createElement("div");
                card.className = "card mb-3";
                card.innerHTML = `
                    <div class="card-body">
                        <h5 id="t" style="display:block" class="card-title">${post.title}</h5>
                        <button id="btn" onclick="visualizzaFoto()">Mostra immagini</button>
                        <img style="display:none" id="img" src="${post.thumbnailUrl}"> 
                    <div/>
                    
                `;
                container.appendChild(card);
            });
        })
        .catch(error => console.error("Errore nel recupero delle news:", error));
});

let visualizzaFoto =() => {
    if (document.getElementById("t").style.display == "none"){
        document.getElementById("t").style.display = "block";
        document.getElementById("img").style.display = "none";
        
    }else{
        document.getElementById("t").style.display = "none";
        document.getElementById("img").style.display = "block";
        document.getElementById("btn").textContent = "Torna indietro";
}};
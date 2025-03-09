//versione definitiva con aiuto gpt giu' ce la mia versione senza aiuto

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
                      <button id="btn" onclick="visualizzaFoto(this)">Mostra immagini</button>
                      <img style="display:none" id="img" src="${post.thumbnailUrl}"> 
                  </div>
              `;
              container.appendChild(card);
          });
      })
      .catch(error => console.error("Errore nel recupero delle news:", error));
});

// Funzione per mostrare/nascondere l'immagine e gestire la visibilità delle altre card
function visualizzaFoto(btn) {
    // Seleziona il container principale contenente tutte le card
    let newsContainer = document.getElementById("newsContainer");
    // Seleziona tutte le card
    let allCards = newsContainer.querySelectorAll(".card");
    // Seleziona la card relativa al bottone cliccato
    let card = btn.closest(".card");
    // All'interno della card, seleziona il titolo e l'immagine
    let title = card.querySelector("#t");
    let img = card.querySelector("#img");

    // Verifichiamo il testo del bottone per capire se dobbiamo mostrare o tornare indietro
    if (btn.textContent.trim() === "Mostra immagini") {
        // 1) Nascondiamo tutte le card
        allCards.forEach(c => {
            c.style.display = "none";
        });
        // 2) Mostriamo solo la card cliccata
        card.style.display = "block";
        // 3) Nella card cliccata, nascondiamo il titolo e mostriamo l'immagine
        title.style.display = "none";
        img.style.display = "block";
        // 4) Aggiorniamo il testo del pulsante
        btn.textContent = "Torna indietro";
    } else {
        // Ritorno alla visualizzazione originale
        allCards.forEach(c => {
            // Rendi nuovamente visibile ogni card
            c.style.display = "block";
            // In ciascuna card, nascondi l'immagine e mostra il titolo e il pulsante con il testo originale
            let cTitle = c.querySelector("#t");
            let cImg = c.querySelector("#img");
            let cBtn = c.querySelector("#btn");

            if (cTitle) cTitle.style.display = "block";
            if (cImg) cImg.style.display = "none";
            if (cBtn) cBtn.textContent = "Mostra immagini";
        });
    }
}
//verione mia senza aiuto
/*// Recupero e popolamento della select con gli utenti
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
*/
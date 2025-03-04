// Oggetto iniziale con le canzoni
let canzoni = {
    proprietà: {
        canzone1: {
            titolo: "Ciao ciao",
            nomeCantante: "Mario",
            anno: 2020,
            genere: "Rock"
        },
        canzone2: {
            titolo: "Ok",
            nomeCantante: "Giacomo",
            anno: 2021,
            genere: "Pop"
        }
    }
};

// Funzione per creare una nuova canzone
let Create = (canzoni) => {
    let numeroCanzone = prompt("Inserisci il nome della nuova canzone (es: canzone3):");
    let titolo = prompt("Inserisci il titolo della canzone:");
    let nomeCantante = prompt("Inserisci il nome del cantante:");
    let anno = parseInt(prompt("Inserisci l'anno di pubblicazione:"), 10);
    let genere = prompt("Inserisci il genere della canzone:");

    if (!numeroCanzone || !titolo || !nomeCantante || isNaN(anno) || !genere) {
        alert("Tutti i campi sono obbligatori e l'anno deve essere un numero.");
        return;
    }

    canzoni.proprietà[numeroCanzone] = {
        titolo: titolo,
        nomeCantante: nomeCantante,
        anno: anno,
        genere: genere
    };

    alert(`Canzone ${numeroCanzone} aggiunta con successo!`);
    GetCanzoni(canzoni);
};

// Funzione per aggiungere attributi a una canzone esistente
let SetCanzoni = (canzoni) => {
    let canzone = prompt("Inserisci il nome della canzone a cui aggiungere un attributo (es: canzone1):");
    let attributo = prompt("Inserisci il nuovo attributo (es: durata):");
    let valore = prompt("Inserisci il valore dell'attributo:");

    if (canzoni.proprietà[canzone]) {
        canzoni.proprietà[canzone][attributo] = valore;
        alert(`Attributo "${attributo}" aggiunto a ${canzone}.`);
        GetCanzoni(canzoni);
    } else {
        alert("La canzone specificata non esiste.");
    }
};

// Funzione per visualizzare tutte le canzoni
let GetCanzoni = (canzoni) => {
    let output = document.getElementById("output");
    output.innerHTML = ""; 

    for (let key in canzoni.proprietà) {
        let canzone = canzoni.proprietà[key];
        output.innerHTML += `<p><strong>${key}</strong>: Titolo - ${canzone.titolo}, Cantante - ${canzone.nomeCantante}, Anno - ${canzone.anno}, Genere - ${canzone.genere}</p>`;
    }
};

// Event listeners per i bottoni
document.getElementById("create").addEventListener("click", () => Create(canzoni));
document.getElementById("setAttributo").addEventListener("click", () => SetCanzoni(canzoni));
document.getElementById("getCanzoni").addEventListener("click", () => GetCanzoni(canzoni));

// Visualizza le canzoni all'inizio
GetCanzoni(canzoni);

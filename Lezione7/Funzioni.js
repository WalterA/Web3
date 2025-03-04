let rubrica = new Rubrica();

let CreaUtente = () => {
    let nome = prompt("Inserisci il nome");
    let cognome = prompt("Inserisci il cognome");
    let telefono = prompt("Inserisci telefono");
    let via = prompt("Inserisci via");
    let civico = prompt("Inserisci civico");

    if (nome && cognome && telefono && via && civico) {
        let nuovoUtente = new Utente(nome, cognome, telefono, via, civico);
        rubrica.aggiungiUtente(nuovoUtente);
        alert("Utente aggiunto!");
        Get();
    } else {
        alert("Compila tutti i campi.");
    }
};

let Get = () => {
    let container = document.getElementById("output");
    container.innerHTML = "";

    let utenti = rubrica.getUtenti();
    if (utenti.length === 0) {
        container.innerHTML = "<p>Nessun utente presente nella rubrica.</p>";
    } else {
        utenti.forEach((utente, index) => {
            let riga = document.createElement("p");
            riga.textContent = `${index + 1}. ${utente.nome} ${utente.cognome}, Tel: ${utente.telefono}, Indirizzo: ${utente.indirizzo.via}, ${utente.indirizzo.civico}`;
            container.appendChild(riga);
        });
    }
};

let EliminaUltimo = () => {
    rubrica.rimuoviUltimoUtente();
    Get();
};

document.getElementById("2").addEventListener("click", Get);
document.getElementById("3").addEventListener("click", EliminaUltimo);
document.getElementById("4").addEventListener("click", CreaUtente);

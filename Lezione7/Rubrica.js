class Rubrica {
    constructor() {
        this.utenti = []; // Array che conterrà gli utenti
    }

    aggiungiUtente(utente) {
        this.utenti.push(utente); // Aggiunge un utente all'array
    }

    rimuoviUltimoUtente() {
        if (this.utenti.length > 0) {
            this.utenti.pop();
        } else {
            alert("La rubrica è vuota.");
        }
    }

    getUtenti() {
        return this.utenti; // Restituisce l'elenco degli utenti
    }
}

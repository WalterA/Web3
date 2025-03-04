class Utente {
    constructor(nome, cognome, telefono, via, civico) {
        this.nome = nome;
        this.cognome = cognome;
        this.telefono = telefono;
        this.indirizzo = {
            via: via,
            civico: civico
        };
    }
}

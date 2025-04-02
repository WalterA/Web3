import React, { useState } from 'react';

const Bancomat = () => {
    const [users, setUsers] = useState(null);

    const visualizzadettaglio = async () => {
        try {
            const response = await fetch('http://localhost:8080/banca/getall');
            if (!response.ok) throw new Error("Errore nella risposta del server");
            const data = await response.json();
            setUsers(data); // Salva i dati degli utenti
        } catch (error) {
            console.error("Errore durante il recupero degli utenti:", error);
        }
    };

    const nascondiDettagli = () => {
        setUsers(null);
    };

    return (
        <div>
            <h1>Bancomat</h1>
            {!users && (
                <button onClick={visualizzadettaglio}>Visualizza Dettagli</button>
            )}
            {users && (
                <div id="dettagli">
                    {users.map((user, userIndex) => (
                        <div key={userIndex}>
                            <h2>Utente: {user.nome} {user.cognome}</h2>
                            <h3>Conti:</h3>
                            <ul>
                                {user.listaConti.map((conto, contoIndex) => (
                                    <li key={contoIndex}>
                                        <p>ID Conto: {conto.idConto}</p>
                                        <p>CC: {conto.cc}</p>
                                        <p>Saldo: {conto.saldo}</p>
                                        <p>Movimenti: {conto.movimenti.join(', ') || "Nessun movimento"}</p>
                                        <p>Contatore: {conto.contatore}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                    <button onClick={nascondiDettagli}>Indietro</button>
                </div>
            )}
        </div>
    );
};

export default Bancomat;
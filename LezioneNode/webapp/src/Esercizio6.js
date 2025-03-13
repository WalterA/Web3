import React from 'react';
import dati from './Prodotto.json';

const Esercizio6 = () => {
  return (
    <div>
      <h1>Lista Prodotti</h1>
      <ul>
        {dati.map((prodotto) => (
          <li key={prodotto.id}>
            {prodotto.nomeProdotto} {prodotto.descrizione} {prodotto.prezzo}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Esercizio6;

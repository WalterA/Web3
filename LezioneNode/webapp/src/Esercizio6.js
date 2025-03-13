import React from 'react';
import dati from './Prodotto.json';
import { singolo } from './ProdottoS';
import { prodotti } from './ProdottoS';

const Esercizio6 = () => {
  return (
    <div>
      <h1>Lista Prodotti</h1>
      
      <ul className="list-group" style={{width: "10%", margin: "auto"}}>
        {prodotti.map((prodotto) => (
          <li key={prodotto.id}>{prodotto.nomeProdotto} {prodotto.descrizione} {prodotto.prezzo}
          </li>
        ))}
        
      </ul>
    
      <h5>{singolo.nomeProdotto} {singolo.descrizione} </h5>
    </div>
  );
};

export default Esercizio6;

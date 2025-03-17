import React, { useState } from 'react';
import dati from './Prodotto.json';
import { singolo } from './ProdottoS';
import { prodotti } from './ProdottoS';

const Esercizio6 = () => {
  let [prodot,setP]=useState(prodotti);

  let Elimina = (nome) => {
      let nuovo=prodotti.filter(z=>z.nomeProdotto !== nome);
      setP(nuovo);
  }

  let cambiacolore = (el) => {
    prodot.forEach((z)=>{
      document.getElementById(z.id).style.backgroundColor = "red";
    })
    document.getElementById(el.id).style.backgroundColor==="red"? document.getElementById(el.id).style.backgroundColor="yellow":document.getElementById(el.id).style.backgroundColor="red";
    
  }
  
  return (
    <div>
      <h1>Lista Prodotti</h1>
      
      <ul className="list-group" style={{width: "10%", margin: "auto"}}>
        {prodot.map((prodotto,i) => 
          <h1 style={{backgroundColor:"red"}} id={prodotto.id} onClick={()=>{cambiacolore(prodotto)}} key={i}>{prodotto.nomeProdotto} {prodotto.descrizione} {prodotto.prezzo}
           <button className="btn btn-primary" onClick={()=>Elimina(prodotto.nomeProdotto)}>Elimina </button>
          </h1>
        )
        }
        
      </ul>
    
      <h5>{singolo.nomeProdotto} {singolo.descrizione} </h5>
    </div>
  );
}

export default Esercizio6;

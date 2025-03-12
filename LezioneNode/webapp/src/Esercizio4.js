import React, { useState } from 'react'

const Esercizio4 = () => {
    let numero = useState(0);
    let aumenta =(nu) => {
        nu++;
        numero[1](nu);
    }; 
    let diminuisci =(nu) => {
        nu--;
        numero[1](nu);
    };
  return (
    <div>Esercizio4
        <h1>{numero[0]}</h1>
        <button onClick={()=>aumenta(numero[0])}>Aumenta</button>
        <button onClick={()=>diminuisci(numero[0])}>Diminuisci</button>
    </div>

  )
}

export default Esercizio4
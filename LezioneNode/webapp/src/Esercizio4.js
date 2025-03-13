import React, { useEffect, useState } from 'react';

const Esercizio4 = () => {
  const [numero, setNumero] = useState(0);
  console.log("cod1");
  useEffect(() => {
    console.log("Sono all'interno di useEffect");
    if (numero === 0) {
    document.title = "Numero";
    } else if(numero>0){
      document.title = "Numero positivo";
    }else{
      document.title = "Numero negativo";
    }
  },[numero]);
  console.log("cod2");
  const aumenta = () => {
    setTimeout(() => {
      setNumero((numero) => numero + 1);
      console.log("sono aumenta");
    }, 2000);
  };

  const diminuisci = () => {
    setTimeout(() => {
      setNumero((numero) => numero - 1);
      console.log("cono diminuisci");
    }, 2000);
  };
  console.log("cod3");
  return (
    <div>
      {console.log("sono dentro")}
      <h1>{numero}</h1>
      <button onClick={aumenta}>Aumenta</button>
      <button onClick={diminuisci}>Diminuisci</button>
      {console.log("sono fuori")}
    </div>
  );
};

export default Esercizio4;

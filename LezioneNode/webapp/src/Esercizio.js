import React from 'react'
const Esercizio = (props) => {
  let lista = [];
  for(let i = 1; i <= 10; i++) {
      let n = i * props.numero;
      lista.push(n);
  }
  return (
      <div>
          Esercizio
          {
            lista.map((element, i) => {
              return <h1 key={i}>{element}</h1>
            })
          }
        
      </div>
  );
}


export default Esercizio
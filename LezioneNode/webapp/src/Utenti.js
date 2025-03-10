import React from 'react'

const Utenti = (props) => {
    console.log(props.ut);
   
  return (
    <div>Utenti
        { props.ut.map((element,i) => {
           return( <div key={i}>
            <h1>{element.name}</h1>
            <h1>{element.age}</h1>
            </div>

        )}) 
    }
    </div>
   //map torna qualcosa 
   //forEach non torna nulla
   //jsx ... render html nel caso di ciclo map vuole un id ..key
  )
  }

export default Utenti
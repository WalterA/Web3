import React, { useState } from 'react'

const Hook3 = () => {
    let [persona,setPe] =useState({
        nome :"Mario",
        cognome:"Rossi",
        eta : 23
    });
    let compleanno =() => {
        let anniattuali = persona.eta +1;
        setPe({...persona , eta:anniattuali});
    }

  return (
    <div>Hook3
        <h1>{persona.nome} {persona.cognome} {persona.eta}</h1>
        <button onClick={() => {compleanno({})}}>Compleanno </button>


    </div>
  )
}

export default Hook3
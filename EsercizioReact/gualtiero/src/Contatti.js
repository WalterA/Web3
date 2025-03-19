import React, { useState } from 'react'

const Contatti = () => {

  let [nome, setNome]= useState();
  let [cognome, setCognome]= useState();
  let [validN, setValidN]= useState(true);
  let [validC, setValidC]= useState(true);
  
  let control = (e) => {
    e.preventDefault();
    console.log(nome);
    console.log(cognome);
    if (!nome && !cognome) {
      setValidN(false);
      setValidC(false);
      alert("Campi vuoti");
    } else if (!nome) {
      setValidN(false);
      setValidC(true);
      alert("Inserire nome");
    } else if (!cognome) {
      setValidN(true);
      setValidC(false);
      alert("Inserire cognome");
    } else {
      setValidN(true);
      setValidC(true);
      alert("Campi completi");
    }
    
    }
  return (
    <div>Contatti
      <form onSubmit={control}>
        Nome : <input style={{backgroundColor: validN? "white": "red"}} onChange={(e)=>{setNome(e.target.value)}} value={nome} type="text"/>
        Cognome : <input style={{backgroundColor: validC? "white": "red"}} onChange={(e)=>{setCognome(e.target.value)}} value={cognome} type="text"/>
        <button type = "submit">Invia</button>
      </form>

    </div>
  )
}

export default Contatti
import React, { useState } from 'react'

const Gestione = () => {
    let [nome, setNome] = useState("");
    let [cognome, setCognome] = useState("");
    let [messaggio, setMessaggio] = useState("");
    let controlla = (e) => {
        e.preventDefault();
    }

  return (
    <div>
        {/* HTML : <FORM> AUTOMATICAMENTE INVIA IL FORM AD UN SEVER TRAMITE UN ACTION */}
        <h1>Contatti</h1>
        <form onSubmit={controlla}>
            Nome : <input type="text" id="nome" onChange={(e)=>{setNome(e.target.value)}}value={nome} /> <br/>
            Cognome : <input type="text" id="cognome"  onChange={(e)=>{setCognome(e.target.value)}} value={cognome}/> <br/>
            Messaggio : <input type="text" id="messaggio"  onChange={(e)=>{setMessaggio(e.target.value)}} value={messaggio}/> <br/>
            <button type = "submit">Invia</button>
        </form>



    </div>
  )
}

export default Gestione
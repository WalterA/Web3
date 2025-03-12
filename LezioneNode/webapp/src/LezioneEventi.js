import React, { useState } from 'react'

const LezioneEventi = () => {
    //let visualizza =(x) => {
    //    alert("ciao"+' '+ x);
    //}
    let saluto = useState("ciao"); //torna due valori all'interno dell'arrey
    //1 valore attuale
    //2 metodo set
    let [saluto3, setSaluto3] = useState("ciao");

    let cambiavalore =() => {
        saluto[1]("arrivedeci");
        setSaluto3("CIAO");
        console.log(saluto);

    };

  return (
    <div>LezioneEventi
            {/*<button onClick={visualizza()}>Salutami</button>
            <button onClick={visualizza}>Salutami</button>
            <button onClick={()=>{visualizza('addio')}}>Salutami</button>
                */}
                Hooks1
                <h1>{saluto[0]}</h1>
               
                <button onClick={cambiavalore}>Cambia</button>
                
            

    
    </div>
  )
}

export default LezioneEventi
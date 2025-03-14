import React, { useState } from 'react'

const Cuoricini = () => {
    let zero = useState(0);
    let [numero,setN] = useState(0);
    let [dieci,setD] = useState(2);
    let Cambia = () => {
        
        if ( dieci != 0) {
            if (numero > zero){
            dieci -=1;
            setD(dieci);
            zero[1](numero);
        }}
    }
  return (
    <div>Cuoricini
            <form>
                <div className="mb-3">
                    <label htmlFor="nome" className="form-label">Nome prodotto</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="nome" 
                        value={numero} 
                        onChange={(e) => setN(e.target.value)} 
                    />
                </div>
                <button type="button" className="btn btn-primary" onClick={Cambia}>
                    Calcola
                </button>
            </form>
            <h1>{zero[0]}</h1>
    </div>
  )
}

export default Cuoricini
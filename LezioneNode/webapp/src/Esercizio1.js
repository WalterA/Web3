import React from 'react'

const Esercizio1 = (props) => {
    let lista = [];
    for (let i = 0; i < 11; i++) {
        lista.push(i)
    }
    let lista2 = [];
    for (let i = 2; i < 16; i++) {
        lista2.push(i)
    }
    let lista3 = [];
    let lista4 = [];
    for (let i = 0; i < 21; i+=2) {
        lista3.push(i)
        lista4.push(i*2)
    }
    return (    
        <div>
            <h2>Esercizio1</h2>
                    <h1>{lista}</h1>
                    <h1>{lista2}</h1>
                    <h1>{lista3}</h1> 
                    <h1>{lista4}</h1>
            
        </div>
    );
}


export default Esercizio1
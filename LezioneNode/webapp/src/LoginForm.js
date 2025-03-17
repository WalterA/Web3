import React, { useState } from 'react'
import { utenti } from './Login';

const LoginForm = () => {

    let [mieutenze, setmieutenze] = useState(utenti);
    let [esito,setesito] = useState("");
    let [visualizzaCambio, setvisualizzaCambio] = useState(false);
    let [strverifica, setstrverifica] = useState(false);
    let [utenteLoggato, setutenteLoggato] = useState();

    let verifica = () => {

        let user = document.getElementById("user").value;
        let pass = document.getElementById("pass").value;
        
        mieutenze.map( (el) => {
            if(el.username == user && el.password == pass){
                setstrverifica(true);
                setutenteLoggato(el);
            }
        })

        if(verifica){
            setesito("TUTTO OK");
        }else{
            setesito("LOGIN ERRATA");
        }
    }

    let cambio = () => {
        setvisualizzaCambio(true);  
    }

    let cambiopwd = () => {
        
        let pass = document.getElementById("nuovapass").value;

        let utenteModifica = {
            id :utenteLoggato.id,
            username : utenteLoggato.username,
            password : pass
        }

        let nuovalista = mieutenze.filter( x => x.id != utenteModifica.id);
        nuovalista.push(utenteModifica);
        console.log("utenteModifica");
        console.log(utenteModifica);
        console.log(nuovalista);
        for(let i of utenti){
            if (i.password !== utenteModifica.password && i.id === utenteModifica.id){
               return utenti.password= utenteModifica.password;
            }
            console.log(utenti);
        }
    }

  return (
    <div>
        <h1>Esercizio4_9</h1>
            UserName <input type="text" id="user"/><br/>
            Password <input type="text" id="pass"/><br/>
            <button onClick={ () => { verifica() }}>INVIA</button>
            <button onClick={ () => { cambio() }}>CAMBIO PASSWORD</button>
            <div> {esito} </div>
            { strverifica && <div style={{ display : visualizzaCambio ? "block" : "none"}} >
                <input type="text" id="nuovapass"/>
                <button onClick={ () => { cambiopwd() }}>CONFERMA</button>
            </div> }
    </div>
  )
}

export default LoginForm
import React, { useEffect, useState } from 'react';
import { utenti } from './Login';



const LoginNuovo = () => {
    let [username,setUser] = useState('');
    let [password,setPass] = useState('');
   
    let [verifica,setVerifica] = useState(false);
    let [showPassword, setShowPassword] = useState(false);
    let [utenteLoggato, setUtenteLoggato] = useState(false);
    
    let bool=()=>{
        let alert = document.getElementById("alert");
        let ok = "";
        let bool = false;
    for (let utente of utenti) {
        if (utente.username === username && utente.password === password) {
            ok="«login success»"; 
            alert.innerText = ok;
            alert.style.color = "green";
            setUtenteLoggato(utente);
            setVerifica(true);
            bool = true;
           
        }
    };
    if (!bool){
    ok="«login failed»";
    alert.innerText = ok;
    alert.style.color = "red";
    setVerifica(false);
 }

};

let Cambiapass = () => {
    let pass = document.getElementById("nuovapass").value;

    let utenteModifica = {
        id :utenteLoggato.id,
        username : utenteLoggato.username,
        password : pass
    }
    for (let utente of utenti) {
        if (utente.id === utenteModifica.id && utente.password !== utenteModifica.password) {
            utente.password = utenteModifica.password;
        }
    }
 console.log(utenti);
};


return (
    <div>LoginForm
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 mt-5 mx-auto'>
                    <input type='text' className='form-control' placeholder='UserName' value={username}  onChange={(e) => setUser(e.target.value)} />
                    <input type='password' className='form-control' placeholder='Password'value={password}  onChange={(e) => setPass(e.target.value)}/>
                    <button id="Btn" className='btn btn-lg btn-primary btn-block' onClick={bool}>Login</button>
                    <div id="alert" className="alert alert-primary" role="alert"></div>
                    {verifica && <div style={{display : verifica ? "block" : "none"}}>
                    <input id="nuovapass" type={showPassword ? "text" : "password"} />
                    <button type="button" onClick={() => setShowPassword(!showPassword)} 
                    className="absolute right-2 top-2 text-gray-600 hover:text-gray-800">
                    {showPassword ?"🙈" : "👁️" } </button>
                    <button onClick={Cambiapass}>Conferma</button>
                    </div>}
                </div>
            </div>
        </div>






    </div>
)};


export default LoginNuovo;
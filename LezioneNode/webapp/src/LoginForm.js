import React, { useEffect, useState } from 'react';
import {utenti} from './Login';


const LoginForm = () => {
    let [username,setUser] = useState('');
    let [password,setPass] = useState('');
    let [visualizzaCambio , setVisualizzaCambio] = useState(false);
    let [nuovo , setNuovo] = useState({})
    let [nuovapass, setNuovapass] = useState("")

    let bool=()=>{
        
        let ok = "";
        let alert = document.getElementById("alert");
        let bool = false;
    for (let utente of utenti) {
        if (utente.username === username && utente.password === password) {
            ok="«login success»"; 
            setNuovo(utente);
        
            alert.innerText = ok;
            alert.style.color = "green";
            bool = true;
                
        }};
        if (!bool){
            ok="«login failed»";
      
            alert.innerText = ok;
            alert.style.color = "red";
        };
    };
    
    let cambio=(el)=>{
        setVisualizzaCambio(true);
        let ok="";
        let pass=document.getElementById("cambio");
        setNuovo({
            username: el.username,
            
        })

        


    }

return (
    <div>LoginForm
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 mt-5 mx-auto'>
                    <input type='text' className='form-control' placeholder='UserName' value={username}  onChange={(e) => setUser(e.target.value)} />
                    <input type='password' className='form-control' placeholder='Password'value={password}  onChange={(e) => setPass(e.target.value)}/>
                    <button id="Btn" className='btn btn-lg btn-primary btn-block' onClick={bool}>Login</button>
                    <button id="Btn" className='btn btn-lg btn-primary btn-block' onClick={cambio}>Cambio</button>
                    <div id="alert" className="alert alert-primary" >Benvenuto</div>
                    {visualizzaCambio && <div style={{ display: visualizzaCambio ? 'block' : ' none'}}>
                    <button id="Btn" className='btn btn-lg btn-primary btn-block' onClick={cambio}>Conferma</button>
                    <input type='password' className='form-control' placeholder='Password'value={nuovapass}  onChange={(e) => setPass(e.target.value)}/>
                    <div id="cambio" className="alert alert-primary" ></div>
                    </div>}

                </div>
            </div>
        </div>






    </div>
  )};


export default LoginForm
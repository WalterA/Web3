import React, { useEffect, useState } from 'react';
import {utenti} from './Login';


const LoginForm = () => {
    let [username,setUser] = useState('');
    let [password,setPass] = useState('');
    let alert = document.getElementById("alert");
    let bool=()=>{
        let ok = "";
    for (let utente of utenti) {
        if (utente.username === username && utente.password === password) {
            ok="«login success»"; 
        
            alert.innerText = ok;
            alert.style.color = "green";
            break;          
        }else{
            ok="«login failed»";
      
            alert.innerText = ok;
            alert.style.color = "red";
            break;
        }
    }};
    


return (
    <div>LoginForm
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 mt-5 mx-auto'>
                    <input type='text' className='form-control' placeholder='UserName' value={username}  onChange={(e) => setUser(e.target.value)} />
                    <input type='password' className='form-control' placeholder='Password'value={password}  onChange={(e) => setPass(e.target.value)}/>
                    <button id="Btn" className='btn btn-lg btn-primary btn-block' onClick={bool}>Login</button>
                    <div id="alert" className="alert alert-primary" role="alert"></div>
                </div>
            </div>
        </div>






    </div>
  )};


export default LoginForm
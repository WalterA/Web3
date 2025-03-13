import React, { useState } from 'react'

const Form = () => {
    let [contatotre,setconta]=useState(0);
    const [anno, setAnno] = useState('');
 
    let calcola=()=>{
        if (!isNaN(parseInt(anno))){
            let x = 2025 - parseInt(anno);
            setconta(x);
        }

    }
  return (
    <div>Form
        <form>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Nome</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Cognome</label>
    <input type="text" className="form-control" id="exampleInputPassword1" />
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Anno</label>
    <input type="number" className="form-control" id="anno" value={anno}
            onChange={(e) => setAnno(e.target.value)} />
  </div>
  <button type="submit" className="btn btn-primary" onClick={calcola}>Calcola </button>
</form>
<h1>{contatotre}</h1>
    </div>

  )
}

export default Form
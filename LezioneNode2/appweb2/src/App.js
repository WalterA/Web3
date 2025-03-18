import logo from './logo.svg';
import './App.css';
import Lezione6 from './Lezione6';
import { useState } from 'react';
import Gestione from './Gestione';

function App() {
  const [show, setShow] = useState(false);


  let cambia = () => {
    setShow(!show);
  };

  return (
    <div className="App">
      <button onClick={cambia}> {show ? 'Nascondi': 'Visualizza'}</button>
      {show && <Lezione6/>}
      <Gestione/>
    </div>
  );
}

export default App;

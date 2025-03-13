import logo from './logo.svg';
import './App.css';
import Menu from './Menu';
import Utenti from './Utenti';
import Esercizio from './Esercizio';
import Esercizio1 from './Esercizio1';
import LezioneEventi from './LezioneEventi';
import Hook2 from './Hook2';
import Hook3 from './Hook3';
import Esercizio4 from './Esercizio4';
//let numero = parseInt(prompt("Inserisci un numero"), 10);
const App=() =>{
  let persona={
    name: "Gigi",
    age: 25,
    occupation: "Developer"
  };
  

  let lista =[{name: "Gigi"},{name: "G"},{name: "fili"}]
  let lista2 = [];
  return (
    <div className="App">
      <h1>Componente Radice</h1>
      {/*<Menu nome="Mario" cognome="F"/>
      <Menu nome="Giacomo"/>
      <Menu {...persona}/>
      <Utenti ut={lista}/>
      <Esercizio numero={numero}/>
      <Esercizio1 nu={lista2} />
      <LezioneEventi/>
      <Hook2/>
      <Hook3/>*/}
      <Esercizio4/>
    </div>
  );
}

export default App;

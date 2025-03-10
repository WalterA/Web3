import logo from './logo.svg';
import './App.css';
import Menu from './Menu';
import Utenti from './Utenti';

const App=() =>{
  let persona={
    name: "Gigi",
    age: 25,
    occupation: "Developer"
  }
  let lista =[{name: "Gigi"},{name: "G"},{name: "fili"}]
  return (
    <div className="App">
      <h1>Componente Radice</h1>
      <Menu nome="Mario" cognome="F"/>
      <Menu nome="Giacomo"/>
      <Menu {...persona}/>
      <Utenti ut={lista}/>
    </div>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Lezione6 from "./Lezione6";
import Gestione from "./Gestione";

function App() {
  
  return (
    <Router>
      {/* Menu di navigazione */}
      <nav>
        <Link to="/">Lezione6</Link> | 
        <Link to="/gestione">Gestione</Link>
      </nav>

      {/* Definizione delle rotte */}
      <Routes>
        <Route path="/" element={<Lezione6 />} />
        <Route path="/gestione" element={<Gestione />} />
      </Routes>
    </Router>
  );
}

export default App;

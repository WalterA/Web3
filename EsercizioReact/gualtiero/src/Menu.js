import React from 'react'
import { BrowserRouter , Routes, Route, Link } from "react-router-dom";
import Home from './Home';
import Chi from './Chi';
import Contatti from './Contatti';

const Menu = () => {
  return (
    <BrowserRouter>
      <div>
        <Link style={{ textDecoration: "none" }} to="/Home">Home</Link><span> | </span>
        <Link style={{ textDecoration: "none" }} to="/ChiSono">Chi sono</Link> <span> | </span>
        <Link style={{ textDecoration: "none" }} to="/Contatti">Contatti</Link> 
      </div>
        <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/ChiSono" element={<Chi />} />
            <Route path="/Contatti" element={<Contatti />} />
        </Routes>
      </BrowserRouter>
  );
}

export default Menu;
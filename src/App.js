import React from "react";
import Navbar from "./Navbar";
import { Route, Routes } from "react-router-dom";
import Pokedex from "./Pokedex";
import About from "./About";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/Pokedex" element={<Pokedex />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </>
  );
}

export default App;

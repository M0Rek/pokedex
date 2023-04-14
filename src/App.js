import React from "react";
import Navbar from "./Navbar";
import { Route, Routes } from "react-router-dom";
import PokeCard from "./PokeCard";
import Pokedex from "./Pokedex";
import About from "./About";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Pokedex />} />
        <Route path="/PokeCard" element={<PokeCard />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </>
  );
}

export default App;

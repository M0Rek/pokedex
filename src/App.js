import React from "react";
import Navbar from "./Navbar";
import { Route, Routes, Navigate } from "react-router-dom";
import Pokedex from "./Pokedex";
import About from "./About";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Navigate to="/Home" />} />
        <Route path="/Home" element={<Pokedex />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </>
  );
}

export default App;

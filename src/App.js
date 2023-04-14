import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import PokeEntry from "./PokeEntry";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((response) => response.json())
      .then((data) => setData(data.results));
  }, []);

  return (
    <>
      <h1>Pokedex</h1>

      <Grid container spacing={4}>
        {data.map((item) => (
          <Grid  item>
            <PokeEntry key={item.name} pokemon={item} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default App;

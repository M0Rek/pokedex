import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import PokeEntry from "./PokeEntry";
import Pagination from "./Pagination";
import Navbar from "./Navbar";

function App() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const previousPage = () => {
    if (currentPage <= 1) {
      return;
    }
    setCurrentPage(currentPage - 1);
  };

  useEffect(() => {
    fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=20&offset=" +
        (currentPage - 1) * 20
    )
      .then((response) => response.json())
      .then((data) => setData(data.results));
  }, [currentPage]);

  return (
    <>
      <Navbar />
      <Grid container justifyContent="center" spacing={4}>
        {data.map((item) => (
          <Grid key={item.name} item lg={2} md={3} sm={4} xs={12}>
            <PokeEntry pokemon={item} />
          </Grid>
        ))}
      </Grid>
      <Pagination previous={previousPage} page={currentPage} next={nextPage} />
    </>
  );
}

export default App;

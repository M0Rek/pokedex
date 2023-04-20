import { Grid, Modal, Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import PokeEntry from "./PokeEntry";
import Pagination from "./Pagination";
import PokeCard from "./PokeCard";
import PokemonAutocomplete from "./PokemonAutocomplete";

export default function Pokedex() {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);
  const [cardPokemon, setCardPokemon] = useState(null);
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

  const handleOpen = (pokemon) => {
    setCardPokemon(pokemon);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

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
      <Box m={4}>
        <PokemonAutocomplete onPokemonSelected={handleOpen} />
        <Grid container justifyContent="center" spacing={4}>
          {data.map((item) => (
            <Grid key={item.name} item lg={2} md={3} sm={4} xs={12}>
              <PokeEntry onClick={handleOpen} pokemon={item} />
            </Grid>
          ))}
        </Grid>
      </Box>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <PokeCard close={handleClose} pokemon={cardPokemon} />
        </Box>
      </Modal>
      <Pagination previous={previousPage} page={currentPage} next={nextPage} />
    </>
  );
}

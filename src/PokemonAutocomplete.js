import React, { useState, useEffect } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { typeColors } from "./PokeTypeColors";
import { Box } from "@mui/system";

const PokemonAutocomplete = ({ onPokemonSelected }) => {
  const [pokemonList, setPokemonList] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=1118")
      .then((response) => response.json())
      .then((data) => setPokemonList(data.results));
  }, []);

  const handleAutocompleteChange = (event, value) => {
    if (value == null) {
      return;
    }

    setSearchText(value ? value.name : "");

    const fetchPokemon = async () => {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon/" + value.name
      );
      const data = await response.json();
      const pokemon = {
        ...data,
        image: data.sprites.front_default,
        bgColor: typeColors[data.types[0].type.name], //TODO: add check for unknown types
      };
      onPokemonSelected(pokemon);
    };

    fetchPokemon();
  };

  return (
    <Box mb={2}>
      <Autocomplete
        options={pokemonList}
        getOptionLabel={(option) => option.name}
        value={searchText ? { name: searchText } : null}
        isOptionEqualToValue={(option, value) => option.name === value.name}
        onChange={handleAutocompleteChange}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search Pokémon"
            variant="outlined"
            fullWidth
          />
        )}
      />
    </Box>
  );
};

export default PokemonAutocomplete;

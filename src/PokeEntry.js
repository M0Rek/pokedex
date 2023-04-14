import { CardContent, CardMedia, Typography, Card } from "@mui/material";
import React, { useEffect, useState } from "react";

function PokeEntry(props) {
  const [pokemonData, setPokemonData] = useState({ image: null, name: null });
  const { pokemon } = props;

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/" + pokemon.name)
      .then((response) => response.json())
      .then((data) => setPokemonData({image: data.sprites.front_default, name: data.name}));
  }, [pokemon]);

  return (
    <>
      <Card sx={{width: 275}}>
        <CardMedia
          component="img"
          height="70"
          image={pokemonData.image}
          sx={{objectFit: "contain"}}
        />
        <CardContent>
          <Typography gutterButtom variant="h5" component="div">
            {pokemon.name}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}

export default PokeEntry;

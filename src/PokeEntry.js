import { CardContent, CardMedia, Typography, Card } from "@mui/material";
import React, { useEffect, useState } from "react";
import { typeColors } from "./PokeTypeColors";
import { capitalize } from "./Utilites";

function PokeEntry(props) {
  const [pokemonData, setPokemonData] = useState({
    image: null,
    name: null,
    bgColor: "#A8A878",
  });
  const { name } = props.pokemon;
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + name);
      const data = await response.json();
      setPokemonData({
        ...data,
        image: data.sprites.front_default,
        bgColor: typeColors[data.types[0].type.name], //TODO: add check for unknown types
      });
    };
    fetchData();
  }, [name]);

  const handleClick = () => {
    props.onClick(pokemonData);
  };

  return (
    <>
      <Card
        onClick={handleClick}
        style={{
          backgroundColor: pokemonData.bgColor,
          color: "white",
          fontWeight: "500",
        }}
      >
        <CardMedia
          component="img"
          image={pokemonData.image}
          sx={{ objectFit: "contain" }}
        />
        <CardContent>
          <Typography variant="h5" component="div">
            {capitalize(pokemonData.name)}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}


export default PokeEntry;

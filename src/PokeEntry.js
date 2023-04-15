import { CardContent, CardMedia, Typography, Card } from "@mui/material";
import React, { useEffect, useState } from "react";

const typeColors = {
  normal: "#A8A878",
  fire: "#F08030",
  water: "#6890F0",
  electric: "#F8D030",
  grass: "#78C850",
  ice: "#98D8D8",
  fighting: "#C03028",
  poison: "#A040A0",
  ground: "#E0C068",
  flying: "#A890F0",
  psychic: "#F85888",
  bug: "#A8B820",
  rock: "#B8A038",
  ghost: "#705898",
  dragon: "#7038F8",
  dark: "#705848",
  steel: "#B8B8D0",
  fairy: "#EE99AC",
};

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

function capitalize(word) {
  if (word != null) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
}

export default PokeEntry;

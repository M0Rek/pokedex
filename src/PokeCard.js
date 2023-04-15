import {
  CardContent,
  CardMedia,
  Card,
  CardHeader,
  CardActions,
  Button,
  Grid,
  Chip,
  Box,
} from "@mui/material";
import { typeColors } from "./PokeTypeColors";
import { capitalize } from "./Utilites";

export default function PokeCard(props) {
  const pokemon = props.pokemon;

  return (
    <Card>
      <CardHeader title={capitalize(pokemon.name)} />
      <Box sx={{ margin: "16px" }}>
        {pokemon.types.map(({ type }) => (
          <Chip
            key={type.name}
            label={type.name.toUpperCase()}
            sx={{
              bgcolor: typeColors[type.name],
              color: "white",
              marginRight: "10px",
              fontWeight: "bold",
            }}
          />
        ))}
      </Box>
      <Grid container>
        <Grid item xs={6}>
          <CardContent>
            {console.log(pokemon)}
              <p>Id: {pokemon.id}</p> 
              <p>HP: {pokemon.name} Attack: Defense: </p>  
              <p>Special attack: Special defense: Speed: Base Experience: {pokemon.base_experience} Height: {pokemon.height}</p>
              <p>Weight: {pokemon.weight} Abilities: Moves:</p>
          </CardContent>
        </Grid>
        <Grid item xs={6}>
          <CardMedia
            component="img"
            image={pokemon.image}
            sx={{ objectFit: "contain", maxHeight: "400px" }}
            alt="Image of Pokemon name"
          />
        </Grid>
      </Grid>

      <CardActions>
        <Button onClick={props.close}>Close</Button>
      </CardActions>
    </Card>
  );
}

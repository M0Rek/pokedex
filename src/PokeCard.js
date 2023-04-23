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
  Typography,
  ListItem,
  List,
} from "@mui/material";
import { typeColors } from "./PokeTypeColors";
import { capitalize } from "./Utilites";

export default function PokeCard(props) {
  const pokemon = props.pokemon;

  return (
    <Card>
      <CardHeader title={capitalize(pokemon.name)} />
      <Box sx={{ margin: "8px" }}>
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
          <CardContent
            sx={{
              mb: 2,
              display: "flex",
              flexDirection: "column",
              height: "30vh",
              overflow: "hidden",
              overflowY: "scroll",
            }}
          >
            <Typography>
              <List xs={{ listStyleType: "none", py: 0 }}>
                <ListItem>Id: {pokemon.id}</ListItem>
                <ListItem>Height: {pokemon.height}</ListItem>
                <ListItem>Weight: {pokemon.weight}</ListItem>
                {pokemon.stats.map((stat) => (
                  <ListItem>
                    {stat.stat.name}: {stat.base_stat}
                  </ListItem>
                ))}
              </List>
            </Typography>
            {console.log(pokemon)}
          </CardContent>
        </Grid>
        <Grid item xs={6}>
          <CardMedia
            component="img"
            image={pokemon.image}
            sx={{
              objectFit: "contain",
              minHeight: "30vh",
              maxHeight: "50vh",
              alignItems: "center",
            }}
            alt="Image of Pokemon name"
          />
        </Grid>
      </Grid>

      <CardActions>
        <Button variant="contained" color="secondary" onClick={props.close}>
          Close
        </Button>
      </CardActions>
    </Card>
  );
}

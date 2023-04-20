import { Box, Container, Typography } from "@mui/material";

export default function About() {
  return (
    <Container maxWidth="sm">
      <Box m={2} textAlign="center">
        <Typography variant="h2" component="h1">
          About Pokedex
        </Typography>
      </Box>
      <Box m={2}>
        <Typography variant="body1">
          Pokedex is a web application that allows you to browse and search for
          information about different Pokemons. You can view details, as well as
          see images of each Pokemon.
        </Typography>
      </Box>
      <Box m={2}>
        <Typography variant="body1">
          This app was built using React and the Material UI component library.
          The data for each Pokemon was sourced from the PokeAPI, a free and
          open API for Pokemon data.
        </Typography>
      </Box>
    </Container>
  );
}

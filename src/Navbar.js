import React from "react";
import { AppBar, Toolbar, Button, styled } from "@mui/material";

const NavButton = styled(Button)({
  fontSize: "1.5rem",
  marginRight: "10px",
});

function Navbar() {
  return (
    <AppBar sx={{ mb: 2 }} position="static">
      <Toolbar>
        <NavButton color="inherit">Pokedex</NavButton>
        <NavButton color="inherit">About</NavButton>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;

import React from "react";
import { AppBar, Toolbar, Button, styled } from "@mui/material";
import { Link } from "react-router-dom";

const NavButton = styled(Button)({
  fontSize: "1.5rem",
  marginRight: "10px",
});

function Navbar() {
  return (
    <AppBar sx={{ mb: 2 }} position="static">
      <Toolbar>
        <NavButton component={Link} to="/" color="inherit">
          Pokedex
        </NavButton>
        <NavButton component={Link} to="/About" color="inherit">
          About
        </NavButton>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;

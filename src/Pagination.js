import React from "react";
import { Box, Button } from "@mui/material";

function Pagination(props) {
  return (
    <Box display={"flex"} m={2} justifyContent={"center"} width={"fullWidth"}>
      <Button variant="contained" color="secondary" onClick={props.previous}>
        Prev
      </Button>
      <Button
        variant="contained"
        color="secondary"
        sx={{ marginLeft: "1rem" }}
        onClick={props.next}
      >
        Next
      </Button>
    </Box>
  );
}

export default Pagination;

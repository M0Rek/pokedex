import React from "react";
import { Button } from "@mui/material";

function Pagination(props) {
  return (
    <>
      <Button onClick={props.previous}>Previous</Button>
      <Button onClick={props.next}>Next</Button>
    </>
  );
}

export default Pagination;

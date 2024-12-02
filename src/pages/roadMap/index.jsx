import React from "react";
import { Typography, Container, Box, Card, CardContent } from "@mui/material";
import { makeStyles } from "@mui/styles";
import mapingAry from "./data";

const Roadmap = () => {
  const classes = useStyles();
  return <Box>Roadmap</Box>;
};

export default Roadmap;

const useStyles = makeStyles((theme) => ({
  cardBody: {
    backgroundColor: "transparent",
  },
}));

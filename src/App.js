import { Box } from "@mui/material";
import React from "react";
import Roadmap from "./pages/roadMap";
import Header from "./components/header";
import backImage from "./assets/kennedytheairflow_An_underground_cartoon_tunnel_system_sprawlin (1).png";

const App = () => {
  return (
    <Box sx={{ backgroundImage: `url('${backImage}')` }}>
      <Header />
      <Roadmap />
    </Box>
  );
};

export default App;
//////////////////////

import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import Header from "../header";

const Layout = () => {
  return (
    <Box>
      <Header />
      <Box pt={20}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;

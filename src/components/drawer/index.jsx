import { Box, Link } from "@mui/material";
import React from "react";
import TelegramIcon from "@mui/icons-material/Telegram";
import XIcon from "@mui/icons-material/X";
import RedditIcon from "@mui/icons-material/Reddit";
import DiscordIcon from "../discordIcon";
import logo from "../../assets/logo.png";
import { makeStyles } from "@mui/styles";

const DrawerComponent = () => {
  const classes = useStyles();
  return (
    <Box className={classes.mainDrawer}>
      <Box className={classes.imgBox}>
        <img
          src={logo}
          alt=""
          width={"40px"}
          height={"40px"}
          style={{ objectFit: "cover" }}
        />
        <Box className={classes.linksName}>
          <Link className={classes.link}>Meme Page</Link>
        </Box>
      </Box>
      <Box className={classes.iconBox}>
        <XIcon className={classes.icons} />
        <RedditIcon className={classes.icons} />
        <TelegramIcon className={classes.icons} />
        <DiscordIcon className={classes.icons} />
      </Box>
    </Box>
  );
};

export default DrawerComponent;
const useStyles = makeStyles((theme) => ({
  // mainDrawer: {

  // },
  icons: {
    backgroundColor: "#000",
    color: "#fff",
    padding: "5px",
    borderRadius: "10px",
    fontSize: "18px !important",
    cursor: "pointer",
    transition: "transform 0.4s ease in", // Smooth scaling transition
    "&:hover": {
      transform: "scale(1.2)", // Scale the whole icon
    },
  },
  iconBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "2rem",
    padding: "1rem",
  },
  imgBox: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: "1rem",
  },
  linksName: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  link: {
    textDecoration: "none !important",
    fontSize: "17px !important",
    fontWeight: "400 !important",
    color: "black !important",
    cursor: "pointer",
    fontFamily: "Chewy !important",
    "&:hover": {
      textDecoration: "underline !important",
    },
  },
}));

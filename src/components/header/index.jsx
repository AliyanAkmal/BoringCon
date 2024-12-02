import { Box, Button, Link } from "@mui/material";
import { makeStyles } from "@mui/styles";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import TelegramIcon from "@mui/icons-material/Telegram";
import XIcon from "@mui/icons-material/X";
import RedditIcon from "@mui/icons-material/Reddit";
import logo from "../../assets/logo.png";
import DiscordIcon from "../discordIcon";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import useMediaQuery from "@mui/material/useMediaQuery";
import DrawerComponent from "../drawer";
import CloseIcon from "@mui/icons-material/Close";
const Header = () => {
  const classes = useStyles();
  const [menu, setMenu] = useState(false);

  const matches = useMediaQuery("(max-width:730px)");
  //////////////////////////
  const handleMenuLClick = () => {
    setMenu(!menu);
  };
  const handleClose = () => {
    setMenu(!menu);
  };

  return (
    <Box className={classes.header}>
      {menu ? (
        <CloseIcon
          sx={{ display: matches ? "block" : "none" }}
          onClick={handleClose}
        />
      ) : (
        <MenuIcon
          onClick={handleMenuLClick}
          sx={{ display: matches ? "block" : "none" }}
        />
      )}

      {menu ? (
        <Box
          sx={{
            position: "absolute",
            top: "110%",
            width: "80%",
            backgroundColor: "white !important",
            display: matches ? "block" : "none",
          }}
        >
          {" "}
          <DrawerComponent />
        </Box>
      ) : null}
      <Box sx={{ display: matches ? "none" : "flex", gap: 2 }}>
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
      <Box
        sx={{
          display: matches ? "none" : "flex",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Box sx={{ display: "flex", gap: 1 }}>
          <XIcon className={classes.icons} />
          <RedditIcon className={classes.icons} />
          <TelegramIcon className={classes.icons} />
          <DiscordIcon className={classes.icons} />
          {/* <img src={discord} width={'40px'} height={'40px'} alt="" /> */}
        </Box>
      </Box>

      <Box>
        <Button
          startIcon={<LocalGroceryStoreIcon />}
          className={classes.button}
        >
          buy the crypto
        </Button>
      </Box>
    </Box>
  );
};

export default Header;

/////////
const useStyles = makeStyles((theme) => ({
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 2rem",
    backgroundColor: "white",
    borderRadius: "10px",
    position: "fixed",
    top: "8%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    minWidth: "60%",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
  },
  linksName: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  toolbar: {
    color: "#F9BC6D",
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
  button: {
    backgroundColor: "#f1c898 !important",
    borderRadius: "10px !important",
    fontSize: "14px !important",
    fontWeight: "600",
    color: "#000000 !important",
    textTransform: "capitalize !important",
    padding: "8px 15px !important",
    fontFamily: "Chewy !important",
    "&:hover": {
      backgroundColor: "#F9A85C !important",
    },
  },
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
}));

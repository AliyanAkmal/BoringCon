import { Box, Button, Link, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const Header = () => {
  const classes = useStyles();
  return (
    <Box position="sticky" className={classes.header}>
      <Typography variant="h5" className={classes.toolbar}>
        Boring Coin
      </Typography>
      <Box className={classes.linksName}>
        <Link href="https://twitter.com" className={classes.link}>
          Twitter
        </Link>
        <Link href="https://t.me" className={classes.link}>
          Telegram
        </Link>
        <Link href="https://reddit.com" className={classes.link}>
          Reddit
        </Link>
        <Link href="https://discord.com" className={classes.link}>
          Discord
        </Link>
      </Box>
      <Button variant="contained" color="secondary" className={classes.button}>
        Buy
      </Button>
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
    padding: "1rem 4rem",
    backgroundColor: "#E6E6E2",
  },
  linksName: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "3rem",
  },
  toolbar: {
    color: "#F9BC6D",
  },
  link: {
    textDecoration: "none !important",
    fontSize: "18px !important",
    fontWeight: "600 !important",
    color: "black !important",
  },
}));

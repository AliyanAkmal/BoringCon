import { Box, Button, Link, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const Header = () => {
  const classes = useStyles();
  return (
    <Box position="sticky" className={classes.header}>
      <Typography variant="h5" className={classes.toolbar}>
        The Boring Coin
      </Typography>
      <Box>
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
  },
}));

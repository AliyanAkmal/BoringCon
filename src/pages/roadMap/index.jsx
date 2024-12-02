import React, { useState } from "react";
import {
  Typography,
  Container,
  Box,
  Card,
  CardContent,
  Button,
  Link,
  Tabs,
  Tab,
  Paper,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import mapingAry from "./data";

const Roadmap = () => {
  const [tab, setTab] = useState(0);
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box position="sticky" className={classes.header}>
        <Box>
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
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
            >
              Buy
            </Button>
          </Box>
        </Box>
      </Box>

      {/* Content */}
      <Container sx={{ py: 4 }}>
        {mapingAry.map((item, index) => (
          <Card className={classes.card}>
            <CardContent>
              <Typography variant="h6" className={classes.cardTitle}>
                {item.title}
              </Typography>
              <Typography variant="body2" className={classes.cardDetails}>
                {item.details}
              </Typography>
            </CardContent>
          </Card>
        ))}

        {tab === 1 && (
          <Box className={classes.memeSection}>
            <Typography variant="h4" gutterBottom className={classes.cardTitle}>
              Meme of the Day
            </Typography>
            <Paper elevation={3}>
              <img
                src="kennedytheairflow_An_underground_cartoon_tunnel_system_sprawlin (1).png"
                alt="Meme of the Day"
                className={classes.memeImage}
              />
            </Paper>
          </Box>
        )}
      </Container>

      {/* Footer */}
      <Box className={classes.footer}>
        <Typography variant="body2">The Boring Coin © 2024</Typography>
      </Box>
    </Box>
  );
};

export default Roadmap;

const useStyles = makeStyles((theme) => ({}));

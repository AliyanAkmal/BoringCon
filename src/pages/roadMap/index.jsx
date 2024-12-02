import React from "react";
import { Typography, Container, Box, Card, CardContent } from "@mui/material";
import { makeStyles } from "@mui/styles";
import mapingAry from "./data";

const Roadmap = () => {
  const classes = useStyles();
  return (
    <>
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
      </Container>

      <Box className={classes.footer}>
        <Typography variant="body2">The Boring Coin © 2024</Typography>
      </Box>
    </>
  );
};

export default Roadmap;

const useStyles = makeStyles((theme) => ({
  header: {},
}));

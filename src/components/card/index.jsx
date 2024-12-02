import { CardContent, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const Card = ({ title, details }) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent className={classes.cardBody}>
        <Typography variant="h6" className={classes.cardTitle}>
          {title}
        </Typography>
        <Typography variant="body2" className={classes.cardDetails}>
          {details}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Card;
const useStyles = makeStyles((theme) => ({
  cardBody: {
    backgroundColor: "transparent",
  },
}));

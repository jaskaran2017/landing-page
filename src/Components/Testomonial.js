import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import "./Testomonial.css";

const useStyles = makeStyles({
  root: {
    maxWidth: 245,
  },
  media: {
    height: 150,
  },
});

export default function Testomonial({ image, title, p, designation }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={image} />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {p}
          </Typography>
          <Typography
            gutterBottom
            variant="h5"
            component="h6"
            className="card__textcenter"
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className="card__textcenter1"
          >
            {designation}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

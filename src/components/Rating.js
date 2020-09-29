import React from "react";
import Rating from "@material-ui/lab/Rating";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    fontSize: "8px",
    display: "flex",
    flexDirection: "column",
    "& > * + *": {
      marginTop: theme.spacing(1),
    },
  },
}));

export default function HalfRating({ stars }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Rating
        name='rating-read'
        defaultValue={stars}
        precision={0.5}
        readOnly
      />
    </div>
  );
}

import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  button: {
    '&:hover': {
      background: '#a476af'
    },

  }

}));

export default function Home() {
  const classes = useStyles();

  return (
    <Typography component="h1" variant="h5">
      <div className="home-button">
        <Button
          variant="outlined"
          className={classes.button}
          style={{
            border: "#3c3b3d 2px solid",
            width: "105%",
            height: "105%",
            
          }}
        >
          <Link
            style={{
              color: "#3c3b3d",
              textDecoration: "none",
              fontSize: "110%",
            }}
            to="/"
          >
            Home
          </Link>
        </Button>
      </div>
    </Typography>
  );
}

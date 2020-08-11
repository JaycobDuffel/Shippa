import React, { useState } from "react";
import Checkout from "./Checkout";
import { Link } from "react-router-dom";
import {
  Typography,
  Button,
  IconButton,
  Dialog,
  makeStyles,
} from "@material-ui/core";

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
    }
  }
}));

export default function NewOrder() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const classes = useStyles();

  return (
    <div>
      <Typography component="h1" variant="h5">
        <div className="home-button">
          <Button
            className={classes.button}
            variant="outlined"
            onClick={handleClickOpen}
            style={{
              border: "#3c3b3d 2px solid",
              width: "105%",
              height: "105%",
            }}
          >
            <Link style={{ color: "#3c3b3d", textDecoration: "none", fontSize: '110%' }} to="/">
              New Shipment
            </Link>
          </Button>
        </div>
      </Typography>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <Checkout />
      </Dialog>
    </div>
  );
}

import React, { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import Dialog from "@material-ui/core/Dialog";
import { makeStyles } from "@material-ui/core/styles";
import CalculatePriceForm from "./GetQuote";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";

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
}));

export default function CheckPrice() {
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
      <IconButton variant="contained" onClick={handleClickOpen}>
        <Typography component="h1" variant="h5">
          <Button
            variant="outlined"
            style={{
              border: "#6B4C86 2px solid",
              width: "105%",
              height: "105%",
            }}
          >
            <Link style={{ color: "#6B4C86", textDecoration: "none", fontSize: '110%' }} to="/">
              Get a Quote
            </Link>
          </Button>
        </Typography>
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <CalculatePriceForm />
      </Dialog>
    </div>
  );
}

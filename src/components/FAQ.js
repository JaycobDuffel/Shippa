import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles, Button } from '@material-ui/core/';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


export default function FAQ() {
  const classes = useStyles()

    return (
      <IconButton variant="contained">
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
              FAQ
            </Link>
          </Button>
        </Typography>
      </IconButton>
    )

  
}


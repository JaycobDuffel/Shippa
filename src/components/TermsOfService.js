import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles, Button } from '@material-ui/core';
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
  button: {
    '&:hover': {
      background: '#a476af'
    }
  }
}));


export default function TermsOfService() {
  const classes = useStyles()

  return (
    <IconButton variant="contained">
      <Typography component="h1" variant="h5">
        <Button
        className={classes.button}
          variant="outlined"
          style={{
            border: "#3c3b3d 2px solid",
            width: "105%",
            height: "105%",
          }}
        >
          <Link style={{ color: "#3c3b3d", textDecoration: "none", fontSize: '110%' }} to="/privacy">
            Terms of Service
          </Link>
        </Button>
      </Typography>
    </IconButton>
  )

  
}


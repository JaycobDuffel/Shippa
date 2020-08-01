import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
import Login from './Login.js'
import Signup from './Signup.js'

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  }
  
});

export default function Nav() {
  const classes = useStyles()

  return (
    <div className = {classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense"> 
            <Login />
            <Signup  />
        </Toolbar>
          
      </AppBar>
    </div>
  )
}
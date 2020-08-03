import React, { useContext } from 'react';
import { AuthContext } from '../contexts/authContext';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
import Signin from './Signin.js'
import Signup from './Signup.js'
import NewOrder from './NewOrder/NewOrder'
import { getThemeProps } from '@material-ui/styles';
import Signout from './Signout';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  }
  
});

export default function Nav() {
  const classes = useStyles()
  const { authUser } = useContext(AuthContext)
  

  return (
    <div className = {classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense"> 
            {authUser? <Signout /> : <Signup />}
            {authUser? '' : <Signin />}
            <NewOrder />
            {authUser? <h1>Hello {authUser.name}</h1> : ""}
        </Toolbar>
          
      </AppBar>
    </div>
  )
}
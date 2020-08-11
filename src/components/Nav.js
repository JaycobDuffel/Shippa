import React, { useContext } from 'react';
import SideBar from './SideBar'
import { makeStyles } from '@material-ui/core/styles';
import { AuthContext } from '../contexts/authContext';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function Nav({ setCheckLogin, checkLogin }) {
  const classes = useStyles()
  
  return (
    <div className = {classes.root}>
      <SideBar checkLogin={checkLogin} setCheckLogin={setCheckLogin}/>
    </div>
  )
}
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SideBar from './SideBar'

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  }
  
});

export default function Nav({ setCheckLogin, checkLogin }) {
  const classes = useStyles()
  
  return (
    <div className = {classes.root}>
            <SideBar checkLogin={checkLogin} setCheckLogin={setCheckLogin} />
    </div>
  )
}
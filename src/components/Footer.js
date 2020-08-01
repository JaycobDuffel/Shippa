import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { BottomNavigation } from '@material-ui/core';
import { BottomNavigationAction } from '@material-ui/core';



const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

export default function Footer() {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)
  return (
  <>
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}>
        <BottomNavigationAction label="FAQ"/>
        <BottomNavigationAction label="Privacy and Terms of Service"/>
        <BottomNavigationAction label="Nearby"/>
        <BottomNavigationAction label="Nearby"/>
        <BottomNavigationAction label="Nearby"/>
    </BottomNavigation>
  </>
  )
}

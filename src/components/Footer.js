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
    </BottomNavigation>
  </>
  )
}

import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import { BottomNavigation } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Signup from './Signup.js'
import FAQ from './FAQ.js'
import TermsOfService from './TermsOfService.js'
import ContactUs from './ContactUs.js'


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Shippa
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}



const useStyles = makeStyles((theme) => ({
  
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
  },
  bgcolor: {
    backgroundColor: '#FAFAFA'
  }
}));

export default function Footer() {
  const classes = useStyles()
  return (
    
    <div className={classes.root}>
      <CssBaseline />
      <footer className={classes.footer}>
        <Container maxWidth="md" >
          <BottomNavigation
           showLabels
           className={classes.bgcolor}>
              <FAQ />
              <TermsOfService />
              <ContactUs />
              <Signup />
          </BottomNavigation>
          <Copyright />
        </Container>
      </footer>
    </div>

  );
}

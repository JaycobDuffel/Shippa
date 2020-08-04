import React, { useEffect }from 'react'
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
import Home from './Home'


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" style={{marginLeft: "100px"}}>
      {'Copyright © '}
      <Link color="inherit">
        Shippa
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '75vh',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
  },
  bgcolor: {
    backgroundColor: 'inherit'
  }
}));

export default function Footer() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const classes = useStyles()
  return (
    
    
    <div className={classes.root}>
      <CssBaseline />
      <footer className={classes.footer}>
        <Container maxWidth="md" className="d-flex flex-column" >
          <BottomNavigation
           showLabels
           className={classes.bgcolor}>
              <Home onclick={() =>  window.scrollTo(0, 0)}/>
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

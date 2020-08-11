import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import PickUp from './PickUp';
import DropOff from './DropOff';
import PaymentForm from './PaymentForm';
import Review from './Review';
import Distance from './Distance';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
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
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
    '&:hover': {
      background: '#a476af'
    }
  },
}));

const steps = ['Pick up', 'Drop off', 'Price','PaymentForm', 'Review'];

export default function Checkout() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [pickupNumber, setPickUpNumber] = useState('')
  const [pickupFirst, setPickupFirst] = useState('')
  const [pickupLast, setPickupLast] = useState('')
  const [pickupAddress, setPickupAddress] = useState('')
  const [pickupCity, setPickupCity] = useState('')
  const [pickupProv, setPickupProv] = useState('')
  const [pickupPostal, setPickupPostal] = useState('')

  const [number, setNumber] = useState('')
  const [dropoffFirst, setDropoffFirst] = useState('')
  const [dropoffLast, setDropoffLast] = useState('')
  const [dropoffAddress, setDropoffAddress] = useState('')
  const [dropoffCity, setDropoffCity] = useState('')
  const [dropoffProv, setDropoffProv] = useState('')
  const [dropoffPostal, setDropoffPostal] = useState('')
  const [lat, setLat] = React.useState('')
  const [lon, setLon] = React.useState('')
  const [price, setPrice] = React.useState(0)
  const [distance, setDistance] = React.useState(0)
  const [markers, setMarkers] = useState([])


  const user_id = JSON.parse(localStorage.getItem('authUser')).id;
  const end_point = dropoffAddress;
  const distanceBetween = distance
  const cost = price[1]
  const status = true
  const latitude = lat;
  const longitude = lon;
  const start_point = pickupAddress;
  
  const onSubmitForm = async (e) => {
   
    try {
      const body  = { user_id, start_point, end_point, latitude, longitude, distanceBetween, cost, status  }
        await fetch("http://localhost:5000/shipments", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json"},
        body: JSON.stringify(body)
      })
    } catch (error) {
      console.error(error.message)
    }
  }

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <PickUp pickupFirst={pickupFirst} setPickupFirst={setPickupFirst} pickupNumber={pickupNumber} setPickUpNumber={setPickUpNumber}
          pickupLast={pickupLast} setPickupLast={setPickupLast} pickupAddress={pickupAddress} setPickupAddress={setPickupAddress}
          pickupCity={pickupCity} setPickupCity={setPickupCity} pickupProv={pickupProv} setPickupProv={setPickupProv} pickupPostal={pickupPostal} setPickupPostal={setPickupPostal}
        />;
      case 1:
        return <DropOff dropoffFirst={dropoffFirst} setDropoffFirst={setDropoffFirst} number={number} setNumber={setNumber}
        dropoffLast={dropoffLast} setDropoffLast={setDropoffLast} dropoffAddress={dropoffAddress} setDropoffAddress={setDropoffAddress}
        dropoffCity={dropoffCity} setDropoffCity={setDropoffCity} dropoffProv={dropoffProv} setDropoffProv={setDropoffProv} dropoffPostal={dropoffPostal} setDropoffPostal={setDropoffPostal} />;
      case 2:
        return <Distance pickupAddress={pickupAddress} pickupCity={pickupCity} dropoffAddress={dropoffAddress} dropoffCity={dropoffCity} lat={lat} setLat={setLat} lon={lon} setLon={setLon}
        price={price} setPrice={setPrice} distance={distance} setDistance={setDistance} /> ;
      case 3:
        return <PaymentForm />;
      case 4:
        return <Review pickupFirst={pickupFirst} pickupLast={pickupLast} pickupAddress={pickupAddress} pickupCity={pickupCity} dropoffAddress={dropoffAddress} dropoffCity={dropoffCity} lat={lat} setLat={setLat} lon={lon} setLon={setLon}
        price={price} setPrice={setPrice} distance={distance} setDistance={setDistance} />;
      default:
        throw new Error('Unknown step');
    }
  }


  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="absolute" color="default" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Shippa
          </Typography>
        </Toolbar>
      </AppBar>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            New Shipment Order
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank you for your order.
                </Typography>
                <Typography variant="subtitle1">
                  Your order number is #2001539. We have emailed your order confirmation, and will
                  send you an update when your order has shipped.
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      Back
                    </Button>
                  )}
                  { 
                    activeStep === steps.length - 1 ? <Button
                    // variant="contained"
                    variant="outlined"
                    color="primary"
                    onClick={() => {handleNext(); onSubmitForm(); setMarkers((prev) => [...prev, {lat:lat, lng:lon}])}}
                    className={classes.button}
                    // onSubmit={onSubmitForm}
                  >Place order</Button> : <Button
                    // variant="contained"
                    variant="outlined"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >Next</Button>
                  }
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
        <Copyright />
      </main>
    </React.Fragment>
  );
}
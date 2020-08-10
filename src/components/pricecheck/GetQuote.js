import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import Quote from "./Quote";
import CheckPricePickUp from "./CheckPricePickUp";
import CheckPriceDropOff from "./CheckPriceDropOff";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Shippa
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto",
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
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
    '&:hover': {
      background: '#a476af'
    }
  },
}));

const steps = ["Pick up", "Drop off", "Your Quote"];

export default function GetQuote() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [pickupAddress, setPickupAddress] = useState("");
  const [pickupCity, setPickupCity] = useState("");
  const [pickupProv, setPickupProv] = useState("");
  const [pickupPostal, setPickupPostal] = useState("");

  const [dropoffAddress, setDropoffAddress] = useState("");
  const [dropoffCity, setDropoffCity] = useState("");
  const [dropoffProv, setDropoffProv] = useState("");
  const [dropoffPostal, setDropoffPostal] = useState("");
  const [lat, setLat] = React.useState("");
  const [lon, setLon] = React.useState("");
  const [price, setPrice] = React.useState(0);
  const [distance, setDistance] = React.useState(0);

  function getStepContent(step) {
    switch (step) {
      case 0:
        return (
          <CheckPricePickUp
            pickupAddress={pickupAddress}
            setPickupAddress={setPickupAddress}
            pickupCity={pickupCity}
            setPickupCity={setPickupCity}
            pickupProv={pickupProv}
            setPickupProv={setPickupProv}
            pickupPostal={pickupPostal}
            setPickupPostal={setPickupPostal}
          />
        );
      case 1:
        return (
          <CheckPriceDropOff
            dropoffAddress={dropoffAddress}
            setDropoffAddress={setDropoffAddress}
            dropoffCity={dropoffCity}
            setDropoffCity={setDropoffCity}
            dropoffProv={dropoffProv}
            setDropoffProv={setDropoffProv}
            dropoffPostal={dropoffPostal}
            setDropoffPostal={setDropoffPostal}
          />
        );
      case 2:
        return (
          <Quote
            pickupAddress={pickupAddress}
            pickupCity={pickupCity}
            dropoffAddress={dropoffAddress}
            dropoffCity={dropoffCity}
            lat={lat}
            setLat={setLat}
            lon={lon}
            setLon={setLon}
            price={price}
            setPrice={setPrice}
            distance={distance}
            setDistance={setDistance}
          />
        );
      default:
        throw new Error("Unknown step");
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
            Get a Quote
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            <React.Fragment>
              {getStepContent(activeStep)}
              <div className={classes.buttons}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} className={classes.button}>
                    Back
                  </Button>
                )}
                {activeStep === steps.length - 1 ? (
                  <Button
                  variant="outlined"
                  color="primary"
                  onClick={() => {console.log('email!')
                  }}
                  className={classes.button}
                >
                  Request Email Copy of Quote
                </Button>
                ) : (
                  
                activeStep === steps.length - 2 ? (
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => {
                      handleNext();
                    }}
                    className={classes.button}
                  >
                    Get Quote
                  </Button>
                ) : (
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    Next
                  </Button>
                )
                )}
              </div>
            </React.Fragment>
          </React.Fragment>
        </Paper>
        <Copyright />
      </main>
    </React.Fragment>
  );
}

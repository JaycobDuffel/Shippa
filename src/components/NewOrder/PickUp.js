import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

export default function PickUp({ pickupNumber, setPickUpNumber, pickupFirst, setPickupFirst, pickupLast, setPickupLast, pickupAddress, setPickupAddress, pickupCity, setPickupCity,
  pickupProv, setPickupProv, pickupPostal, setPickupPostal }) {

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Pick Up Point
      </Typography>
      <p>Person to Contact</p>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            value={pickupFirst}
            onChange={e => setPickupFirst(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            value={pickupLast}
            onChange={e => setPickupLast(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <PhoneInput
            placeholder="Enter phone number"
            value={pickupNumber}
            onChange={setPickUpNumber}

            />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address line 1"
            fullWidth
            autoComplete="shipping address-line1"
            value={pickupAddress}
            onChange={e => setPickupAddress(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            value={pickupCity}
            onChange={e => setPickupCity(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField id="state" name="state" label="State/Province/Region" fullWidth 
            value={pickupProv}
            onChange={e => setPickupProv(e.target.value)} 

            />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            value={pickupPostal}
            onChange={e => setPickupPostal(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
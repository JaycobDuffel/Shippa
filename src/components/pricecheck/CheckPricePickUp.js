import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import 'react-phone-number-input/style.css';

export default function CheckPriceForm ({ pickupNumber, setPickUpNumber, pickupFirst, setPickupFirst, pickupLast, setPickupLast, pickupAddress, setPickupAddress, pickupCity, setPickupCity,
  pickupProv, setPickupProv, pickupPostal, setPickupPostal, dropoffFirst, setDropoffFirst, number, setNumber, dropoffLast, setDropoffLast, dropoffAddress, setDropoffAddress, dropoffCity, 
  setDropoffCity, dropoffProv, setDropoffProv, dropoffPostal, setDropoffPostal }) {

  return (
    <React.Fragment>
      <div>
        <form>
      <Typography variant="h6" gutterBottom>
        Pick Up Point
      </Typography>
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
        </form>
        </div>
    </React.Fragment>
  );
}
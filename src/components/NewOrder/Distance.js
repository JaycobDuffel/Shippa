import React, { useEffect } from 'react';
import axios from 'axios';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import calculatePrice from "../helpers/CalculatePrice"

export default function Distance ({ pickupAddress, pickupCity, dropoffAddress, dropoffCity }) {
  const [price, setPrice] = React.useState([])
  // https://cors-anywhere.herokuapp.com/
  const distanceMatrix = () => {
    axios.get('https://maps.googleapis.com/maps/api/distancematrix/json?',{
      params: {
        units: 'metric',
        origins: `${pickupAddress} ${pickupCity}`,
        destinations: `${dropoffAddress} ${dropoffCity}`,
        key: process.env.REACT_APP_MAP_KEY,
      }
    })
    .then(async (res) => {
      const distance = res.data.rows[0].elements[0].distance.value
      const price = calculatePrice(distance)
      setPrice(price);
    })
    .catch((err) => {
      console.log('err >>', err)
      alert("Please enter an address")
    })
  }
  useEffect(() => {
    distanceMatrix()
  }, [])
  

  const transportationFee = price[1];
  const gst = price[1] * .05;
  const serviceFee = price[1] * .05;
  const total = transportationFee + gst + serviceFee;


  return (
    <>
        {/* <form>
          <div className="form-group">
          <Grid container>
          <Typography variant="h6" gutterBottom>
            Starting Address
          </Typography>
          <Grid item xs={12} sm={6}>
              <TextField
                  type="text"
                  className="form-control"
                  id="address"
                  required
                  aria-describedby="addressHelp"
                  value={`${pickupAddress} ${pickupCity}`}
                  />
          </Grid>
          </Grid>
          </div>
          <div className="form-group">
          <Typography variant="h6" gutterBottom>
            End Address
          </Typography>
          
              <TextField
                  required
                  type="text"
                  className="form-control"
                  id="address"
                  aria-describedby="addressHelp"
                  value={`${dropoffAddress} ${dropoffCity}`}
                  />
          </div>
        <button className="btn mb-4 btn-primary" type='submit' onClick={distanceMatrix}>Check Price</button> */}
        {/* </form> */}

        <table class="table">
  <thead>
    <tr>
      <th scope="col"></th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Total Distance:</th>
      <td><h1>{price[0]} km</h1></td>
    </tr>
    <tr>
      <th scope="row">Transportation fee:</th>
      <td><h1>${(setTimeout(() => {return transportationFee}, 1000)).toFixed(2)} </h1></td>
    </tr>
    <tr>
      <th scope="row">Service Fee:</th>
      <td><h1>${(setTimeout(() => {return serviceFee}, 500)).toFixed(2)}</h1></td>
    </tr>
    <tr>
      <th scope="row">GST:</th>
      <td><h1>${(setTimeout(() => {return gst}, 500)).toFixed(2)}</h1></td>
    </tr>
    <tr>
      <th scope="row">Total:</th>
      <td><h1>${(setTimeout(() => {return total}, 500)).toFixed(2)}</h1></td>
    </tr>
  </tbody>
</table>


    </>
  )
}
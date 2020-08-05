import React from 'react';
import axios from 'axios';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import calculatePrice from "../helpers/CalculatePrice"

export default function Distance ({ pickupAddress, pickupCity, dropoffAddress, dropoffCity }) {
  // initializes state
  // let [startAddress, setStartAddress] = React.useState('')
  // let [endAddress, setEndAddress] = React.useState('')
  const [price, setPrice] = React.useState([])
  
  const distanceMatrix = (e) => {
    e.preventDefault()
    axios.get('https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/distancematrix/json?',{
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
  

  return (
    <>
      <h1>{price[0]} km</h1>
      <h1>${price[1]}</h1>
    
        <form onSubmit={(e) => distanceMatrix(e)}>
          <div className="form-group">
          <Grid container spacing={-5}>
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
        <button className="btn mb-4 btn-primary" type='submit'>Check Price</button>
        </form>
    </>
  )
}

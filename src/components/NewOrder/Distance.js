import React from 'react';
import axios from 'axios';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import calculatePrice from "../helpers/CalculatePrice"

export default function Distance () {
  // initializes state
  // let [latitude, setLatitude] = React.useState(0)
  // let [longitude, setLongitude] = React.useState(0)
  let [startAddress, setStartAddress] = React.useState('')
  let [endAddress, setEndAddress] = React.useState('')
  const [price, setPrice] = React.useState(0)
  //https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins={ORIGIN HERE}&destinations={DESTINATION HERE}&key=YOUR_API_KEY
  
  const distanceMatrix = (e) => {
    e.preventDefault()
    axios.get('https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/distancematrix/json?',{
      params: {
        units: 'metric',
        origins: startAddress,
        destinations: endAddress,
        key: process.env.REACT_APP_MAP_KEY,
      }
    })
    .then(async (res) => {
      // console.log(res.data.rows[0].elements[0].distance.text) //this is the text version of the distance, in '1 km' style
      // console.log(res.data.rows[0].elements[0].distance.value)
      const distance = res.data.rows[0].elements[0].distance.value
      const price = calculatePrice(distance)
      // console.log("price is here >>> ", price)
      setPrice(price);
    })
    .then((res) => {
        console.log(res)
    })
    .catch((err) => {
      console.log('err >>', err)
      alert("Please enter an address")
    })

    

  }
  
  return (
    <React.Fragment>
     
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
                  value={startAddress}
                  onChange={(e) => setStartAddress(e.target.value)}
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
                  value={endAddress}
                  onChange={(e) => setEndAddress(e.target.value)}
                  />
          </div>
        <button className="btn mb-4 btn-primary" type='submit'>Check Price</button>
        </form>
        <h1>${price.toFixed(2)}</h1>
    </React.Fragment>
  )
}


//take in the origin as address

//convert to lat & long using Google Geocode API
// const origin = {{ }}

// origins=Bobcaygeon+ON|24+Sussex+Drive+Ottawa+ON

//make a function called getDistance to take the two points and  make a post request
// const getDistance = () => {

// }
//api sspits out info in response.rows, response.rows.distance.value (or .text), response.rows.duration.value
// putting map.js code below for reference/might need to use it here rather than there...?

//-------- throwaway form code

// The latitude is {latitude}
// The longitude is {longitude}
// <form onSubmit={(e) => updateCoordinates(e)}>
//     <div className="form-group">
//         <label htmlFor="address">Address</label>
//         <input
//             type="text"
//             className="form-control"
//             id="address"
          
//             aria-describedby="addressHelp"
//             value={address}
//             onChange={(e) => setAddress(e.target.value)}
//             />
//     </div>
//     <button className="btn mb-4 btn-primary" type='submit'>Search Location</button>
// </form>


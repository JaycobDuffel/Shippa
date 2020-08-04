import React, { useState, Component } from 'react';
import { GoogleMap, InfoWindow, Marker, GoogleApiWrapper} from "react-google-maps/";
import axios from 'axios';
export default function Distance () {
  // initializes state
  let [latitude, setLatitude] = React.useState(0)
  let [longitude, setLongitude] = React.useState(0)
  let [address, setAddress] = React.useState('')
  
  const geocode = (e) => {
    e.preventDefault()
    axios.get('https://maps.googleapis.com/maps/api/geocode/json',{
      params: {
        address: address,
        key: process.env.REACT_APP_MAP_KEY
      }
    })
    .then((res) => {
      const location = res.data.results[0].geometry.location 
      console.log('latitude is: ', location.lat)
      console.log('longitutde is: ', location.lng)
      setLatitude(location.lat)
      setLongitude(location.lng)
      
    })
    .catch((err) => {
      console.log('err >>', err)
      alert("Please enter an address")
    })
  }

  return (
    <div>
        <form onSubmit={(e) => geocode(e)}>
        <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
                type="text"
                className="form-control"
                id="address"
                
                aria-describedby="addressHelp"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                />
        </div>
        <button className="btn mb-4 btn-primary" type='submit'>Search Location</button>
        </form>
    </div>
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


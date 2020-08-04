import React, { useState, Component } from 'react';
import { GoogleMap, InfoWindow, Marker, GoogleApiWrapper} from "react-google-maps/";

export default function Distance  () {
    // initializes state
    let [latitude, setLatitude] = React.useState(-33.7560119)
    let [longitude, setLongitude] = React.useState(150.6038367)
    let [address, setAddress] = React.useState('')
    // searches for new locations
    const updateCoordinates = (e) => {
        e.preventDefault()
       //  const encodedAddress = encodeURI(address)
        // fetches data from our ap CHECK THAT THE KEY IS SAMEiOR WORKS
        fetch(`https://google-maps-geocoding.p.rapidapi.com/geocode/json?language=en&address=${encodeURIComponent(address)}`, {
            "method": "GET",
            "headers": {
            "x-rapidapi-host": "google-maps-geocoding.p.rapidapi.com",
            "x-rapidapi-key": process.env.RAPIDAPI_KEY,
            },
            mode: "no-cors"
        })
        .then(response => response.json())
        .then(response => {
          console.log("got respone>>", response)
            setLatitude(response.lat)
            setLongitude(response.long)
        })
        .catch(err => console.log(err))
    }
    return (
        <div>
            The latitude is {latitude}
            The longitude is {longitude}
            <form onSubmit={(e) => updateCoordinates(e)}>
                <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <input
                        type="text"
                        className="form-control"
                        id="address"
                        required
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




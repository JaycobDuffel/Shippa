import React, { useEffect } from 'react';
import axios from 'axios';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import calculatePrice from "../helpers/CalculatePrice"

export default function Distance ({ pickupAddress, pickupCity, dropoffAddress, dropoffCity, lat, setLat, lon, setLon, price, setPrice, distance, setDistance }) {
  
  // https://cors-anywhere.herokuapp.com/
  const distanceMatrix = () => {
    axios.get('https://maps.googleapis.com/maps/api/distancematrix/json?', {
      
      headers: {
        'Content-Type': 'application/json'
      },
      params: {
        units: 'metric',
        origins: `${pickupAddress} ${pickupCity}`,
        destinations: `${dropoffAddress} ${dropoffCity}`,
        key: process.env.REACT_APP_MAP_KEY,
      }
    })
    .then(async (res) => {
      // console.log(res)
      const distance = res.data.rows[0].elements[0].distance.value
      setDistance(distance)
      const price = await calculatePrice(distance)
      setPrice(price);
    })
    .catch((err) => {
      console.log('err >>', err)
      alert("Please enter an address in the correct format.")
      // alert("We're sorry, there seems to have been an error: ", err)
    })
  }

  // https://maps.googleapis.com/maps/api/geocode/json
  const geoLocation = () => {
    axios.get('https://maps.googleapis.com/maps/api/geocode/json',{
      params: {
        address: `${pickupAddress} ${pickupCity}`,
        key: process.env.REACT_APP_MAP_KEY,
      }
    })
    .then(async (res) => {
      const lat = res.data.results[0].geometry.location.lat
      const lon = res.data.results[0].geometry.location.lng
      setLat(lat)
      setLon(lon)
    })
    .catch((err) => {
      console.log('err >>', err)
      alert("We're sorry, we could not calculate the shipment distance. ", err)
    })
  }

  useEffect(() => {
    distanceMatrix()
    geoLocation()
  }, [])
  
  
  // console.log("price is here: ",price)
  return (
    <>
      {price.length && (
        <table className="table">
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
              <td><h1>${price[1].toFixed(2)} </h1></td>
            </tr>
            <tr>
              <th scope="row">Service Fee:</th>
              <td><h1>${(price[1] * 0.05).toFixed(2)}</h1></td>
            </tr>
            <tr>
              <th scope="row">GST:</th>
              <td><h1>${((price[1] + (price[1] * 0.05)) * 0.05).toFixed(2)}</h1></td>
            </tr>
            <tr>
              <th scope="row">Total:</th>
              <td><h1>${(price[1] + (price[1] * 0.05) + ((price[1] + (price[1] * 0.05)) * 0.05)).toFixed(2)}</h1></td>
            </tr>
          </tbody>
        </table>
      )}
    </>
  )
}

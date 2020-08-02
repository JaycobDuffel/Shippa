import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer'
import Nav from './components/Nav'
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from "react-google-maps"


// import { client } from "./elephantsql.js";
//access api key with process.env.REACT_APP_MAP_KEY 

//remove hardcoded marker when DB setup 

function Map() {
  return (
    <GoogleMap 
      defaultZoom={10} 
      defaultCenter={{ lat: 53.631611, lng: -113.323975 }}
    >
      <Marker position={{ lat: 53.631611, lng: -113.323975 }} /> 
      
    </GoogleMap>
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));



export default function App() {
  return (
    <>
    <Nav />
    <div style={{ width: '100vw', height: '100vh' }} >
     
      <WrappedMap 
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_MAP_KEY}`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
      
    </div>
    <Footer/>
    </>
  );
}



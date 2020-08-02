import React from 'react';
import './App.css';
import Footer from './components/Footer'
import Nav from './components/Nav'
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps"


// import { client } from "./elephantsql.js";
//access api key with process.env.REACT_APP_MAP_KEY 

function Map() {
  return (
    <GoogleMap 
      defaultZoom={10} 
      defaultCenter={{ lat: 53.631611, lng: -113.323975 }}
    />
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));



function App() {
  return (
    <>
    <Nav />
    <div style={{ width: '50vw', height: '50vh' }} >
      <p>THIS IS WHERE THE MAP SHOULD FRIGGIN BE</p>
      <WrappedMap 
        googleMapURL={"https://maps.googleapis.com/maps/api/staticmap?center=40.714%2c%20-73.998&zoom=12&size=400x400&key={process.env.REACT_APP_MAP_KEY}"}
        loadingElement={<div style={{ height: "100%" }}  />}
        containterElement={<div style={{ height: "100%" }} />}
        mapElement={<div style={{ height: "100%" }} />}
        />
      
    </div>

    <Footer/>
    </>
  );
}

export default App;

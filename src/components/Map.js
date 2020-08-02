import React from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
} from "react-google-maps/";

export default function WholeMap() {
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


 return (<div style={{ width: "100vw", height: "100vh" }}>
  <WrappedMap
    googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_MAP_KEY}`}
    loadingElement={<div style={{ height: `100%` }} />}
    containerElement={<div style={{ height: `400px` }} />}
    mapElement={<div style={{ height: `100%` }} />}
  />
 </div>
 )

}


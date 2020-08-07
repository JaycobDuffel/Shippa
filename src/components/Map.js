import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps/";
import axios from 'axios'

// import Messaging from "./Chat/Messaging";

const api = process.env.REACT_APP_MAP_KEY

//{ lat: 53.631611, lng: -113.323975 }, { lat:53.598550, lng:-113.489080 }
export default function WholeMap({showChat, setShowChat}) {
  // const [markers, setMarkers] = useState([])

  function Map() {
    const [markers, setMarkers] = useState([]);
    const [selected, setSelected] = useState(null);

  const handleClick = (e) => {
    // e.preventDefault;
    setShowChat(true);
  }

  const shipments =  async () => {
    return axios.get('http://localhost:5000/shipments')
       .then( (res) => {
         console.log(res.data)
         const coords = res.data.map((shipment) => {
           
           return {
             status: shipment.status,
             id: shipment.id,
             lat: Number(shipment.latitude),
             lng: Number(shipment.longitude)
           }
         })
         setMarkers(coords)
        })
        .catch((err) => {
         console.log('err >>', err)
       })
   }

   const shipmentToShow =  async (id) => {
    return axios.get(`http://localhost:5000/shipments/${id}`)
       .then( (res) => {
         const singleShipment = res.data[0];
        //  console.log("singleShipment is here: ",singleShipment)
          setSelected(singleShipment)
        //  return singleShipment;
         })
        .catch((err) => {
         console.log('err >>', err)
       })
   }
   
   useEffect(() => { 
     shipments()
   }, []);
 
  return (
    <GoogleMap
      defaultZoom={9}
      defaultCenter={{ lat: 53.544388, lng: -113.490929 }}
      
    >
      {markers.map(marker => 
      marker.status === true? <Marker 
        key={marker.id} 
        position={{lat: marker.lat, lng: marker.lng}} 
        onClick={() => {
          setSelected(marker); shipmentToShow(marker.id)
        }}
        /> : ""
          
    )}
    
    {selected ? (
      <InfoWindow 
      position={{ lat: Number(selected.lat), lng: Number(selected.lng) }}
      onCloseClick={() => setSelected(null)}
      > 
       <div className="infoWindow">
        <h3><p><strong>{selected.name}</strong></p></h3>
        <h5><p>{selected.start_point}</p></h5>
        <h5>{selected.end_point}</h5>
        <Button variant="contained" onClick={() => {
          handleClick();
        }}>Chat about this shipment</Button>
        
      </div>
      </InfoWindow>) : null}
    </GoogleMap>
  );
}
//add distance API state 
const WrappedMap = withScriptjs(withGoogleMap(Map));

 return (<div style={{ width: "100vh", height: "100vh", position:"relative",zIndex: '1' }}>
  <WrappedMap
    googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${api}`}
    loadingElement={<div style={{ height: `100%` }} />}
    containerElement={<div style={{ height: `600px`, margin: "65px"}} />}
    mapElement={<div style={{ height: `100%` } } />}
   
  />
  
 </div>              
 )
}


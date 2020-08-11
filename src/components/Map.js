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
import mapStyles from './mapStyles'
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";

// import {
//   Combobox,
//   ComboboxInput,
//   ComboboxPopover,
//   ComboboxList,
//   ComboboxOption,
//   ComboboxOptionText,
// } from "@reach/combobox";
// import "@reach/combobox/styles.css";

// import Messaging from "./Chat/Messaging";

// imports for map search


const api = process.env.REACT_APP_MAP_KEY

//{ lat: 53.631611, lng: -113.323975 }, { lat:53.598550, lng:-113.489080 }
 

export default function WholeMap({showChat, setShowChat, coordinates, setCoordinates}) {
  
  function Search() {
    const [address, setAddress] = useState("");
    
  
    const handleSelect = async value => {
      const results = await geocodeByAddress(value);
      const latLng = await getLatLng(results[0]);
      setAddress(value);
      setCoordinates(latLng);
    };
    console.log(coordinates)
    return (
      <div className='search'>
        <PlacesAutocomplete
          value={address}
          onChange={setAddress}
          onSelect={handleSelect}
        >
          {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
            <div>
              <input {...getInputProps({ placeholder: "Type address" })} />
              <div>
                {loading ? <div>...loading</div> : null}
  
                {suggestions.map(suggestion => {
                  const style = {
                    backgroundColor: suggestion.active ? "#A078BA" : "#fff"
                  };
  
                  return (
                    <div {...getSuggestionItemProps(suggestion, { style })}>
                      {suggestion.description}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </PlacesAutocomplete>
      </div>
    );
  }

  function Map() {
  const [markers, setMarkers] = useState([]);
  const [selected, setSelected] = useState(null);

  const handleClick = (e) => {
    setShowChat(true);
  }

  const shipments =  async () => {
    return axios('http://localhost:5000/shipments', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then( (res) => {
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
        setSelected(singleShipment)
        })
      .catch((err) => {
        console.log('err >>', err)
      })
   }
   
   useEffect(() => { 
     shipments()
   }, [markers]);
 
  return (
    <GoogleMap
      defaultZoom={9}
      defaultCenter={ coordinates }
      defaultOptions={{styles: mapStyles }}
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

 return (
  <>
    <div style={{ width: "80%", height: "100vh", position:"relative", zIndex: '1', margin:'200px 200px 0px 200px'}}>
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${api}`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `600px`, margin: "65px"}} />}
        mapElement={<div style={{ height: `100%`, border:'solid #3c3b3d', borderRadius: '7px', boxShadow: '3px 5px #9c97a1' } } />}
      />
    </div>  
    <div>
      <Search />
    </div>  
  </>          
 )
}
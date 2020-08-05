import React, { useEffect, useState } from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps/";
import axios from 'axios'
import { set } from "lodash";

const api = process.env.REACT_APP_MAP_KEY
// -------- example code, delete when done ----------
// function ListOfThings() {
//   const [items, setItems] = useState([]);
//   const [itemName, setItemName] = useState("");

//   const addItem = event => {
//     event.preventDefault();
//     setItems([
//       ...items,
//       {
//         id: items.length,
//         name: itemName
//       }
//     ]);
//     setItemName("");
//   };

//   return (
//     <>
//       <form onSubmit={addItem}>
//         <label>
//           <input
//             name="item"
//             type="text"
//             value={itemName}
//             onChange={e => setItemName(e.target.value)}
//           />
//         </label>
//       </form>
//       <ul>
//         {items.map(item => (
//           <li key={item.id}>{item.name}</li>
//         ))}
//       </ul>
//     </>
//   );
// }
// ^^^^-------- example code above, delete when done ----------

//{ lat: 53.631611, lng: -113.323975 }, { lat:53.598550, lng:-113.489080 }
export default function WholeMap() {
  // const [markers, setMarkers] = useState([])
  
  

 function Map() {
  const [markers, setMarkers] = useState([])

  const shipments =  async () => {
    return axios.get('http://localhost:5000/shipments')
       .then( (res) => {
         // console.log(res.data)
         const coords = res.data.map((shipment) => {
           return {
             lat: Number(shipment.latitude),
             lng: Number(shipment.longitude)
           }
         })
         console.log("coords line 27 >>>> ", coords)
         console.log("setMarkers is here >>> ", setMarkers)
         // needs to have asynchronicity 
         console.log("markers line 72: ", markers)
        })
        .catch((err) => {
         console.log('err >>', err)
       })
       setTimeout (() => {console.log("setTimeoutMarkersisherelookieiloodkie ",markers)}, 5000)
   }
   useEffect(() => { 
     shipments()
   }, [])
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 53.544388, lng: -113.490929 }}
    >
    {markers.map(marker => <Marker position={{lat: marker.lat, lng: marker.lng}}/>)}
    </GoogleMap>
  );
}
//add distance API state 
const WrappedMap = withScriptjs(withGoogleMap(Map));

 return (<div style={{ width: "100vw", height: "100vh" }}>
  <WrappedMap
    googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${api}`}
    loadingElement={<div style={{ height: `100%` }} />}
    containerElement={<div style={{ height: `400px` }} />}
    mapElement={<div style={{ height: `100%` }} />}
  />
  
 </div>              
 )
}


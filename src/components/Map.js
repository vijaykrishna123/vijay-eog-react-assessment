import React, { Component } from 'react';
import { withGoogleMap,GoogleMap,withScriptjs, Marker } from 'react-google-maps';
const MyMapComponent = withScriptjs(withGoogleMap((props) =>{
  
  const lat = parseInt(props.currentDron.latitude)
  const lng = parseInt(props.currentDron.longitude)
  return <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat, lng }}
  >
     {props.isMarkerShown && <Marker position={{ lat, lng }} />} 
  </GoogleMap>
}
))

 
export default MyMapComponent;
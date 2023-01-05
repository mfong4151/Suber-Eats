import React from 'react';
import {GoogleMap, useLoadScript, Marker} from "@react-google-maps/api";
import "./GoogleMap.css"

//map id for the styled map we made c9833b310ffc337b
const Map = ({restaurants}) => {

  const { isLoaded} = useLoadScript({googleMapsApiKey: process.env.REACT_APP_MAPS_API_KEY
  })

  if(!isLoaded) return(<h1>loading...</h1>)

  const coords = {
    lat: 37.72988998953665, 
    lng: -122.45906484395803
    }

  return <GoogleMap zoom={15} center={coords} mapContainerClassName="map-container"></GoogleMap>
}

export default Map;

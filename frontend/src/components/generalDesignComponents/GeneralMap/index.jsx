import React from 'react';
import {GoogleMap, useLoadScript, } from "@react-google-maps/api";
import RestaurantMarker from './RestaurantMarker';
import { useState } from 'react';
import './GeneralMap.css'

// https://react-google-maps-api-docs.netlify.app/#googlemap

const GeneralMap = ({coords, mapStyle}) => {
  const { isLoaded} = useLoadScript({googleMapsApiKey: process.env.REACT_APP_MAPS_API_KEY})

  if(!isLoaded) return(<h1>loading...</h1>)


  const options = {
        mapId: '73cef3161f877bcd',
        disableDefaultUI:true,
        clickableIcons:false,
        disableDoubleClickZoom: true,
        draggable:false
    };


  return (
    <GoogleMap 
      zoom={13} 
      center={coords} 
      mapContainerClassName={mapStyle}
      options={options}
      >
     <RestaurantMarker coords={coords}/>

      </GoogleMap>)
}

export default GeneralMap;

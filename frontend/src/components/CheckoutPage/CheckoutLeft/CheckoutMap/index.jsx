import React from 'react';
import {GoogleMap, useLoadScript, } from "@react-google-maps/api";
// import RestaurantMarker from './RestaurantMarker';
import { useState } from 'react';

// https://react-google-maps-api-docs.netlify.app/#googlemap

const CheckoutMap = () => {
  const [mapCenter, setMapCenter]  =useState({lat: 37.747401957356246, lng: -122.4456108834198}) //this just refers to a default center
    
    // {lng: userLocation.longitude, lat: userLocation.latitude}

  const { isLoaded} = useLoadScript({googleMapsApiKey: process.env.REACT_APP_MAPS_API_KEY})

  if(!isLoaded) return(<h1>loading...</h1>)


  const options = {
        mapId: '73cef3161f877bcd',
        disableDefaultUI:true,
        clickableIcons:false,
        disableDoubleClickZoom: true,
    };


  return (
    <GoogleMap 
      zoom={13} 
      center={mapCenter} 
      mapContainerClassName="map-container"
      options={options}
      >
     {/* <RestaurantMarker restaurant={restaurant} key={idx}/> */}

      </GoogleMap>)
}

export default CheckoutMap;

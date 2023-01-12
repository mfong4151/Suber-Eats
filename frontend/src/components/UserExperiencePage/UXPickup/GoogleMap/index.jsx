import React, { useMemo } from 'react';
import {GoogleMap, useLoadScript, Marker} from "@react-google-maps/api";
import "./GoogleMap.css"

import RestaurantMarker from './RestaurantMarker';
//map id for the styled map we made c9833b310ffc337b
const Map = ({restaurants}) => {
  const { isLoaded} = useLoadScript({googleMapsApiKey: process.env.REACT_APP_MAPS_API_KEY
  })
  if(!isLoaded) return(<h1>loading...</h1>)
  
  const coords = {lat: 37.72988998953665, lng: -122.45906484395803 }
  const options = {
        mapId: '73cef3161f877bcd',
        disableDefaultUI:false,
        clickableIcons:false,

    };
  
  


  return (
    <GoogleMap 
      zoom={13} 
      center={coords} 
      mapContainerClassName="map-container"
      options={options}
      >
            {Object.values(restaurants).map((restaurant, idx) =>(
              <RestaurantMarker restaurant={restaurant} key={idx}/>
            )
            )}

      </GoogleMap>)
}

export default Map;

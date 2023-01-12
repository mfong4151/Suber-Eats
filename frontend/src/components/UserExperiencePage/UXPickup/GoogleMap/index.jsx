import React, { useMemo } from 'react';
import {GoogleMap, useLoadScript, Marker} from "@react-google-maps/api";
import "./GoogleMap.css"
import { SharedContext } from '../../../../App';
import { useContext } from 'react';

const Map = ({restaurants}) => {
  const { isLoaded} = useLoadScript({googleMapsApiKey: process.env.REACT_APP_MAPS_API_KEY
  })


  const coords = useMemo(()=>({lat: 37.72988998953665, lng: -122.45906484395803}), []);
  const options = useMemo(()=>({
        mapId: '73cef3161f877bcd',
        disableDefaultUI:true,
        }),[]);
  
  


  return (
    <GoogleMap 
      zoom={15} 
      center={coords} 
      mapContainerClassName="map-container"
      options={options}
      ></GoogleMap>)
}

export default Map;

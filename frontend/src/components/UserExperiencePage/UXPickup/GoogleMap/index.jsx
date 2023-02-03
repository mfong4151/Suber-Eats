import React from 'react';
import {GoogleMap, useLoadScript, } from "@react-google-maps/api";
import "./GoogleMap.css"
import RestaurantMarker from './RestaurantMarker';
import { updateLocation, checkUserLoc} from '../../../../store/location';
import { useDispatch, useSelector } from 'react-redux';
import { getSessionUserId } from '../../../../store/session';
import { fetchRestaurants } from '../../../../store/restaurant';
import { useState } from 'react';

// https://react-google-maps-api-docs.netlify.app/#googlemap

const Map = ({restaurants, userLocation}) => {
  const dispatch = useDispatch()
  const sessionUserId = useSelector(getSessionUserId)
  const [mapCenter, setMapCenter]  =useState({lat: 37.747401957356246, lng: -122.4456108834198}) //this just refers to a default center
    
    // {lng: userLocation.longitude, lat: userLocation.latitude}

  let userLocObj = useSelector(checkUserLoc(sessionUserId))
  const { isLoaded} = useLoadScript({googleMapsApiKey: process.env.REACT_APP_MAPS_API_KEY})


  if(!isLoaded) return(<h1>loading...</h1>)


  const options = {
        mapId: '73cef3161f877bcd',
        disableDefaultUI:true,
        clickableIcons:false,
        disableDoubleClickZoom: true,
    };
    
  const handleOnClick = e =>{
    if(userLocObj){
      dispatch(updateLocation(
          {location:{
            latitude: e.latLng.lat(),
            longitude:  e.latLng.lng(),
            userId: sessionUserId
 
           }}, userLocObj.id
          ))
      .then(()=> dispatch(fetchRestaurants()))
    }
  }
  


  return (
    <GoogleMap 
      zoom={13} 
      center={mapCenter} 
      mapContainerClassName="map-container"
      options={options}
      onClick={handleOnClick}
      >
            {Object.values(restaurants).map((restaurant, idx) =>(
              <RestaurantMarker restaurant={restaurant} key={idx}/>
            )
            )}

      </GoogleMap>)
}

export default Map;

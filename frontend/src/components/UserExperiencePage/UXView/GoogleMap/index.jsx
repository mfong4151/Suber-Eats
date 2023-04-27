import React from 'react';
import {GoogleMap, useLoadScript, } from "@react-google-maps/api";
import "./GoogleMap.css"
import RestaurantMarker from './RestaurantMarker';
import { updateLocation, checkUserLoc} from '../../../../store/location';
import { useDispatch, useSelector } from 'react-redux';
import { getSessionUserId } from '../../../../store/session';
import { fetchRestaurants } from '../../../../store/restaurant';

// https://react-google-maps-api-docs.netlify.app/#googlemap

const Map = ({restaurants, mapState}) => {
  const dispatch = useDispatch()
  const sessionUserId = useSelector(getSessionUserId);
  const {mapCenter, setMapCenter} = mapState;
  const userLocObj = useSelector(checkUserLoc(sessionUserId))
  const { isLoaded} = useLoadScript({googleMapsApiKey: process.env.REACT_APP_MAPS_API_KEY ? process.env.REACT_APP_MAPS_API_KEY: 'AIzaSyAQpOVKpg-kmhVGvDi5uAGL4dzWsaHDoY0'})

  if(!isLoaded) return(<h1>loading...</h1>)


  const options = {
        mapId: '73cef3161f877bcd',
        disableDefaultUI:true,
        clickableIcons:false,
        disableDoubleClickZoom: true,
        scrollwheel: false
    };
    
  const handleOnClick = e =>{
    const lat = e.latLng.lat();
    const lng = e.latLng.lng();

    if(userLocObj){
      dispatch(updateLocation(
          {location:{
            latitude: lat,
            longitude: lng,
            userId: sessionUserId
           }}, userLocObj.id
          ))
      .then(()=> dispatch(fetchRestaurants()))
    }

    setMapCenter({lat, lng})
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

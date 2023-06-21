import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { updateLocation } from "../../../store/location"
import { checkUserLoc } from "../../../store/location"
import { fetchRestaurants } from "../../../store/restaurant"
import { getSessionUserId } from "../../../store/session"

const NearMe = () => {

    const dispatch = useDispatch()
    const sessionUserId = useSelector(getSessionUserId);
    const userLocObj = useSelector(checkUserLoc(sessionUserId))
    const handleOnClick = () =>{
        navigator.geolocation.getCurrentPosition(
            position => {
                const lat = position.coords.latitude;
                const lng = position.coords.longitude;

                
                dispatch(updateLocation(
                    {location:{
                    latitude: lat,
                    longitude: lng,
                    userId: sessionUserId
                    }}, userLocObj.id
                    ))
                .then(()=> dispatch(fetchRestaurants()))
      
  
            }
            
          )
    }
  return (
 
    <button
    id='near-me'
    onClick={handleOnClick}
    className="btn-round-two ux-buttons black-button header-button udc"
    >
    
        Near Me


</button>

  )
}

export default NearMe

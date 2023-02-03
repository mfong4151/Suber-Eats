import React from 'react';
import Options from './Options';
import Map from './GoogleMap';
import './Pickup.css'
import { useSelector } from 'react-redux';
import { getRestaurants } from '../../../store/restaurant';
import { checkUserLoc } from '../../../store/location';
import { getSessionUserId } from '../../../store/session';
import { useState } from 'react';

const Pickup = () => {
  const [options, SetOptions] = useState({
                                  price:0,
                                  rating:0,
                                  proximity:0,
                                })
                                 
  const sessionUserId = useSelector(getSessionUserId);
  const restaurants = useSelector(getRestaurants);
  const userLocation = useSelector(checkUserLoc(sessionUserId))


  return (
    <div className='pickup-cols'>
      
      <Options restaurants={restaurants}/>
      <Map restaurants={restaurants} userLocation={userLocation} /> 

    </div>
  )
}

export default Pickup;
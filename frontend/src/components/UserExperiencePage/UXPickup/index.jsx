import React from 'react';
import Options from './Options';
import Map from './GoogleMap';
import './Pickup.css'
import { useSelector } from 'react-redux';
import { getRestaurantHeap, getRestaurants } from '../../../store/restaurant';
import { checkUserLoc } from '../../../store/location';
import { getSessionUserId } from '../../../store/session';
import { useState } from 'react';

const Pickup = () => {
  const [filterOptions, setFilterOptions] = useState(
                                                      {
                                                        nearYou:false,
                                                        topRated:false,
                                                        rating:false,
                                                        priceRange:0,
                                                        cuisineType:'',
                                                      })
                                 
  const sessionUserId = useSelector(getSessionUserId);
  const restaurants = useSelector(getRestaurants);
  const restaurantsHeap = useSelector(getRestaurantHeap(filterOptions));
  const userLocation = useSelector(checkUserLoc(sessionUserId))


  return (
    <div className='pickup-cols'>
      
      <Options restaurants={restaurants}/>
      <Map restaurants={restaurants} userLocation={userLocation} /> 

    </div>
  )
}

export default Pickup;
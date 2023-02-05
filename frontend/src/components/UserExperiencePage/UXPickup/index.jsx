import React, { useEffect } from 'react';
import Options from './Options';
import Map from './GoogleMap';
import './Pickup.css'
import { useSelector } from 'react-redux';
import { getRestaurantHeap, getRestaurants } from '../../../store/restaurant';
import { checkUserLoc } from '../../../store/location';
import { getSessionUserId } from '../../../store/session';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchRestaurants } from '../../../store/restaurant';
const Pickup = () => {
  const [filterOptions, setFilterOptions] = useState(
    {
      'score': 0,
      'nearYou':false,
      'topRated':false,
      'rating':false,
      'priceRange':0,
      'cuisineType':'',
    })
  
  const restaurants = useSelector(getRestaurants);
  const restaurantsHeap = useSelector(getRestaurantHeap(filterOptions));
  const sessionUserId = useSelector(getSessionUserId);
  const userLocation = useSelector(checkUserLoc(sessionUserId))
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchRestaurants())

  },[dispatch, filterOptions])

  useEffect(()=>{
    console.log(filterOptions)
  },[filterOptions])
  return (
    <div className='pickup-cols'>
      
      <Options restaurants={restaurants} filterOptions={filterOptions} setFilterOptions={setFilterOptions}/>
      <Map restaurants={restaurants} userLocation={userLocation} /> 

    </div>
  )
}

export default Pickup;
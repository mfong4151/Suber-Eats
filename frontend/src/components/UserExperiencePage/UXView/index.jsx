import React, { useEffect } from 'react';
import Options from './Options';
import Map from './GoogleMap';
import './Pickup.css'
import { useSelector } from 'react-redux';
import { getRestaurantHeap } from '../../../store/restaurant';
import { checkUserLoc } from '../../../store/location';
import { getSessionUserId } from '../../../store/session';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchRestaurants } from '../../../store/restaurant';

const UXView = ({}) => {
  const [filterOptions, setFilterOptions] = useState(
    {
      'score': 0,
      'nearYou':false,
      'topRated':false,
      'rating':false,
      'priceRange':0,
      'cuisineType':'',
    })
  
  const restaurantsHeap = useSelector(getRestaurantHeap(filterOptions));
  const sessionUserId = useSelector(getSessionUserId);
  const userLocation = useSelector(checkUserLoc(sessionUserId))
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchRestaurants())
  },[dispatch, filterOptions])

  
  useEffect(()=>{
    const newFilterOptions = {...filterOptions}
    newFilterOptions['location'] = userLocation
    setFilterOptions(newFilterOptions)
  }, [userLocation])
 
  return (
    <div className='pickup-cols'>
      
      <Options restaurants={restaurantsHeap} filterOptions={filterOptions} setFilterOptions={setFilterOptions}/>
      <Map restaurants={restaurantsHeap} userLocation={userLocation} /> 

    </div>
  )
}

export default UXView;
import React, { useEffect } from 'react';
import './Pickup.css'
import { useSelector } from 'react-redux';
import { getRestaurantHeap } from '../../../store/restaurant';
import { checkUserLoc } from '../../../store/location';
import { getSessionUserId } from '../../../store/session';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchRestaurants } from '../../../store/restaurant';
import useWindowSize from '../../customHooks/useWindowSize';
import ViewBrowser from './ViewBrowser';
import ViewMobile from './ViewMobile';

const UXView = () => {

  const windowDim = useWindowSize()
  const [mapCenter, setMapCenter]  =useState({lat: 37.747401957356246, lng: -122.4456108834198}); //this just refers to a default center
  const [filterOptions, setFilterOptions] = useState(
    {
      'score': 0,
      'nearYou':false,
      'topRated':false,
      'rating':false,
      'priceRange':0,
      'cuisineType':'',
    });
    
  const mapState = {mapCenter, setMapCenter};
  const filterState = {filterOptions, setFilterOptions};
  const restaurantsHeap = useSelector(getRestaurantHeap(filterOptions)).slice(0, 25);
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

      
      {windowDim.width > 600 
        ?<ViewBrowser restaurantsHeap={restaurantsHeap} filterState={filterState} mapState={mapState}/>
        :<ViewMobile restaurantsHeap={restaurantsHeap} filterState={filterState} mapState={mapState}/>
    
      }

    </div>
  )
}

export default UXView;
import React, { useEffect, useRef, useState} from 'react';
import UXHeader from '../UXHeader';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRestaurant, getRestaurant } from '../../store/restaurant';
import { fetchMenu } from '../../store/menu';
import MenuListings from './MenuListings';
import MapHeader from './MapHeader';
import Reviews from './Reviews';
import './RestaurantListingPage.css';
import BundleModals from '../universalModals/BundleModals';
import { fetchCart, getCartsRestIdKeys } from '../../store/cart';
import { getSessionUserId } from '../../store/session';
import { createCart } from '../../store/cart';
import RestaurantInfo from './RestaurantInfo';
import { useLocation } from 'react-router-dom';

const RestaurantListing = () => {
  const [firstReviews, setFirstReviews] = useState(true)
  const sessionUserId = useSelector(getSessionUserId)
  const dispatch = useDispatch();
  const {restaurantId} = useParams();
  const restaurant = useSelector(getRestaurant(restaurantId));
  const usersCarts = useSelector(getCartsRestIdKeys)
  const {state} = useLocation()

  const reviewSection = useRef();
  let first = true
  const cartFact = () =>(
    {
        userId:sessionUserId,
        restaurantId: restaurantId
    }
)

  useEffect(()=>{
    dispatch(fetchRestaurant(restaurantId))
    dispatch(fetchMenu(restaurantId))
  },[])

  useEffect(()=>{
    dispatch(createCart(cartFact()))
    .then(dispatch(fetchCart(sessionUserId)))

  },[dispatch, restaurantId])

  if(state && state.from && reviewSection.current && firstReviews){
    setFirstReviews(false)
    reviewSection.current.scrollIntoView({behavior:'smooth'})
  } 
  
  return (
    <>
      <UXHeader/>
      <MapHeader/>
      <RestaurantInfo restaurant={restaurant}/>
      <div className='restaurant-buttons'>
          <div></div>
          <div></div>
      </div>
      <MenuListings restaurantId={restaurantId} usersCarts={usersCarts}/>
      <div id="review-section" ref={reviewSection}>
        <Reviews sessionUserId={sessionUserId}/>
      </div>
      <BundleModals/>      
    </>
  )
}

export default RestaurantListing




import React, { useEffect } from 'react';
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

const RestaurantListing = () => {
  const sessionUserId = useSelector(getSessionUserId)
  const dispatch = useDispatch();
  const {restaurantId} = useParams();
  const restaurant = useSelector(getRestaurant(restaurantId));
  const usersCarts = useSelector(getCartsRestIdKeys)
  const cartFact = () =>(
    {
        userId:sessionUserId,
        restaurantId: restaurantId
    }
)

    // unfortunately this seems to be the most consistent way of getting 

  //we need to somehow get the cartItems here, so we need a useSelector to listen in on changes to carts

  useEffect(()=>{
    dispatch(fetchRestaurant(restaurantId))
    dispatch(fetchMenu(restaurantId))
  },[])

  useEffect(()=>{
    dispatch(createCart(cartFact()))
    .then(dispatch(fetchCart(sessionUserId)))
    
  },[dispatch, restaurantId])
  

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
      <a id="review-section">
        <Reviews sessionUserId={sessionUserId}/>
      </a>
      <BundleModals/>      
    </>
  )
}

export default RestaurantListing




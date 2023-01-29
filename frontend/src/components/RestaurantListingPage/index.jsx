import React, { useEffect } from 'react';
import UXHeader from '../UXHeader';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRestaurant, getRestaurant } from '../../store/restaurant';
import { fetchMenu } from '../../store/menu';
import MenuListings from './MenuListings';
import MapHeader from './MapHeader';
import Reviews from './Reviews';
import star from './assets/star_rating_dark.png'
import './RestaurantListingPage.css';
import BundleModals from '../universalModals/BundleModals';
import { fetchCart, getCartsRestIds } from '../../store/cart';
import { getSessionUserId } from '../../store/session';
import { fetchCartItems, getCartItemRestIds } from '../../store/cartItems';


const RestaurantListing = () => {
  const sessionUserId = useSelector(getSessionUserId)
  const dispatch = useDispatch();
  const {restaurantId} = useParams();
  const restaurant = useSelector(getRestaurant(restaurantId));



  useEffect(()=>{
    dispatch(fetchRestaurant(restaurantId))
    dispatch(fetchMenu(restaurantId))
    dispatch(fetchCart(sessionUserId))
    dispatch(fetchCartItems(restaurantId))
  },[dispatch, restaurantId])
  

  return (
    <>
      <UXHeader/>
      <MapHeader/>
      <div className="listing-info">
        <div className='univ-padding'>
          <h1 className='restaurant-name '>{restaurant?.name}</h1>
        </div>
        <div className='restaurant-info univ-padding'>
          <div className='menu-row-1'>
              <img src={star} alt='star' className="star listing-text-spacing"/>
              <span className='listing-text-spacing'>{restaurant?.rating}</span>
              <span className='listing-text-spacing'>(69420 ratings)</span>
              <span className='listing-text-spacing'>•</span>
              <span className='listing-text-spacing'>{restaurant?.cuisineType.toUpperCase().slice(0,1).concat(restaurant?.cuisineType.slice(1))}</span>
              <span className='listing-text-spacing'>•</span>
              {/* <img src={univPhotos.uberOne} className="uber-one-logo"/> */}
              <span className='listing-text-spacing'>Read 5-Star reviews</span>
              <span className='listing-text-spacing'>•</span>
              <span className='listing-text-spacing' >More Info</span>

          </div>
          <div className="menu-row-1 menu-row-2">
            Open at Some Point
          </div>
          <div className="menu-row-1 menu-row-2">
            Tap for hours, info, and more
          </div>
        </div>

      </div>
      <div className='restaurant-buttons'>
          <div></div>
          <div></div>
      </div>
      <MenuListings/>
      <a id="review-section">
        <Reviews sessionUserId={sessionUserId}/>
      </a>
      <BundleModals/>      
    </>
  )
}

export default RestaurantListing




import React, { useEffect } from 'react';
import UXHeader from '../UXHeader';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRestaurant, getRestaurant } from '../../store/restaurant';
import { fetchMenu, getMenuItems, getMenuReviews } from '../../store/menu';
import { sortMenus } from './utils/menuUtils';
import MenuListings from './MenuListings';
import MapHeader from './MapHeader';
import Reviews from './Reviews';
import star from './assets/star_rating_dark.png'
import './RestaurantListingPage.css';
import BundleModals from '../universalModals/BundleModals';

//https://stackoverflow.com/questions/52064303/reactjs-pass-props-with-redirect-component
//for handling redirection to this page

const RestaurantListing = () => {

  const dispatch = useDispatch();
  const {restaurantId} = useParams();
  const restaurant = useSelector(getRestaurant(restaurantId));
  const menuItems = useSelector(getMenuItems);
  const reviews = useSelector(getMenuReviews);
  const sortedMenu = sortMenus(menuItems)

  useEffect(()=>{
    dispatch(fetchRestaurant(restaurantId))
    dispatch(fetchMenu(restaurantId))
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
              <img src={star} alt='star' className="star"/>
              {restaurant?.rating}
              <span>(69420 ratings)</span>
              <span>•</span>
              <span>{restaurant?.cuisineType.toUpperCase().slice(0,1).concat(restaurant?.cuisineType.slice(1))}</span>
              <span>•</span>
              {/* <img src={univPhotos.uberOne} className="uber-one-logo"/> */}
              <div>Read 5-Star Reviews</div>
              <span>•</span>
              <div>
                More Info
              </div>
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
      <MenuListings menuItems={sortedMenu}/>
      <Reviews reviews={reviews}/>
      <BundleModals/>      
    </>
  )
}

export default RestaurantListing




import React, { useContext, useEffect } from 'react'
import UserMenuModal from '../universalModals/UserMenuModal'
import { UXContext } from '../UXContext'
import UXHeader from '../UXHeader'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRestaurant, getRestaurant } from '../../store/restaurant';
import MapHeader from './MapHeader';
import './RestaurantListingPage.css'
//https://stackoverflow.com/questions/52064303/reactjs-pass-props-with-redirect-component
//for handling redirection to this page

const RestaurantListing = props => {
  const {restaurantId} = useParams()
  const restaurant = useSelector(getRestaurant(restaurantId))
  // const menuItems = useSelector(getMenuItems(menuId))
  const dispatch = useDispatch()
  const {menuModal} = useContext(UXContext)
  

  
  useEffect(()=>{
    dispatch(fetchRestaurant(restaurantId))
    // dispatch(fetchMenuItems(menuId))
  },[dispatch])


  return (
    <>
      <UXHeader/>
      <MapHeader/>
      <div className="listing-info">
        <h1 className='restaurant-name'>{restaurant?.name}</h1>
        <div className='restaurant-info'>
          <img src="" alt="" />
          <div>
          </div>
          <div></div>
          <div></div>
          <div className='restaurant-buttons'></div>
        </div>

      </div>
      
      <div className='listings-main'>
        <div className='table-of-contents'></div>
        <div className='listings-view'></div>

      </div>
      
      <div className='reviews'>
          <div></div>
          <div></div>
      </div>

      {menuModal && <UserMenuModal/>}
    </>
  )
}

export default RestaurantListing
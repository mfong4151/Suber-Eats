import React, { useContext, useEffect } from 'react'
import UserMenuModal from '../universalModals/UserMenuModal'
import { UXContext } from '../UXContext'
import UXHeader from '../UXHeader'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRestaurant, getRestaurant } from '../../store/restaurant';
import { fetchMenu, getMenuItems } from '../../store/menu';
import { sortMenus } from './utils/menuUtils';
import MenuListings from './MenuListings';
import MapHeader from './MapHeader';
import './RestaurantListingPage.css'
//https://stackoverflow.com/questions/52064303/reactjs-pass-props-with-redirect-component
//for handling redirection to this page

const RestaurantListing = () => {

  const dispatch = useDispatch()
  const {restaurantId} = useParams()
  const restaurant = useSelector(getRestaurant(restaurantId))
  const menuItems = useSelector(state => (Object.values(state.menu)))
  const {menuModal} = useContext(UXContext)

  const sortedMenu = sortMenus(menuItems)
  
  useEffect(()=>{
    dispatch(fetchRestaurant(restaurantId))
    dispatch(fetchMenu(restaurantId))
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
      
      <MenuListings menuItems={sortedMenu}/>
     
      
      <div className='reviews'>
          <div></div>
          <div></div>
      </div>

      {menuModal && <UserMenuModal/>}
    </>
  )
}

export default RestaurantListing




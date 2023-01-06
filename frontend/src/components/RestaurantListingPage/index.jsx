import React, { useContext, useEffect } from 'react'
import UserMenuModal from '../universalModals/UserMenuModal'
import { UXContext } from '../UXContext'
import UXHeader from '../UXHeader'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRestaurants, getRestaurant } from '../../store/restaurant';


//https://stackoverflow.com/questions/52064303/reactjs-pass-props-with-redirect-component
//for handling redirection to this page

const RestaurantListing = props => {
  const restaurantId = useParams()
  const restaurant = useSelector(getRestaurant(restaurantId))
  const dispatch = useDispatch()
  const {menuModal} = useContext(UXContext)
  


  useEffect(()=>{
    // dispatch(fetchRestaurant)
  },[])


  return (
    <>
      <UXHeader/>
      
      <div>RestaurantListing</div>
      {menuModal && <UserMenuModal/>}
    </>
  )
}

export default RestaurantListing
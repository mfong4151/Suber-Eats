import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import UXHeader from '../UXHeader.jsx';
import UXPickup from './UXPickup';
import { fetchCart } from '../../store/cart.jsx';
import { fetchRestaurants } from '../../store/restaurant';
import BundleModals from '../universalModals/BundleModals.jsx';
import { fetchLocations } from '../../store/location';
//Not sure if cart management needs to be done in state, context, or store yet
//I need some sort of state to manage the user's cart. 
// I should finish seeding, databases, and tables before proceeding



const UserExperiencePage = () => {
    const sessionUser = useSelector(state=>state.session.user);
    const dispatch = useDispatch();

    useEffect(()=>{

      dispatch(fetchLocations())
      dispatch(fetchRestaurants())
      dispatch(fetchCart(sessionUser.id))
     
    },[dispatch])   

    if(!sessionUser) return <Redirect to='/login'/>

    return (
    <>  
      <UXHeader/>
      <UXPickup/>
      <BundleModals/>        
    </>
  )
}

export default UserExperiencePage;

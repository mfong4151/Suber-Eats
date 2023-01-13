import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import UXHeader from '../UXHeader.jsx';
import UXPickup from './UXPickup';
import { fetchCart } from '../../store/cart.jsx';
import { fetchRestaurants, getRestaurants } from '../../store/restaurant';
import BundleModals from '../universalModals/BundleModals.jsx';
import { useState } from 'react';
import { LocationContext } from './LocationContext.jsx';
//Not sure if cart management needs to be done in state, context, or store yet
//I need some sort of state to manage the user's cart. 
// I should finish seeding, databases, and tables before proceeding



const UserExperiencePage = () => {
    const sessionUser = useSelector(state => state.session.user);
    const restaurants = useSelector(getRestaurants);
    const dispatch = useDispatch();
    const [userLocation, setUserLocation] = useState({lat: 37.747401957356246, lng: -122.4456108834198});


    useEffect(()=>{
      dispatch(fetchRestaurants())
      dispatch(fetchCart(sessionUser.id))

    },[userLocation])   

    if(!sessionUser) return <Redirect to='/login'/>

    return (
    <>  
        <UXHeader/>
        <UXPickup restaurants={restaurants} userLocation={userLocation} setUserLocation={setUserLocation}/>
        <BundleModals userLocation={userLocation}/>
        
    </>
  )
}

export default UserExperiencePage;

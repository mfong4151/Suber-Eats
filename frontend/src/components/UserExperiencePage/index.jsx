import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import UXHeader from '../UXHeader.jsx';
import UXPickup from './UXPickup';
import { useContext } from 'react';
import { UXContext } from '../UXContext.jsx';
import UserMenuModal from '../universalModals/UserMenuModal.jsx'
import { fetchRestaurants, getRestaurants } from '../../store/restaurant';

//Not sure if cart management needs to be done in state, context, or store yet
//I need some sort of state to manage the user's cart. 
// I should finish seeding, databases, and tables before proceeding



const UserExperiencePage = () => {
    const sessionUser = useSelector(state => state.session.user);
    const allRestaurants = useSelector(getRestaurants);
    const restaurants = allRestaurants;
    const dispatch = useDispatch();
    const {menuModal} = useContext(UXContext)
  
    useEffect(()=>{
      dispatch(fetchRestaurants())

    },[])   


    

    if(!sessionUser) return <Redirect to='/login'/>


    return (
    <>  
        <UXHeader/>
        <UXPickup restaurants={restaurants}/>
        {menuModal && <UserMenuModal/>}
    </>
  )
}

export default UserExperiencePage;

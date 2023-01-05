import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import UXHeader from './UXHeader.jsx';
import UXPickup from './UXPickup';
import { useState } from 'react';
import { UXContext } from './UXContext.jsx';
import UserMenuModal from './universalModals/UserMenuModal.jsx'
import { fetchRestaurants, getRestaurants } from '../../store/restaurant';

//Not sure if cart management needs to be done in state, context, or store yet
//I need some sort of state to manage the user's cart. 
// I should finish seeding, databases, and tables before proceeding


//Login header with 3 modals
//Main div body, with two main divs
//1) Scrollable side with 3 divs
//2 ) Google maps
//Scale to have either pickup or delivery based on the modal button you press

const filters = {
        sort: 'picked for you',
        topEats: [false, false, false, false],
        dietary:{
                vegetarian: false,
                vegan: false,
                glutenFree: false,
                halal: false,
                allergyFriendly: false,
                }

      }

const UserExperiencePage = () => {
    const sessionUser = useSelector(state => state.session.user);
    const allRestaurants = useSelector(getRestaurants);
    const restaurants = allRestaurants;
    const [userLocation, setUserLocation] = useState('');
    const [numCarts, setNumCarts] = useState(0);
    const [sortOptions, setSortOptions] = useState(filters);
    const [menuModal, setMenuModal] = useState(false);
    const dispatch = useDispatch();
  
  
    useEffect(()=>{
      dispatch(fetchRestaurants())

    },[])   

    const toggleMenuModal = () =>{ 
      setMenuModal(!menuModal)
    }    

    

    if(!sessionUser) return <Redirect to='/login'/>


    return (
    <>  
      <UXContext.Provider value={{numCarts, setNumCarts, sortOptions, setSortOptions, 
                              menuModal, setMenuModal, toggleMenuModal}}>
        <UXHeader/>
        <UXPickup restaurants={restaurants}/>
        {menuModal && <UserMenuModal/>}
      </UXContext.Provider>
    </>
  )
}

export default UserExperiencePage;

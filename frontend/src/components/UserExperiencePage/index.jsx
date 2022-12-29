import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import UXHeader from './UXHeader';
import UXPickup from './UXPickup';
import { createContext } from 'react';

//Not sure if cart management needs to be done in state, context, or store yet
//I need some sort of state to manage the user's cart. 
// I should finish seeding, databases, and tables before proceeding


//Login header with 3 modals
//Main div body, with two main divs
//1) Scrollable side with 3 divs
//2 ) Google maps
//Scale to have either pickup or delivery based on the modal button you press
const OrderContext = createContext(null)

const UserExperiencePage = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user)
    
    if(!sessionUser) return <Redirect to='/login'/>
    
    return (
    <>  
      <OrderContext.Provider>
        <UXHeader/>
        <UXPickup/>
      </OrderContext.Provider>
    </>
  )
}

export default UserExperiencePage;

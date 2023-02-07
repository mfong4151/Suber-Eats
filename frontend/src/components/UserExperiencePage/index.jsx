import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import UXHeader from '../UXHeader.jsx';
import UXView from './UXView';
import { fetchCart } from '../../store/cart.jsx';
import { fetchRestaurants } from '../../store/restaurant';
import BundleModals from '../universalModals/BundleModals.jsx';
import { fetchLocations } from '../../store/location';
import Footer from '../generalDesignComponents/Footer/index.jsx';



const UserExperiencePage = () => {
    const sessionUser = useSelector(state=>state.session.user);
    const dispatch = useDispatch();

    useEffect(()=>{

      dispatch(fetchLocations())
      dispatch(fetchRestaurants())
      if(sessionUser)dispatch(fetchCart(sessionUser.id)) //conditional is needed her because this will crash before redirect without it
     
    },[dispatch])   

    if(!sessionUser) return <Redirect to='/login'/>

    return (
    <>  
      <UXHeader/>
      <UXView/>
      <Footer/>
      <BundleModals/>        
    </>
  )
}

export default UserExperiencePage;

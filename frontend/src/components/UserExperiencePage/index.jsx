import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { fetchCart } from '../../store/cart.jsx';
import { fetchRestaurants } from '../../store/restaurant';
import { fetchLocations } from '../../store/location';
import BundleModals from '../Modals/BundleModals.jsx';
import UXHeader from '../UXHeader';
import UXView from './UXView';
import Footer from '../Footer/index.jsx';


const UserExperiencePage = () => {
    
    const [menuModal, setMenuModal ] = useState(false);
    const [locationModal, setLocationModal] = useState(false);
    const [cartModal, setCartModal] = useState(false);
    const [restCartModal, setRestCartModal] = useState(false); 
    const modalStates = {menuModal, setMenuModal, locationModal, setLocationModal, cartModal, setCartModal, restCartModal, setRestCartModal}
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
      <UXHeader modalStates={modalStates}/>
      <UXView/>
      <Footer/>
      <BundleModals modalStates={modalStates}/>        
    </>
  )
}

export default UserExperiencePage;

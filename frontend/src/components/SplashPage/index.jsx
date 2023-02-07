import React from 'react'
import SplashHeader from './SplashHeader';
import SplashBodySearch from './SplashBodySearch';
import SplashOptions from './SplashOptions';
import SplashCities from './SplashCitites';
import SplashCountries from './SplashCountries'
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Footer from '../generalDesignComponents/Footer';
import UserMenuModal from '../universalModals/UserMenuModal';
import { useState } from 'react';

const SplashPage= () => {
  const [menuModal, setMenuModal ] = useState(false)
  const modalStates = {menuModal, setMenuModal}
  const sessionUser = useSelector(state => state.session.user);
  if (sessionUser) return <Redirect to='/deliverypickup' />
  
  return (
    <>
        <SplashHeader menuModal={menuModal} setMenuModal={setMenuModal}/>
        <SplashBodySearch/>
        <SplashOptions />
        <SplashCities />
        <SplashCountries/>
        {/* <SplashSubFooter/> */}
        <Footer/>
        {menuModal && <UserMenuModal  modalStates={modalStates}/>}
    </>
  )
}

export default SplashPage;

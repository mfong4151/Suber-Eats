import React from 'react'
import SplashHeader from './SplashHeader.jsx';
import SplashBodySearch from './SplashBodySearch';
import SplashOptions from './SplashOptions';
import SplashCities from './SplashCities.jsx';
import SplashCountries from './SplashCountries.jsx'
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Footer from '../Footer/index.jsx';
import UserMenuModal from '../universalModals/UserMenuModal';
import { useState } from 'react';

const SplashPage= () => {
  const [menuModal, setMenuModal ] = useState(false)
  const modalStates = {menuModal, setMenuModal}
  const sessionUser = useSelector(state => state.session.user);
  if (sessionUser) return <Redirect to='/deliverypickup' />
  
  return (
    <>
        <SplashHeader modalStates={modalStates}/>
        <SplashBodySearch/>
        <SplashOptions />
        <SplashCities />
        <SplashCountries/>
        {/* <SplashSubFooter/> */}
        <Footer/>
        {menuModal && <UserMenuModal modalStates={modalStates} />}
    </>
  )
}

export default SplashPage;

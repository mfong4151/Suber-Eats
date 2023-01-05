import React from 'react'
import SplashHeader from './SplashHeader';
import SplashBodySearch from './SplashBodySearch';
import SplashOptions from './SplashOptions';
import SplashCities from './SplashCitites';
import SplashCountries from './SplashCountries'
import SplashSubFooter from './SplashSubFooter'
import SplashFooter from './SplashFooter';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

const SplashPage= () => {

  const sessionUser = useSelector(state => state.session.user);
  if (sessionUser) return <Redirect to='/deliverypickup' />
  
  return (
    <>
        <SplashHeader />
        <SplashBodySearch/>
        <SplashOptions />
        <SplashCities />
        <SplashCountries/>
        <SplashSubFooter/>
        <SplashFooter /> 
    </>
  )
}

export default SplashPage;

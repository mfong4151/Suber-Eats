import React from 'react'
import SplashHeader from './SplashHeader';
import SplashBodySearch from './SplashBodySearch';
import SplashOptions from './SplashOptions';
import SplashCities from './SplashCitites';
import SplashCountries from './SplashCountries'
import SplashSubFooter from './SplashSubFooter'
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Footer from '../generalDesignComponents/Footer';

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
        <Footer/>
    </>
  )
}

export default SplashPage;

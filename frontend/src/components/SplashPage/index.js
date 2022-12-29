import React from 'react'
import SplashHeader from './SplashHeader';
import SplashBodySearch from './SplashBodySearch';
import SplashOptions from './SplashOptions';
import SplashCities from './SplashCitites';
import SplashCountries from './SplashCountries'
import SplashSubFooter from './SplashSubFooter'
import SplashFooter from './SplashFooter';

const SplashPage= () => {
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

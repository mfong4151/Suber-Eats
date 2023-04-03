import React from 'react';
import { operatingCountries } from './utils/operating_countries';
import './SplashPage.css'

const SplashCountries = () => {
  const countries = operatingCountries()

  return (
    <div className="univ-padding univ-padding-mobile splash-comps udc-mobile sb-mobile" id='splash-bottom'>
        <div className='splash-subheader'>
            <h1 className='splash-title'>Countries with Suber Eats</h1>
        </div>
        
        <div className='geo-location'>{countries.map((country, idx) =>( <div key={idx}>{country}</div>))} </div>
    </div>
  )
}

export default SplashCountries;

import React from 'react';
import { operatingCountries } from './utils/operating_countries';
import './SplashPage.css'

const SplashCountries = () => {
  const countries = operatingCountries()

  return (
    <div className="univ-padding splash-comps" id='splash-bottom'>
        <div className='splash-subheader'>
            <h1 className='splash-title'>Countries with Suber<span> Eats</span></h1>
        </div>
        
        <div className='geo-location'>

          {
          countries.map((country, idx) =>(
                <div key={idx}>{country}</div>
              ))
          }

        </div>
    </div>
  )
}

export default SplashCountries;

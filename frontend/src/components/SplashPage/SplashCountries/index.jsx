import React from 'react';
import {Link} from 'react-router-dom';
import { operatingCountries } from '../utils/operating_countries';

const SplashCountries = () => {
  const countries = operatingCountries()

  return (
    <div className="univ-padding splash-comps">
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

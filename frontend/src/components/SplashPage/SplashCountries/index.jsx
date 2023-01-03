import React from 'react';
import {Link} from 'react-router-dom';
import { operatingCountries } from '../utils/operating_countries';

const SplashCountries = () => {
  const countries = operatingCountries()

  return (
    <div className="univ-padding splash-comps">
        <div className='splash-header'>
            <h1 className='splash-title'>Countries with Suber<span> Eats</span></h1>
            <Link to={'/temp'} className="splash-links">View all Countries</Link>
        </div>
        
        <div className='geo-location'>

          {
          countries.map((country, idx) =>(
                <div key={idx}><Link to='/'>{country}</Link></div>
              ))
          }

        </div>
    </div>
  )
}

export default SplashCountries;

import React from 'react';
import '../SplashPage.css'

import { operatingCities } from '../utils/operating_cities';

const SplashCities = () => {
  const cities = Object.values(operatingCities('USA'));


  return (
    <div className="univ-padding splash-comps">
        <div className='splash-subheader'>
            <h1 className='splash-title'>Suber Eats cities Near Me</h1>
        </div>
        
        <h2></h2>

        <div className='geo-location'>

          {
          cities.map((city, idx) =>(
                <div key={idx}>{city}</div>
              ))
          }

        </div>
    </div>
  )
}

export default SplashCities;

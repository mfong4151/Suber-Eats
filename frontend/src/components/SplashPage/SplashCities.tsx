import React from 'react';
import './SplashPage.css';
import { operatingCities } from './utils/operating_cities';

const SplashCities: React.FC = () => {
  const cities: string[] = Object.values(operatingCities('USA'));
  
  return (
    <div className="univ-padding univ-padding-mobile splash-comps udc-mobile sb-mobile">
      <div className='splash-subheader'>
        <h1 className='splash-title'>Suber Eats cities Near Me</h1>
      </div>
      <div className='geo-location'>
        {cities.map((city, idx) => (
          <div key={idx}>{city}</div>
        ))}
      </div>
    </div>
  )
}

export default SplashCities;

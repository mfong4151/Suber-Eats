import React from 'react';
import {Link} from 'react-router-dom';
import './SplashCities.css'
import { operatingCities } from '../utils/operating_cities';

const SplashCities = () => {
  const cities = Object.values(operatingCities('USA'));


  return (
    <div className="univ-padding splash-comps">
        <div className='splash-header'>
            <h1 className='splash-title'>Cities near me</h1>
            <Link to={'/temp'} className="splash-links">View all 500+ cities</Link>
        </div>
        
        <h2> GOOGLE MAP HERE</h2>

        <div className='geo-location'>

          {
          cities.map((city, idx) =>(
                <div key={idx}><Link to='/' >{city}</Link></div>
              ))
          }

        </div>
    </div>
  )
}

export default SplashCities;
import React from 'react';
import { Link } from 'react-router-dom';
import splashRamen from './assets/splash-ramen.png'
import './SplashBodySearch.css';


const SplashBodySearch = () => {

  return (
    <div id='search-component'>
        <img src={splashRamen} alt='ramen'/>
          
          <div id='splash-main' className ="univ-padding">
              <h1 id='order-food-banner'>Order food to Your Door</h1>

              <div id='search-options'>
                <form id='search-form'>  
                  <input type='text' name='location' placeholder='Enter delivery address'/> 
                 
                </form> 

                <select name='deliver-now'>
                      <option value="deliver-now">Deliver now</option>
                      <option value="schedule-for-later">Schedule for later</option>
                  </select> 

                <button className="button-sq" id="find-food" type="submit" form="search-form">Find Food</button>
              </div>

            <p><Link to={'/signIn'} id="sign-in">Sign In</Link> for your recent addresses</p>
          </div>
    </div>
  )
}

export default SplashBodySearch;

import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import splashRamen from './assets/splash-ramen.png'
import '../SplashPage.css'

const SplashBodySearch = () => {

  return (
    <div id='search-component'>
        <img src={splashRamen} alt='ramen'/>
          
          <div id='splash-main' className ="univ-padding">
              <h1 id='order-food-banner'>Order food to Your Door</h1>

              {/* <div id='search-options'>
                <form id='search-form'>  
                  <input type='text' name='location' placeholder='Enter delivery address'/> 
                 
                </form> 
                <div className='grey-button'>   
                  <select name='deliver-now'  >
                      <option value="deliver-now">Deliver now</option>
                      <option value="schedule-for-later">Schedule for later</option>
                  </select> 
                </div>

                <Link to={'/login'} className="button-sq" id="find-food" type="submit" form="search-form">Find Food</Link>
              </div> */}

            <p><NavLink to={'/login'} id="sign-in">Sign in</NavLink> for your recent addresses</p>
          </div>
    </div>
  )
}

export default SplashBodySearch;

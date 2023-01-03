import React from 'react';
import LocationIcon from './UXPickup/SVGs/LocationIcon';
import SearchIcon from './UXPickup/SVGs/SearchIcon';
import CartIcon from './UXPickup/SVGs/CartIcon';
import './UserExperiencePage.css';



const UXHeader = () => {
  //temporary place holder until we iron out cart dynamics
  const temp = 0

  return (
    <header id="splash-header" className="univ-padding">

        <div className="logo header-left">
              <div>
                  <svg width="22" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>
                  </svg>
              </div>
              <div>
                    <h1 className='suber'>Suber <span className="eats">Eats</span></h1>
              </div>
        </div>

        <button className="btn-round ux-buttons">Delivery Pickup</button>
        <button className='btn-round ux-buttons'><LocationIcon/><span className="map-location-text">Map Location Pick Up Now</span></button>

        <form className="form-bg">
          <SearchIcon/>
          <input  type='text' name='location' placeholder='What are you craving?'/> 

        </form>
        <button id='cart-button' className='btn-round ux-buttons'><span className='embedded-icon-padding'><SearchIcon/></span>{temp} carts</button>


    </header>

  )
}

export default UXHeader;

import React, { useContext } from 'react';
import LocationIcon from './UserExperiencePage/UXPickup/SVGs/LocationIcon';
import SearchIcon from './UserExperiencePage/UXPickup/SVGs/SearchIcon';
import './Header.css';
import MenuIcon from './SVGs/MenuIcon';
import { UXContext } from './UXContext.jsx';


const UXHeader = () => {
  //temporary place holder until we iron out cart dynamics
  const {setMenuModal, toggleMenuModal} = useContext(UXContext);

  const temp = 0;


  return (
    <header id="splash-header" className="univ-padding">

        <div className="logo header-left">
              <button className='menu-modal' onClick={toggleMenuModal}>
                <MenuIcon/>
              </button>
                  
              
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

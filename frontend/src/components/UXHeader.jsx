import React, { useEffect, useState } from 'react';
import LocationIcon from './SVGs/LocationIcon';
import SearchIcon from './UserExperiencePage/UXView/SVGs/SearchIcon';
import './Header.css';
import MenuIcon from './SVGs/MenuIcon';
import { useHistory,  } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { getCartSizeFromWildcard } from '../store/cart';
import {useSelector} from 'react-redux'

const UXHeader = ({modalStates}) => {
  const {menuModal, setMenuModal, cartModal, setCartModal, locationModal, setLocationModal} = modalStates;

  let {pathname} = useLocation();
  const [_, path, wildCard] = pathname.split('/');
  const history = useHistory();
  const cartQuant = useSelector(getCartSizeFromWildcard(Number(wildCard)))


  return (
    <header className="univ-padding" id="ux-header">

        <div className="logo header-left">
              <button className='menu-modal minimal-header-padding' onClick={()=> setMenuModal(!menuModal)}>
                <MenuIcon/>
              </button>
      
              <div className='logo-holder' onClick={()=> history.push('/')}>
                    <h1 className='suber'>Suber <span className="eats">Eats</span></h1>
              </div>
              
              <button className='btn-round ux-buttons minimal-header-padding grey-button-no-shad' onClick={()=> setLocationModal(!locationModal)}>
                  <LocationIcon/>
                  <span className="map-location-text">
                    How to use map interface
                  </span>
              </button>

        </div>
        

        
          {/* <form className="form-bg minimal-header-padding">
            <SearchIcon/>
            <input id='search-form' type='text' name='location' placeholder='What are you craving?'/> 

          </form> */}
          
        <div className='header-button-spacing'>

          <button id='cart-button' className='btn-round ux-buttons black-button' onClick={()=> setCartModal(!cartModal)}>
            <span className='embedded-icon-padding'>
                <SearchIcon/>
            </span>
            {path !== 'restaurantListing' && `Carts`} 
            {path === 'restaurantListing' && `See your cart: ${cartQuant ? cartQuant : `0`}`} 
          </button>
        </div>


    </header>

  )
}

export default UXHeader;

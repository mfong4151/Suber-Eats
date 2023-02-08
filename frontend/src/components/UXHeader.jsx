import React, { useState } from 'react';
import LocationIcon from './SVGs/LocationIcon';
import SearchIcon from './UserExperiencePage/UXView/SVGs/SearchIcon';
import './Header.css';
import MenuIcon from './SVGs/MenuIcon';
import { useHistory,  } from 'react-router-dom';
import useWindowSize from './customHooks/useWindowSize';

const UXHeader = ({modalStates}) => {
  const {menuModal, setMenuModal, cartModal,    setCartModal, restCartModal, setRestCartModal, locationModal, setLocationModal} = modalStates;
  const windowSize = useWindowSize()

  const history = useHistory()
  return (
    <header className="univ-padding" id="ux-header">

        <div className="logo header-left">
              <button className='menu-modal minimal-header-padding' onClick={()=> setMenuModal(!menuModal)}>
                <MenuIcon/>
              </button>
      
              <div id='logo-holder' onClick={()=> history.push('/')}>
                    <h1 className='suber'>Suber <span className="eats">Eats</span></h1>
              </div>
        </div>

        <button className='btn-round ux-buttons minimal-header-padding' onClick={()=> setLocationModal(!locationModal)}><LocationIcon/>
              <span className="map-location-text">{' How to use map interface'}
              </span>
        </button>
        <form className="form-bg minimal-header-padding">
          <SearchIcon/>
          <input id='search-form' type='text' name='location' placeholder='What are you craving?'/> 

        </form>
        <button id='cart-button' className='btn-round ux-buttons' onClick={()=> setCartModal(!cartModal)}>
            <span className='embedded-icon-padding'>
                <SearchIcon/>
            </span>
            Carts
        </button>

    </header>

  )
}

export default UXHeader;

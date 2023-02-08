import React, { useState } from 'react';
import LocationIcon from './SVGs/LocationIcon';
import SearchIcon from './UserExperiencePage/UXView/SVGs/SearchIcon';
import './Header.css';
import MenuIcon from './SVGs/MenuIcon';
import { useHistory,  } from 'react-router-dom';
import useWindowSize from './customHooks/useWindowSize';
import BundleModals from './universalModals/BundleModals';

const UXHeader = ({modalStates}) => {
  const {menuModal, setMenuModal, cartModal,    setCartModal, restCartModal, setRestCartModal, locationModal, setLocationModal} = modalStates;
  const windowSize = useWindowSize()

  const history = useHistory()
  return (
    <header className="splash-header univ-padding">

        <div className="logo header-left">
              <button className='menu-modal' onClick={()=> setMenuModal(!menuModal)}>
                <MenuIcon/>
              </button>
      
              <div onClick={()=> history.push('/')}>
                    <h1 className='suber'>Suber <span className="eats">Eats</span></h1>
              </div>
        </div>

        {/* <button className="btn-round ux-buttons" id="delivery-pickup">Preset Locations</button> */}
        {/* {location.pathname=== '/deliverypickup' && <button className='btn-round ux-buttons' onClick={toggleLocationModal}><LocationIcon/>
              <span className="map-location-text">{' How to use map interface'}
              </span>
        </button>} */}

          <button className='btn-round ux-buttons' onClick={()=> setLocationModal(!locationModal)}><LocationIcon/>
              <span className="map-location-text">{' How to use map interface'}
              </span>
        </button>
        <form className="form-bg">
          <SearchIcon/>
          <input  type='text' name='location' placeholder='What are you craving?'/> 

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

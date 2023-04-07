import React from 'react';
import LocationIcon from '../SVGs/LocationIcon';
import SearchIcon from '../UserExperiencePage/UXView/SVGs/SearchIcon';
import './UXHeader.css';
import MenuIcon from '../SVGs/MenuIcon';
import { useHistory,  } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { getCartSizeFromWildcard } from '../../store/cart';
import {useSelector} from 'react-redux'

const UXHeader = ({modalStates}) => {
  const {menuModal, setMenuModal, cartModal, setCartModal, locationModal, setLocationModal} = modalStates;

  let {pathname} = useLocation();
  const [_, path, wildCard] = pathname.split('/');
  const history = useHistory();
  const cartQuant = useSelector(getCartSizeFromWildcard(Number(wildCard)))


  return (
    <header className="univ-padding" id="ux-header">

        <div className="logo header-left fdc-mobile">
              <div className='udc'>

                <button className='menu-modal minimal-header-padding' onClick={()=> setMenuModal(!menuModal)}>
                  <MenuIcon/>
                </button>
        
                <div className='logo-holder' onClick={()=> history.push('/')}>
                      <h1 className='suber'>Suber <span className="eats">Eats</span></h1>
                </div>
              </div>
              
              <button id="how-to-map" className='btn-round ux-buttons grey-button-no-shad header-button udc' onClick={()=> setLocationModal(!locationModal)}>
                  <LocationIcon/>
                  <span className="map-location-text udc">
                    How to use map interface
                  </span>
              </button>

        </div>
        

{/*         
          <form className="form-bg minimal-header-padding">
            <SearchIcon/>
            <input id='search-form' type='text' name='location' placeholder='What are you craving?'/> 

          </form> */}
          
        <div className='header-button-spacing'>

          <button id={`${path === 'restaurantListing' ? 'cart-button-rest-page': 'cart-button'}`} 
            className='btn-round ux-buttons black-button header-button udc'
            onClick={()=> setCartModal(!cartModal)}>
            <SearchIcon/>
            <div id='carts-text-holder' className='udc'>
              {path !== 'restaurantListing' && `Carts`} 
              {path === 'restaurantListing' && `See your cart: ${cartQuant ? cartQuant : `0`}`} 

            </div>
          </button>
        </div>


    </header>

  )
}

export default UXHeader;

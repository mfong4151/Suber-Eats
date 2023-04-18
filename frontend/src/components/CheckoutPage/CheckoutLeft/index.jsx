import React from 'react'
import LocationIcon from '../../SVGs/LocationIcon.jsx'
import '../CheckoutPage.css'
import YourItems from './YourItems'

import GeneralMap from '../../generalDesignComponents/GeneralMap/index.jsx'
const CheckoutLeft = ({checkoutCart}) => {

  const [street, city, state, country] = checkoutCart.address.split(',')
  
  return (
      <>
      <div className="checkout-lr">
          <h1 className='rest-title'>{checkoutCart.restName}</h1>
          <div className="mp checkout-deliv-pickup" id='grey-banner'>
              <span>Delivery</span>
          </div>

          <GeneralMap coords={{lat: checkoutCart.restLat, lng: checkoutCart.restLng}} mapStyle={"checkout-container"}/>
          <div className='delivery-section delivery-header-holder fdc sb'>
            <h4 className='delivery-header'> Delivery from</h4>
            <div className="delivery-options">
                <div className='loc-left'>
                  <div className='icon-spacing'>

                    <LocationIcon/>
                  </div>
                  <div className="delivery-options-text fdc sb">
                     <h4 id="delivery-text-top">{street}</h4>
                     <p className="delivery-text-bottom">{city}</p>
                  </div>
                </div>
            </div>

          </div>

         
          <div className='delivery-section delivery-header-holder fdc sb'>
            <h4 className='delivery-header'> Delivery to</h4>
            <div className="delivery-options">
                  
              <div className='loc-left'>
                <div className='icon-spacing'>

                  <LocationIcon/>
                </div>            

                <div className="delivery-options-text fdc sb">
                  <form id="delivery-form">
                    <input type='text' name='users-address' placeholder='Your address here' id='delivery-input'/>
                  </form>
                  <p className="delivery-text-bottom">Your delivery address</p>
                </div>
              </div>
            </div>
          </div>

         
          <YourItems/>
      </div>
        
   

    </>

  )
}

export default CheckoutLeft
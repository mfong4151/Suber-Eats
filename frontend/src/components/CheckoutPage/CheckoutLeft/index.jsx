import React from 'react'
import CheckoutHeader from './CheckoutHeader'
import LocationIcon from '../../SVGs/LocationIcon.jsx'
import '../CheckoutPage.css'
import StandingPerson from '../SVGs/StandingPerson'
import DeliveryEstimate from './DeliveryEstimate'
import YourItems from './YourItems'
import Payment from './Payment'
import AddOnWidgets from './AddOnWidgets.jsx'
import CheckoutMap from './CheckoutMap'

const CheckoutLeft = ({checkoutCart}) => {
  console.log(checkoutCart)

  let street, city, state, country = checkoutCart.address.split(' ')
  return (
    <>
      <CheckoutHeader/>
      <div className="univ-padding checkout-lr">
          <h1 className='rest-title'>{checkoutCart.restName}</h1>
          <button className="mp checkout-deliv-pickup grey-button">
              <span>Delivery</span>
          </button>

          <CheckoutMap checkoutCoords={{lat: checkoutCart.restLat, lng: checkoutCart.restLng}}/>

          <div className="delivery-options mp">

                <div className='loc-left'>
                <LocationIcon/>
                <div className="delivery-options-text">
                   <h4 className="delivery-text-top">{street}</h4>
                   <p className="delivery-text-bottom">{city}</p>
                </div>
                </div>
          </div>
            <div className="delivery-options">
                <div className="delivery-options-text">
                   <h4 className="delivery-text-top">Meet at door</h4>
                   <p className="delivery-text-bottom">Add delivery Instructions</p>
                  </div>
          </div>
          <YourItems/>
      </div>
        
   

    </>

  )
}

export default CheckoutLeft
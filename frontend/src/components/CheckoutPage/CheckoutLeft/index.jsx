import React from 'react'
import CheckoutHeader from './CheckoutHeader'
import LocationIcon from '../../SVGs/LocationIcon.jsx'
import '../CheckoutPage.css'
import StandingPerson from '../SVGs/StandingPerson'
import DeliveryEstimate from './DeliveryEstimate'
import YourItems from './YourItems'
import Payment from './Payment'
import AddOnWidgets from './AddOnWidgets.jsx'
const CheckoutLeft = (orderInfo) => {
  return (
    <>
      <CheckoutHeader/>
      <div className="univ-padding checkout-lr">
          <h1 className='rest-title'>Rest Name</h1>
          <button className="checkout-deliv-pickup grey-button">
              <span>Delivery</span>
              <span>Pickup</span>
          </button>

          <div className="delivery-options">

                <div className='loc-left'>
                <LocationIcon/>
                <div className="delivery-options-text">
                   <h4 className="delivery-text-top">ADDRESS</h4>
                   <p className="delivery-text-bottom">CITY</p>
                </div>
                </div>
                <button className="delivery-edit grey-button udc">Edit</button>
          </div>
            <div className="delivery-options">
                <div className="delivery-options-text">
                   <h4 className="delivery-text-top">Meet at door</h4>
                   <p className="delivery-text-bottom">Add delivery Instructions</p>
                  </div>
                <button className="delivery-edit grey-button udc">Edit</button>
          </div>
          <DeliveryEstimate/>
          <Payment/>
          <YourItems/>
          <AddOnWidgets/>
      </div>
        
   

    </>

  )
}

export default CheckoutLeft
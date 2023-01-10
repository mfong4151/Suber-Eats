import React from 'react'
import CheckoutHeader from './CheckoutHeader'
import LocationIcon from '../../SVGs/LocationIcon.jsx'
import '../CheckoutPage.css'
import StandingPerson from '../SVGs/StandingPerson'
import DeliveryEstimate from './DeliveryEstimate'
import YourItems from './YourItems'
import Payment from './Payment'
import AddOnWidgets from './AddOnWidgets.jsx'
const CheckoutLeft = ({checkoutOrder}) => {


  const firstOrder = checkoutOrder[0]
  let address = firstOrder.address.split(',')
  let street = address[0], city = address[1]
  
  return (
    <>
      <CheckoutHeader/>
      <div className="univ-padding checkout-lr">
          <h1 className='rest-title'>{firstOrder.restName}</h1>
          <button className="checkout-deliv-pickup grey-button">
              <span>Delivery</span>
              <span>Pickup</span>
          </button>

          <div className="delivery-options">

                <div className='loc-left'>
                <LocationIcon/>
                <div className="delivery-options-text">
                   <h4 className="delivery-text-top">{street}</h4>
                   <p className="delivery-text-bottom">{city}</p>
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
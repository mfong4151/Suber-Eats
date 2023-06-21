import '../CheckoutPage.css'
import React from 'react'
import LocationIcon from '../../SVGs/LocationIcon'

const DeliveryTo = ({}) => {
  return (
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

  )
}

export default DeliveryTo

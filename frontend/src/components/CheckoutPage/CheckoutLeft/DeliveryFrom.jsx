import React from 'react'
import '../CheckoutPage.css'
import LocationIcon from '../../SVGs/LocationIcon'
const DeliveryFrom = ({checkoutCart}) => {
    const [street, city, state, country] = checkoutCart.address.split(',')

  return (
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
  )
}

export default DeliveryFrom

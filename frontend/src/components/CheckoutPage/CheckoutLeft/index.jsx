import React from 'react'
import LocationIcon from '../../SVGs/LocationIcon.jsx'
import '../CheckoutPage.css'
import YourItems from './YourItems'

import GeneralMap from '../../generalDesignComponents/GeneralMap/index.jsx'
import DeliveryTo from './DeliveryTo.jsx'
import DeliveryFrom from './DeliveryFrom.jsx'
const CheckoutLeft = ({checkoutCart}) => {

  
  return (
      <>
      <div className="checkout-lr">
          <h1 className='rest-title'>{checkoutCart.restName}</h1>
          

          <GeneralMap coords={{lat: checkoutCart.restLat, lng: checkoutCart.restLng}} mapStyle={"checkout-container"}/>


          <div id='checkout-details' className="fdr">
          
            <div className='checkout-section fdc'>
              <DeliveryFrom checkoutCart={checkoutCart}/>
              <DeliveryTo/>         

            </div>
          
            <div className='checkout-section'>
              <YourItems/>

            </div>
          </div>
      </div>
        
   

    </>

  )
}

export default CheckoutLeft
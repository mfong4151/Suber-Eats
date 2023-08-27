import React from 'react'
import LocationIcon from '../../SVGs/LocationIcon.jsx'
import '../CheckoutPage.css'
import YourItems from './YourItems'

import GeneralMap from '../../GeneralMap/index.jsx'
import DeliveryTo from './DeliveryTo.jsx'
import DeliveryFrom from './DeliveryFrom.jsx'
const CheckoutLeft = ({checkoutCart}) => {

  
  return (
      <>
      <div className="checkout-lr">
          <h1 className='rest-title'>{checkoutCart.restName}</h1>
          

          <GeneralMap coords={{lat: checkoutCart.restLat, lng: checkoutCart.restLng}} mapStyle={"checkout-container"}/>


          
              <DeliveryFrom checkoutCart={checkoutCart}/>
              <DeliveryTo/>         

          
              <YourItems/>

      </div>
        
   

    </>

  )
}

export default CheckoutLeft
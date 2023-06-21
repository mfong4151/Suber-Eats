import React from 'react'
import CheckoutLeft from '.'
import CheckoutRight from '../CheckoutRight'

const CheckoutDesktop = ({checkoutCart}) => {
  return (
    <div id='checkout-divide'>
        <div id='left'>
            <CheckoutLeft checkoutCart={checkoutCart}/>
        </div>
         <div id='right'>
            <CheckoutRight checkoutCart={checkoutCart}/>
        </div>
</div>

  )
}

export default CheckoutDesktop

import React from 'react'
import CheckoutLeft from '.'
import CheckoutRight from '../CheckoutRight'

const CheckoutMobile = ({checkoutCart}) => {
  return (
    <>
             <div id='left'>
            <CheckoutLeft checkoutCart={checkoutCart}/>
            </div>
        <div id='right'>
        <CheckoutRight checkoutCart={checkoutCart}/>

        </div>
    </>

  )
}

export default CheckoutMobile

import React from 'react'
import { useDispatch } from 'react-redux'
import "../CheckoutPage.css"


const CheckoutRight = () => {
  const dispatch = useDispatch()



  return (
    <div className='checkout-right'>
        <button className="place-order udc"><span>Place order</span></button>

    </div>
  )
}

export default CheckoutRight
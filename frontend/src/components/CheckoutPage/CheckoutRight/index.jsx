import React from 'react'
import { useDispatch } from 'react-redux'
import "../CheckoutPage.css"
import { deleteCart} from '../../../store/cart'
import { useHistory } from 'react-router-dom'
import { calcTaxAndFees } from '../utils/restaurantCrudUtils'
import { useState } from 'react'

const CheckoutRight = ({checkoutCart}) => {
  const [tip, setTip] = useState(0)
  const dispatch = useDispatch()
  const history = useHistory()
  const subtext = "If you’re not around when the delivery person arrives, they’ll leave your order at the door. By placing your order, you agree to take full responsibility for it once it’s delivered. Orders containing alcohol or other restricted items may not be eligible for leave at door and will be returned to the store if you are not available."
  let subtotal = checkoutCart.cartItemsSum
  const taxAndFees = calcTaxAndFees(subtotal)
  const handlePlaceOrder = e=>{
      e.preventDefault();
      e.stopPropagation();
      dispatch(deleteCart(checkoutCart.id))
      history.push('/')
    }
  
  const handleTip = e =>{
    e.stopPropagation();
    setTip(subtotal * e.target.value)
  }

  
  return (
    <div className='checkout-right'>
        <div className='place-order-holder udc'>
          <button className="place-order udc" onClick={handlePlaceOrder}><span>Place order</span></button>
        </div>
        <div className='udc'>
          <p id='subtext'>{subtext}</p>    
        </div>

        <div className='checkout-array'>
            <p className="checkout-text">Subtotal</p>
            <p className="checkout-text">${subtotal}</p>
        </div>
        <div className='checkout-array page-spacing'>
            
              <p className="checkout-text">Delivery Fee</p>
              <p className="checkout-text">${taxAndFees.deliveryFee}</p>
            
        </div>
        <div className='checkout-array page-spacing'>
            
            <p className="checkout-text">Taxes & Other Fees</p>
             <p className="checkout-text">${taxAndFees.tax + taxAndFees.californiaFees}</p>
            
        </div>
        <div id='add-tip' className='checkout-array'>
          
          <p>Add a tip</p>
          <p>{tip !== 0 ? `$${tip}` : ''}</p>
         </div>


        <div id='tip-choice'  className='checkout-array'>
            <button className="btn-round black-button tip-button udc" onClick={handleTip} value={.10}>10%</button>
            <button className="btn-round black-button tip-button udc" onClick={handleTip} value={.15}>15%</button>
            <button className="btn-round black-button tip-button udc" onClick={handleTip} value={.20}>20%</button>
            <button className="btn-round black-button tip-button udc" onClick={handleTip} value={.25}>25%</button>

        </div>
          <div className='checkout-array checkout-subtext'>100% of your tip goes to your courier. Tips are based on your order total of {`$${subtotal}`} before any discounts or promotions.</div>
          <div id='total' className='checkout-array page-spacing'>
          <h3 className="total-text">Total</h3>
          <h3 className='total-text'>${taxAndFees.totalAmt + tip}</h3>
        </div>
    </div>
  )
}

export default CheckoutRight
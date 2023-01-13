import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "../CheckoutPage.css"
import { deleteCart, fetchCart} from '../../../store/cart'
import { useHistory } from 'react-router-dom'
import { calcSubTotal,calcTaxAndFees } from '../utils/restaurantCrudUtils'

const CheckoutRight = ({checkoutOrder}) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const subtext = "If you’re not around when the delivery person arrives, they’ll leave your order at the door. By placing your order, you agree to take full responsibility for it once it’s delivered. Orders containing alcohol or other restricted items may not be eligible for leave at door and will be returned to the store if you are not available."
  let subtotal = calcSubTotal(checkoutOrder)
  const taxAndFees = calcTaxAndFees(subtotal)
  const handlePlaceOrder = e=>{
      e.preventDefault();
      e.stopPropagation();
      for(const cart of checkoutOrder){
        dispatch(deleteCart(cart.id))
      }
      history.push('/')
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
        <div id='add-tip' className='checkout-array'>Add a tip</div>
        <div id='tip-choice'  className='checkout-array'></div>
        <div className='checkout-array checkout-subtext'>100% of your tip goes to your courier. Tips are based on your order total of $32.53 before any discounts or promotions.</div>
        <div id='total' className='checkout-array page-spacing'>
          <h3 className="total-text">Total</h3>
          <h3 className='total-text'>${taxAndFees.totalAmt}</h3>
        </div>
    </div>
  )
}

export default CheckoutRight
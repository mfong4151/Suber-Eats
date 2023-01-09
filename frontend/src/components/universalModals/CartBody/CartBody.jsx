import React from 'react'
import { qtySubtotal, extractAddress } from '../utils/cartUtils';
import ChevronRight from '../SVGs/ChevronRight';

const CartBody = ({restName, userCartItems}) => {
    let cartItems = userCartItems[restName]
    let {quantity, subtotal} = qtySubtotal(cartItems)
    let address = extractAddress(cartItems)
    if (restName){
      
    }


    return (
        <div className='cart-tab'>
            <div className='rest-profile-pic'>

            </div>
            <div className='cart-modal-text-holder'>
                <span className='cart-modal-header'>{restName}</span>
                <span className='cart-modal-text'>Delivery from {address}</span>
                <span className='cart-modal-text'>Subtotal {subtotal}</span>
                
           
            </div>
            <div>
                <span className='cart-modal-text'>{quantity}</span>
                <ChevronRight/>
            </div>
        </div>
    )
}

export default CartBody;

import React from 'react'
import { qtySubtotal, extractAddress } from '../utils/cartUtils';
import ChevronRight from '../SVGs/ChevronRight';
import { UXContext } from '../../UXContext';
import { useContext } from 'react';

const CartBody = ({restName, userCartItems, setRestCart}) => {
    let cartItems = userCartItems[restName]
    let {quantity, subtotal} = qtySubtotal(cartItems)
    let address = extractAddress(cartItems)
    const {toggleCartModals} = useContext(UXContext)

    const handleOnClick = e =>{
        e.preventDefault()
        toggleCartModals()
        setRestCart(restName)
    }

    return (
        <div className='cart-tab' onClick={handleOnClick}>

            <div className='rest-profile-pic'>
                picture here
            </div>
            <div className='cart-modal-text-holder'>
                <span className='cart-modal-header'>{restName}</span>
                <span className='cart-modal-text'>Delivery from {address}</span>
                <span className='cart-modal-text'>Subtotal: ${subtotal}</span>
                
           
            </div>
            <div className='num-items'>
                <div><span className='cart-modal-text num-items-num'>{quantity}</span></div>
                <ChevronRight/>
            </div>
            <hr></hr>

        </div>
    )
}

export default CartBody;

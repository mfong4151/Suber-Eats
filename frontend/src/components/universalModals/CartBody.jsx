import React from 'react'
import ChevronRight from './SVGs/ChevronRight';
import { useState } from 'react';
import RestCartModal from './RestCartModal';

const CartBody = ({cart}) => {

    const [restCartModal, setRestCartModal] = useState(false);


    const handleOnClick = e =>{
        e.preventDefault();
        e.stopPropagation();
        setRestCartModal(!restCartModal)
        
    }
   

    return (
        <div className='cart-tab' onClick={handleOnClick}>

            <div className='rest-profile-pic'>
                <img className='cart-profile-pic' src={cart.imageUrl} />
                {/* <img className='cart-profile-pic' src={null} /> */}

             </div>

            <div className='cart-modal-text-holder'>
                <span className='cart-modal-header'>{cart.restName}</span>
                <span className='cart-modal-text'>Delivery from {cart.address.split(',').slice(0,2).join(', ')}</span>
                <span className='cart-modal-text'>Subtotal: ${Math.round(cart.cartItemsSum *100)/100}</span>
            </div>

            <div className='num-items'>
                <div><span className='cart-modal-text num-items-num'>{cart.cartItems}</span></div>
                <ChevronRight/>
            </div>
            <hr></hr>
            {restCartModal && <RestCartModal cart={cart} restCartModal={restCartModal} setRestCartModal={setRestCartModal}/>}

        </div>
    )
}

export default CartBody;

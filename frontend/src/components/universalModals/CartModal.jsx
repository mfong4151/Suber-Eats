import React, { useEffect } from 'react'
import { useContext } from 'react';
import { UXContext } from './../UXContext';
import './UserMenuModal.css'
import { useSelector } from 'react-redux';
import { aggregateCart } from './utils/cartUtils';
import CartBody from './CartBody/CartBody';
import { getCart } from '../../store/cart';

const CartModal = ({setRestCart, sortedCarts}) => {
    //grab the context variable that makes sense from here
    const {cartModal, toggleCartModal, setNumCarts} = useContext(UXContext);
    const currentCart = useSelector(getCart);
    const userCartItems = sortedCarts
    if (cartModal) document.body.classList.add('active-modal')
    else document.body.classList.remove('active-modal')

    useEffect(()=>{
        setNumCarts(Object.keys(userCartItems).length)
    }, [currentCart])
    
    return (
        <div className="modal">
            <div className='modal-overlay cart-overlay' onClick={toggleCartModal}>
              <div className="cart-modal-content">
                {Object.keys(userCartItems).map((restName, idx)=>
                    <CartBody 
                        restName={restName} 
                        userCartItems={userCartItems}
                        setRestCart ={setRestCart}
                        key={idx}
                    />
                    )}

              </div>

            </div>
        </div>
    )

}

export default CartModal;
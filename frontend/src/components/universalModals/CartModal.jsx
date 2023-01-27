import React, { useEffect } from 'react'
import { useContext } from 'react';
import { UXContext } from './../UXContext';
import './UserMenuModal.css'
import { useDispatch, useSelector } from 'react-redux';
import CartBody from './CartBody';
import { fetchCart} from '../../store/cart';
import { getSessionUserId } from '../../store/session';
import { getCarts } from '../../store/cart';

const CartModal = () => {
    //grab the context variable that makes sense from here
    const {cartModal, toggleCartModal} = useContext(UXContext);
    const userCarts = useSelector(getCarts); 
    const sessionUserId = useSelector(getSessionUserId);
    const dispatch = useDispatch();

    if (cartModal) document.body.classList.add('active-modal')
    else document.body.classList.remove('active-modal')

    useEffect(()=>{
        dispatch(fetchCart(sessionUserId))
    },[dispatch])
    
    
    return (
        <div className="modal">
            <div className='modal-overlay cart-overlay' onClick={toggleCartModal}>
              <div className="cart-modal-content">
                {Object.values(userCarts)?.map((cart, idx)=>
                    <>
                        { cart.cartItems > 0 && <CartBody cart= {cart}  key={idx} />}
                    </>
                )}

              </div>
            </div>
        </div>
    )

}

export default CartModal;
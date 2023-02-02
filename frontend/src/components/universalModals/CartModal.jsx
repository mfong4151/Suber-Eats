import React, { useEffect } from 'react'
import { useContext } from 'react';
import { UXContext } from './../UXContext';
import './UserMenuModal.css'
import { useDispatch, useSelector } from 'react-redux';
import CartBody from './CartBody';
import { deleteCart, fetchCart} from '../../store/cart';
import { getSessionUserId } from '../../store/session';
import { getCarts } from '../../store/cart';
import { useLocation, useParams } from 'react-router-dom';
import { fetchCartItems } from '../../store/cartItems';

const CartModal = () => {
    const {cartModal, toggleCartModal} = useContext(UXContext);
    const userCarts = useSelector(getCarts); 
    const sessionUserId = useSelector(getSessionUserId);
    //I would like to encorporate this into the first useEffect if possible 
    // const location = useLocation()
    const {restaurantId} = useParams()
    const dispatch = useDispatch();

    if (cartModal) document.body.classList.add('active-modal')
    else document.body.classList.remove('active-modal')


    //I'm kind of nervous about this: i introduced it in order to kill off any lingering carts, 
    //but I feel that a side effect of this is that we're going to have compounded issues
    useEffect(()=>{
        dispatch(fetchCart(sessionUserId))
        dispatch(fetchCartItems())
    },[dispatch])
    

    useEffect(()=>{      
        for(const cart of Object.values(userCarts))if(cart.cartItems === 0 && restaurantId !== cart.restaurantId ) dispatch(deleteCart(cart.id))
    },[])

    
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
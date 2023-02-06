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
    },[dispatch])
    

    useEffect(()=>{      
        for(const cart of Object.values(userCarts))if(cart.cartItems === 0 && restaurantId !== cart.restaurantId ) 
            dispatch(deleteCart(cart.id))
    },[])

    
    // if (userCarts.length > 0)
        return (
        <div className="modal">
            <div className='modal-overlay cart-overlay' onClick={toggleCartModal}>
              {userCarts.length > 0 && 
                <div className="cart-modal-content">
                    {userCarts?.map((cart, idx)=>
                    <>
                        {cart.cartItems > 0 && <CartBody cart={cart} key={idx} />}
                    </>
                    )}

              </div>}
              {userCarts.length === 0 &&
                <div className="cart-modal-content udc" id='no-carts-content'>
                    <h1 id='no-cart-title'>
                        You currently have no carts!
                    </h1>
                    <h2 id='no-cart-text'>
                        Go check out a restaurant and add to your cart
                    </h2>
                </div>
                }
              
            </div>
        </div>
    )

    // else
    //     return(
    //         <div>
    //             <h1>

    //             </h1>
    //         </div>
    //     )

}

export default CartModal;
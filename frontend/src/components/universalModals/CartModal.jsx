import React, { useEffect } from 'react'
import './UserMenuModal.css'
import { useDispatch, useSelector } from 'react-redux';
import CartModalItem from './CartModalItem';
import { deleteCart, fetchCart} from '../../store/cart';
import { getSessionUserId } from '../../store/session';
import { getCarts } from '../../store/cart';
import { useParams } from 'react-router-dom';

const CartModal = ({modalStates, activeCartState}) => {

    const {cartModal, setCartModal} = modalStates;
    const userCarts = useSelector(getCarts); 
    const sessionUserId = useSelector(getSessionUserId);
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
        for(const cart of userCarts)if(cart.cartItems === 0 && Number(restaurantId) !== cart.restaurantId ) dispatch(deleteCart(cart.id))
    },[])

    
        return (
        <div className="modal">
            <div className='modal-overlay cart-overlay' onClick={()=> setCartModal(!cartModal)}>
              {userCarts.length > 0 && 
                <div className="cart-modal-content">
                    {userCarts?.map((cart, idx)=>
                    <>
                        {cart.cartItems > 0 && <CartModalItem cart={cart} key={idx} modalStates ={modalStates} activeCartState={activeCartState}/>}
                    </>
                    )}

              </div>}
              {userCarts.length === 0 &&
                <div className="cart-modal-content udc" id='no-carts-content'>
                    <h1 id='no-cart-title'>
                        You currently have no cart!
                    </h1>
                    <h2 id='no-cart-text'>
                        Go check out a restaurant and add to your cart
                    </h2>
                </div>
                }
              
            </div>
        </div>
    )

}

export default CartModal;
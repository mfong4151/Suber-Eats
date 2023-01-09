import React from 'react'
import { useContext } from 'react';
import { UXContext } from './../UXContext';
import './UserMenuModal.css'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { aggregateCart } from './utils/cartUtils';
import CartBody from './CartBody/CartBody';

const CartModal = ({restCart, setRestCart}) => {
    //grab the context variable that makes sense from here
    const {cartModal, toggleCartModal} = useContext(UXContext);
    const sessionUser = useSelector(state => state.session.user);

    let userCartItems = sessionUser.cart.currentCart;
    userCartItems = aggregateCart(userCartItems);

    if (cartModal) document.body.classList.add('active-modal')
    else document.body.classList.remove('active-modal')

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
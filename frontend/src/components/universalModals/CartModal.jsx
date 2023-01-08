import React from 'react'
import { useContext } from 'react';
import { UXContext } from './../UXContext';
import './UserMenuModal.css'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const CartModal = () => {
    //grab the context variable that makes sense from here
    const {cartModal, toggleCartModal} = useContext(UXContext)
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user);
    console.log(sessionUser)

    if (cartModal) document.body.classList.add('active-modal')
    else document.body.classList.remove('active-modal')

    return (
        <div className="modal">
            <div className='modal-overlay cart-overlay' onClick={toggleCartModal}>
              <div className="cart-modal-content">



              </div>

            </div>
        </div>
    )

}

export default CartModal
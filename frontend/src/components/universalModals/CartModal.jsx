import React, { useEffect } from 'react'
import { useContext } from 'react';
import { UXContext } from './../UXContext';
import './UserMenuModal.css'
import { useDispatch, useSelector } from 'react-redux';
import CartBody from './CartBody';
import { fetchCart, getCartSize, getCartNames} from '../../store/cart';
import { getSessionUserId } from '../../store/session';
import { useState } from 'react';
import RestCartModal from './RestCartModal';
import { getCartItems } from '../../store/cart';

const CartModal = () => {
    //grab the context variable that makes sense from here
    const {cartModal, toggleCartModal} = useContext(UXContext);
    const [restCartModal, setRestCartModal] = useState(false);
    const [restCart, setRestCart] = useState('');

    const userCarts = useSelector(getCartItems); 
    const cartsSize = useSelector(getCartSize)
    const cartsNames = useSelector(getCartNames);
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
                {cartsNames?.map((restName, idx)=>
                <>
                    {

                    cartsSize[restName] !== 0 && <CartBody 
                            restName={restName} 
                            setRestCart ={setRestCart}
                            restCartModal = {restCartModal}
                            setRestCartModal = {setRestCartModal}
                            key={idx}
                        />

                    }
                </>
                    )}

              </div>

            </div>
            {restCartModal && <RestCartModal restCart={restCart} restCartModal={restCartModal} setRestCartModal={setRestCartModal}/>}


        </div>
    )

}

export default CartModal;
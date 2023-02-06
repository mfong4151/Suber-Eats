import React from 'react'
import ChevronRight from './SVGs/ChevronRight';
import  {useDispatch, useSelector} from 'react-redux';
import { getSessionUserId } from '../../store/session';
import { useState } from 'react';
import RestCartModal from './RestCartModal';

const CartBody = ({cart}) => {
    const dispatch = useDispatch();
    const [restCartModal, setRestCartModal] = useState(false);

    const sessionUserId = useSelector(getSessionUserId)
    // const userCarts = useSelector(getCarts)


    const handleOnClick = e =>{
        e.preventDefault();
        e.stopPropagation();
        setRestCartModal(!restCartModal)
    }

    // useEffect(() => {

    //     dispatch(fetchCart(sessionUserId))
        
    // }, [dispatch])
    

    return (
        <div className='cart-tab' onClick={handleOnClick}>

            <div className='rest-profile-pic'>
                <img className='cart-profile-pic' src={cart.imageUrl} />
             </div>

            <div className='cart-modal-text-holder'>
                <span className='cart-modal-header'>{cart.restName}</span>
                <span className='cart-modal-text'>Delivery from {cart.address}</span>
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

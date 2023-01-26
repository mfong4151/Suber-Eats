import React from 'react'
import { qtySubtotal, extractAddress } from '../utils/cartUtils';
import ChevronRight from '../SVGs/ChevronRight';
import {useEffect} from 'react';
import  {useDispatch, useSelector} from 'react-redux';
import { fetchCart } from '../../../store/cart';

const CartBody = ({restName, cartItems, setRestCart, restCartModal, setRestCartModal}) => {

    const dispatch = useDispatch();
    const sessionUserId = useSelector(state=> state.session.user.id)
    let {quantity, subtotal} = qtySubtotal(cartItems)
    let address = extractAddress(cartItems)

    const handleOnClick = e =>{
        e.preventDefault();
        e.stopPropagation();
        setRestCartModal(!restCartModal)
        setRestCart(restName)
    }

    useEffect(() => {

        dispatch(fetchCart(sessionUserId))
        
    }, [dispatch])
    

    return (
        <div className='cart-tab' onClick={handleOnClick}>

            <div className='rest-profile-pic'>
                <img className='cart-profile-pic' src={cartItems[0].imageUrl} />
             </div>

            <div className='cart-modal-text-holder'>
                <span className='cart-modal-header'>{restName}</span>
                <span className='cart-modal-text'>Delivery from {address}</span>
                <span className='cart-modal-text'>Subtotal: ${Math.round(subtotal *100)/100}</span>
            </div>

            <div className='num-items'>
                <div><span className='cart-modal-text num-items-num'>{quantity}</span></div>
                <ChevronRight/>
            </div>
            <hr></hr>

        </div>
    )
}

export default CartBody;

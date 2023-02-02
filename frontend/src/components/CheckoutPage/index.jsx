import React, { useContext } from 'react'
import { UXContext } from '../UXContext'
import CheckoutLeft from './CheckoutLeft'
import CheckoutRight from './CheckoutRight'
import UserMenuModal from '../universalModals/UserMenuModal'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getSessionUserId } from '../../store/session'
import { fetchCart, getCart } from '../../store/cart'
import { useParams } from 'react-router-dom'
import { fetchCartItems, getCartItems } from '../../store/cartItems'

const CheckoutPage = () => {
        const {menuModal} = useContext(UXContext)
        const {cartId} = useParams()
        const sessionUserId = useSelector(getSessionUserId)
        const checkoutCart = useSelector(getCart(cartId))
        const checkoutItems = useSelector(getCartItems)
        console.log(checkoutCart)
        const dispatch = useDispatch();
        
        useEffect(()=>{
          dispatch(fetchCart(sessionUserId))
          dispatch(fetchCartItems(cartId))          
        },[])
        // if(!checkoutCart) return (<Redirect to={'/'}/>)

        return (
          <div className='checkout-page' >
            <div id='left'>
                <CheckoutLeft checkoutCart={checkoutCart}/>
            </div>
            <div id='right'>
              <CheckoutRight checkoutCart={checkoutCart}/>

            </div>
            {menuModal && <UserMenuModal/>}
          </div>
      )
}

export default CheckoutPage;
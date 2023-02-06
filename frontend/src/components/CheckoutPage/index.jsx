import React, { useContext } from 'react'
import { UXContext } from '../UXContext'
import CheckoutLeft from './CheckoutLeft'
import CheckoutRight from './CheckoutRight'
import UserMenuModal from '../universalModals/UserMenuModal'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchCart, getCart } from '../../store/cart'
import { useParams } from 'react-router-dom'
import { fetchCartItems } from '../../store/cartItems'
import { Redirect } from 'react-router-dom'
import Footer from '../generalDesignComponents/Footer'

const CheckoutPage = () => {
        const {menuModal} = useContext(UXContext)
        const {cartId} = useParams()
        const sessionUser = useSelector(state => state.session.user)
        const checkoutCart = useSelector(getCart(cartId))
        const dispatch = useDispatch();
        
        useEffect(()=>{
          dispatch(fetchCart(sessionUser.id))
          dispatch(fetchCartItems(cartId))          
        },[])

        if(!checkoutCart || !sessionUser ) return <Redirect to={'/'}/>

        return (
          <div className='checkout-page' >
            <div id='left'>
                <CheckoutLeft checkoutCart={checkoutCart}/>
            </div>
            <div id='right'>
              <CheckoutRight checkoutCart={checkoutCart}/>

            </div>
            {menuModal && <UserMenuModal/>}
            <Footer/>
          </div>
      )
}

export default CheckoutPage;
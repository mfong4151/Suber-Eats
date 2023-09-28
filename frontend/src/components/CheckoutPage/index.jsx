import React, { useState } from 'react'
import CheckoutHeader from './CheckoutHeader'
import CheckoutLeft from './CheckoutLeft'
import CheckoutRight from './CheckoutRight'
import UserMenuModal from '../Modals/UserMenuModal'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchCart, getCart } from '../../store/cart'
import { fetchCartItems } from '../../store/cartItems'
import { Redirect, useParams } from 'react-router-dom'
import Footer from '../Footer'

const CheckoutPage = () => {

  const [menuModal, setMenuModal] = useState(false);
  const modalStates = { menuModal, setMenuModal }
  const { cartId } = useParams()
  const sessionUser = useSelector(state => state.session.user)
  const checkoutCart = useSelector(getCart(cartId))
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCart(sessionUser.id))
    dispatch(fetchCartItems(cartId))
  }, [])

  if (!checkoutCart || !sessionUser) return <Redirect to={'/'} />

  return (
    <div className='checkout-page' >
      <CheckoutHeader modalStates={modalStates} />



      <div id='checkout-divide'>
        <div id='left'>
          <CheckoutLeft checkoutCart={checkoutCart} />
        </div>
        <div id='right'>
          <CheckoutRight checkoutCart={checkoutCart} />
        </div>
      </div>



      {menuModal && <UserMenuModal modalStates={modalStates} />}
      <Footer />
    </div>
  )
}

export default CheckoutPage;
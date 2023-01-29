import React, { useEffect } from 'react'
import { useContext } from 'react';
import { UXContext } from '../UXContext';
import {useHistory} from 'react-router-dom';
import { deleteCart } from '../../store/cart';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import './UserMenuModal.css'
import { fetchCartItems, getCartItems } from '../../store/cartItems';
import RestCartItem from './RestCartItem';

const RestCartModal = ({cart, restCartModal, setRestCartModal}) => {
  const dispatch = useDispatch()
  const {setCheckoutOrder} = useContext(UXContext)
  const history = useHistory()
  const restCartItems = useSelector(getCartItems)
  if (restCartModal) document.body.classList.add('active-modal')
  else document.body.classList.remove('active-modal')

  const clearCart = e =>{
    e.preventDefault();
    e.stopPropagation();
    dispatch(deleteCart(cart.id))
    .then(()=>setRestCartModal(!restCartModal))
  }

  const handleAddClick = e =>{
    e.preventDefault()
    history.push(`/restaurantListing/${cart.restaurantId}`)
  }
  
  const handleCheckout = e =>{
    e.preventDefault();
    e.stopPropagation();
    setCheckoutOrder(cart) //maybe refactor this to send the item in the body of history
    history.push(`/checkout`)
    setRestCartModal(!restCartModal)  
  }

  useEffect(()=>{
    dispatch(fetchCartItems(cart.id))
}, [dispatch])
  
  return (
    <div className="modal">
        <div className='modal-overlay cart-overlay' onClick={()=>(setRestCartModal(!restCartModal))}>
          <div className="modal-content sub-menu grey-border-for-white">
              <div className='sub-header-pos'>
                <h1 className="sub-menu-header">{cart.restName}</h1>
                <span className="sub-menu-text">Pickup at {cart.address}</span>
                <div className="sub-menu-buttons">
                    <button className="btn-round-simple sub-menu-button grey-button" onClick={handleAddClick}>
                      <span>+</span>
                      <span>Add items</span>
                    </button>
                
                </div>
                <ul className='sub-menu-choices'>
                    {restCartItems.map((restCartItem, idx)=>(
                      <> 
                        {!!restCartItem.quantity && <RestCartItem cartId ={cart.id} restCartItem={restCartItem} key={idx}/>}
                      </>
                    ))}
                </ul>
                <div className="sub-menu-note"></div>
                <div className='udc clear-cart-holder'>
                    {!!restCartItems && <button className="udc clear-cart" onClick={clearCart}>Clear Cart</button>}
                </div>
              </div>

              

              <div className='udc sub-header-accent'>
                <button className="udc btn-sq btn-rounded-corners go-checkout" onClick={handleCheckout}>Go to checkout </button>
              </div>
          </div>

        </div>
    </div>
  )
}

export default RestCartModal

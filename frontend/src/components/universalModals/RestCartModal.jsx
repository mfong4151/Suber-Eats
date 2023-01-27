import React, { useEffect } from 'react'
import { getCartItems } from '../../store/cart';
import { useContext } from 'react';
import { UXContext } from '../UXContext';
import RestCartItem from './RestCartItem';
import {useHistory} from 'react-router-dom';
import { deleteCart } from '../../store/cart';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import './UserMenuModal.css'
import { fetchCart } from '../../store/cart';
import { getSessionUserId } from '../../store/session';
//cart modal for a specific restaurant

const RestCartModal = ({restCart, restCartModal, setRestCartModal}) => {
  const dispatch = useDispatch()
  const {setCheckoutOrder} = useContext(UXContext)
  const sessionUserId = useSelector(getSessionUserId)
  const history = useHistory()
  const userCart = useSelector(getCartItems)[restCart]

  if (restCartModal) document.body.classList.add('active-modal')
  else document.body.classList.remove('active-modal')

  const clearCart = e =>{
    e.preventDefault();
    e.stopPropagation();
    for(const cart of userCart){
      dispatch(deleteCart(cart.id))
    }
    dispatch(fetchCart(sessionUserId)).then(()=>setRestCartModal(!restCartModal))
  }

  const handleAddClick = e =>{
    e.preventDefault()
    history.push(`/restaurantListing/${userCart[0].restaurantId}`)
  }
  
  const handleCheckout = e =>{
    e.preventDefault()
    e.stopPropagation()
    setCheckoutOrder(userCart)
    history.push(`/checkout`)
    setRestCartModal(!restCartModal)  
  }

  useEffect(()=>{
    dispatch(fetchCart(sessionUserId))
    
}, [dispatch])
  
  return (
    <div className="modal">
        <div className='modal-overlay cart-overlay' onClick={()=>(setRestCartModal(!restCartModal))}>
          <div className="modal-content sub-menu grey-border-for-white">
              <div className='sub-header-pos'>
                <h1 className="sub-menu-header">{userCart[0].restName}</h1>
                <span className="sub-menu-text">Pickup at {userCart[0].address}</span>
                <div className="sub-menu-buttons">
                    <button className="btn-round-simple sub-menu-button grey-button" onClick={handleAddClick}>
                      <span>+</span>
                      <span>Add items</span>
                    </button>
                
                </div>
                <ul className='sub-menu-choices'>
                    {userCart.map((restCartItem,idx)=>(
                      <> 
                        {!!restCartItem.quantity && <RestCartItem restCartItem={restCartItem}  key={idx}/>}
                      </>
                    ))}
                </ul>
                <div className="sub-menu-note"></div>
                <div className='udc clear-cart-holder'>
                    {!!userCart && <button className="udc clear-cart" onClick={clearCart}>Clear Cart</button>}
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

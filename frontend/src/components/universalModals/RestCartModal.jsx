import React, { useEffect } from 'react'
import { useContext } from 'react';
import { UXContext } from '../UXContext';
import GroupOrderIcon from './SVGs/GroupOrderIcon';
import RestCartItem from './RestCartItem';
import {useHistory} from 'react-router-dom';
import { deleteCart } from '../../store/cart';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import './UserMenuModal.css'
import { fetchCart } from '../../store/cart';
//cart modal for a specific restaurant

const RestCartModal = ({restCart}) => {
  const dispatch = useDispatch()
  const sessionUser = useSelector(state => state.session.user)
  const {restCartModal, toggleRestCartModal} = useContext(UXContext);
  const history = useHistory()
  const firstCart = restCart[0];

  if (restCartModal) document.body.classList.add('active-modal')
  else document.body.classList.remove('active-modal')



  const clearCart = e =>{
    e.preventDefault();
    e.stopPropagation();
    for(const cart of restCart){
      dispatch(deleteCart(cart.id))

    }
  }

  const handleAddClick = e =>{
    e.preventDefault()
    history.push(`/restaurantListing/${firstCart.restaurantId}`)
  }


  useEffect(()=>{
    dispatch(fetchCart(sessionUser.id))
}, [])
  
  return (
    <div className="modal">
        <div className='modal-overlay cart-overlay' onClick={toggleRestCartModal}>
          <div className="modal-content sub-menu grey-border-for-white">
              <div className='sub-header-pos'>
                <h1 className="sub-menu-header">{firstCart.restName}</h1>
                <span className="sub-menu-text">Pickup at {firstCart.address}</span>
                <div className="sub-menu-buttons">
                    <button className="btn-round-simple sub-menu-button grey-button" onClick={handleAddClick}>
                      <span>+</span>
                      <span>Add items</span>
                    </button>
                  <button className="btn-round-simple sub-menu-button grey-button">
                    <span><GroupOrderIcon/></span>
                    <span>Group Order</span>
                  </button>
                </div>
                <ul className='sub-menu-choices'>
                    {restCart.map((cartItem,idx)=>(
                      <RestCartItem cartItem={cartItem} key={idx}/>

                    ))}
                </ul>
                <div className="sub-menu-note"></div>
                <div className='udc clear-cart-holder'>
                    <button className="udc clear-cart" onClick={clearCart}>Clear Cart</button>
                </div>
              </div>

              

              <div className='udc sub-header-accent'>
                <button className="udc btn-sq btn-rounded-corners go-checkout">Go to checkout </button>
              </div>
          </div>

        </div>
    </div>
  )
}

export default RestCartModal

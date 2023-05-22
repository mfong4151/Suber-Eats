import React, { useEffect } from 'react'
import {motion} from "framer-motion";
import {useHistory, NavLink, useParams} from 'react-router-dom';
import { deleteCart } from '../../store/cart';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import './UserMenuModal.css';
import { deleteCartItem, fetchCartItems, getCartItems } from '../../store/cartItems';
import RestCartItem from './RestCartItem';
import ExitButton from './SVGs/ExitButton';
import './RestCartModal.css';

const RestCartModal = ({cart, modalStates}) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const {restCartModal, setRestCartModal} = modalStates;
  const {restaurantId} = useParams()
  const restCartItems = useSelector(getCartItems)
  
  if (restCartModal) document.body.classList.add('active-modal')
  else document.body.classList.remove('active-modal')

  const clearCart = e =>{
    e.preventDefault();
    e.stopPropagation();
    

    //The main difference between these two lines is the else condition is more optimized
    //And it corresponds to the case where we are actually on the page
    if(Number(restaurantId) === cart.restaurantId)
      for(const cartItem of restCartItems) dispatch(deleteCartItem(cartItem.id)).then(()=>setRestCartModal(!restCartModal))
    
    else dispatch(deleteCart(cart.id)).then(()=>setRestCartModal(!restCartModal))
    
    
  }

  const handleAddClick = e =>{
    e.preventDefault()
    history.push(`/restaurantListing/${cart.restaurantId}`)
  }
  
  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const modalVariants = {
    hidden: { x: "100%" },
    visible: { x: "0%" },
  };

  useEffect(()=>{
    dispatch(fetchCartItems(cart.id))
}, [dispatch])
  
return (
    <motion.div
      className="modal-overlay cart-overlay"
      variants={overlayVariants}
      initial="hidden"
      animate={restCartModal ? "visible" : "hidden"}
      exit="hidden"
      onClick={() => setRestCartModal(false)}
    >
      <motion.div
        className="modal-content sub-menu grey-border-for-white"
        id="rest-modal"
        variants={modalVariants}
        initial="hidden"
        animate={restCartModal ? "visible" : "hidden"}
        exit="hidden"
      >
      
          <div className='sub-header-pos'>
          <div className='udc-right' >
            <button id='exit-button'>
              <ExitButton/>

            </button>

          </div>
          <h1 className="sub-menu-header">{cart.restName}</h1>
          <span className="sub-menu-text">Pickup at {cart.address.split(',').slice(0,2).join(', ')}</span>
          <div className="sub-menu-buttons">
              <button className="btn-round-simple sub-menu-button grey-button" onClick={handleAddClick}>
                <span>+ Add items</span>
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
          <NavLink className="udc btn-sq btn-rounded-corners go-checkout" to={`/checkout/${cart.id}`}>
            Go to checkout 
          </NavLink>
          </div>

      </motion.div>
    </motion.div>
);
}


export default RestCartModal


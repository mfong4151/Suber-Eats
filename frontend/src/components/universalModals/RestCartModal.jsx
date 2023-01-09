import React from 'react'
import { useContext } from 'react';
import { UXContext } from '../UXContext';
import './UserMenuModal.css'
//cart modal for a specific restaurant

const RestCartModal = ({restCart}) => {
  //grab the context variable that makes sense from here
  const {restCartModal, toggleRestCartModal} = useContext(UXContext);
  
  //controlling overflow
  if (restCartModal) document.body.classList.add('active-modal')
  else document.body.classList.remove('active-modal')

  //css classes for our modals:
  //modal
  //modal-overlay
  //modal-item-univ modal-button

  const destroyCart = e =>{
    e.preventDefault();


  }

  return (
    <div className="modal">
        <div className='modal-overlay cart-overlay' onClick={toggleRestCartModal}>
          <div className="modal-content sub-menu grey-border-for-white">
              <div className="sub-menu-header"></div>
              <div className="sub-menu-text"></div>
              <div className="sub-menu-buttons"></div>
              <div className="sub-menu-options"></div>
              <div className="sub-menu-note"></div>
              <button className="clear-cart" onClick={destroyCart}>Clear Cart</button>
          </div>

        </div>
    </div>
  )
}

export default RestCartModal

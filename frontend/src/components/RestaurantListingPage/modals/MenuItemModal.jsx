import React from 'react'
import { useContext } from 'react';
import { UXContext } from '../../UXContext';
import { useDispatch } from 'react-redux';
import './RestaurantModals.css'
import MenuItemForm from './MenuItemModalForm';

const MenuItemModal = ({ menuItem, menuItemModal, toggleItemModal}) => {

  //grab the context variable that makes sense from here
  const {} = useContext(UXContext)
  //use dispatch if necessary
  const dispatch = useDispatch()

  //controlling overflow
  if (menuItemModal) document.body.classList.add('active-modal')
  else document.body.classList.remove('active-modal')


  //css classes for our modals:
  //modal
  //modal-overlay
  //modal-item-univ modal-button

  return (
    <div className="modal">
        <div className='modal-overlay menu-item-overlay' onClick={toggleItemModal}>
          <div className="menu-item-modal-content">
              <div className="top-bar">

              </div>
              <div className="menu-item-display">
                  <div className="menu-item-container">
                      {menuItem.itemName}
                      {menuItem.price}
                      {menuItem.description}

                  </div>
                  <MenuItemForm/>

              </div>
          </div>
        </div>
    </div>
  )
}

export default MenuItemModal;

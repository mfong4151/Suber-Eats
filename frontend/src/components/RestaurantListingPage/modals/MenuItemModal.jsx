import React from 'react'

import './RestaurantModals.css'
import MenuItemForm from './MenuItemModalForm';

const MenuItemModal = ({ menuItem, menuItemModal, toggleItemModal}) => {



  if (menuItemModal) document.body.classList.add('active-modal')
  else document.body.classList.remove('active-modal')

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

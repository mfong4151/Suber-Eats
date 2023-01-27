import React from 'react'
import './RestaurantListingPage.css'
import ListingsBlock from './ListingsBlock'
import { useState } from 'react'
import MenuItemModal from './modals/MenuItemModal'
import { useSelector } from 'react-redux'
import { getCartItems } from '../../store/cart'
import { getMenuItems } from '../../store/menu'
import { sortMenus } from './utils/menuUtils'
//bring in intersection observer here, have it change based class whats clicked

const MenuListings = ({sessionUserId}) => {
    const usersCart = useSelector(getCartItems)
    const [menuItemModal, setMenuItemModal] = useState(false);  
    const [menuItem, setMenuItem] = useState('')
    const preSortedItems = useSelector(getMenuItems);
    const menuItems = sortMenus(preSortedItems)
    const toggleItemModal = () =>{
      setMenuItemModal(!menuItemModal)
      }

  
    return (
    <div className='listings-main'>
        
        
        <div className='table-of-contents'>
            {Object.keys(menuItems).map((header, idx)=>(
                    <div className='toc-index'>
                        <span className='' key={idx}>{header}</span>
                    </div>
            ))}
        </div>

        <div className='univ-padding'>
            {Object.keys(menuItems).map((header, idx)=>(
                <ListingsBlock 
                    header={header} 
                    listings={menuItems[header]} 
                    key={idx}
                    setMenuItem = {setMenuItem}
                    menuItemModal={menuItemModal} 
                    toggleItemModal={toggleItemModal}
                    usersCart={usersCart}
                    sessionUserId={sessionUserId}
                    /> 
            ))}
            {menuItemModal && <MenuItemModal menuItem={menuItem} setMenuItem={setMenuItem} menuItemModal={menuItemModal} toggleItemModal={toggleItemModal}/>}

        </div>
  </div>  
  )
}

export default MenuListings
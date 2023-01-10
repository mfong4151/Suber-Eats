import React from 'react'
import './RestaurantListingPage.css'
import ListingsBlock from './ListingsBlock'
import { useState } from 'react'
import MenuItemModal from './modals/MenuItemModal'
import { useSelector } from 'react-redux'
import { createCart, getCart } from '../../store/cart'
//bring in intersection observer here, have it change based class whats clicked

const MenuListings = ({menuItems}) => {
    const usersCart = useSelector(getCart)
    const [menuItemModal, setMenuItemModal] = useState(false);  
    const [menuItem, setMenuItem] = useState('')
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
                    /> 
            ))}
            {menuItemModal && <MenuItemModal menuItem={menuItem} setMenuItem={setMenuItem} menuItemModal={menuItemModal} toggleItemModal={toggleItemModal}/>}

        </div>
  </div>  
  )
}

export default MenuListings
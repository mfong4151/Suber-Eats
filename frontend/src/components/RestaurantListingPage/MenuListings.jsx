import React from 'react'
import './RestaurantListingPage.css'
import ListingsBlock from './ListingsBlock'
import { useState } from 'react'
import MenuItemModal from './modals/MenuItemModal'
import { useDispatch, useSelector } from 'react-redux'
import { getMenuItems, getMenuItemsSorted } from '../../store/menu'
import { fetchCartItems } from '../../store/cartItems'
import { sortMenus } from './utils/menuUtils'
import { useEffect } from 'react'
import { getCartsRestIdKeys } from '../../store/cart'
import { useParams } from 'react-router-dom'

//bring in intersection observer here, have it change based class whats clicked

const MenuListings = () => {
    const [menuItemModal, setMenuItemModal] = useState(false);  
    const [menuItem, setMenuItem] = useState('')
    const menuItems = useSelector(getMenuItemsSorted);
    const usersCarts = useSelector(getCartsRestIdKeys)
    const {restaurantId} = useParams()
    const dispatch = useDispatch()

    const toggleItemModal = () =>{
      setMenuItemModal(!menuItemModal)
    }

    
    useEffect(() => {

        if (usersCarts[restaurantId]) dispatch(fetchCartItems(usersCarts[restaurantId]))
        
    },[dispatch])
    
  
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
                    menuItems={menuItems[header]} 
                    key={idx}
                    setMenuItem = {setMenuItem}
                    menuItemModal={menuItemModal} 
                    toggleItemModal={toggleItemModal}
                    /> 
            ))}
            {/* feature is currently not ready */}
            {/* {menuItemModal && <MenuItemModal menuItem={menuItem} setMenuItem={setMenuItem} menuItemModal={menuItemModal} toggleItemModal={toggleItemModal}/>} */}

        </div>
  </div>  
  )
}

export default MenuListings
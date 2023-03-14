import React from 'react'
import './RestaurantListingPage.css'
import ListingsBlock from './ListingsBlock'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMenuItemsSorted } from '../../store/menu'


//bring in intersection observer here, have it change based class whats clicked

const MenuListings = () => {
    const [menuItemModal, setMenuItemModal] = useState(false);  
    const [seeYourCart, setSeeYourCart] = useState(-1)
    const menuItems = useSelector(getMenuItemsSorted);

    const toggleItemModal = () =>{
      setMenuItemModal(!menuItemModal)
    }

    //working on code for intersection observer shenanigans
    // document.getElementById(`block-${idx}`).scrollIntoView()
  
    return (
    <div className='listings-main'>
        
        <div className='table-of-contents'>
            {Object.keys(menuItems).map((header, idx)=>(
                    <div className='toc-index'> 
                        <span key={idx}>{header}</span>
                    </div>
            ))}
        </div>

        <div className='univ-padding'>
            {Object.keys(menuItems).map((header, idx)=>(
                <ListingsBlock 
                    header={header} 
                    menuItems={menuItems[header]} 
                    id={idx}
                    menuItemModal={menuItemModal} 
                    toggleItemModal={toggleItemModal}
                    seeYourCart={seeYourCart}
                    setSeeYourCart={setSeeYourCart}
                    /> 
            ))}
            {/* feature is currently not ready */}
            {/* {menuItemModal && <MenuItemModal menuItem={menuItem} setMenuItem={setMenuItem} menuItemModal={menuItemModal} toggleItemModal={toggleItemModal}/>} */}

        </div>
  </div>  
  )
}

export default MenuListings
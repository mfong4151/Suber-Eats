import React from 'react'
import './RestaurantListingPage.css'
import ListingsBlock from './ListingsBlock'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { getMenuItemsSorted } from '../../store/menu'
import cartsReducer from '../../store/cart'


//bring in intersection observer here, have it change based class whats clicked

const MenuListings = () => {
    const [menuItemModal, setMenuItemModal] = useState(false);  
    const [seeYourCart, setSeeYourCart] = useState(-1)
    const menuItems = useSelector(getMenuItemsSorted);
    const sections = document.querySelectorAll('.listings-block')

    const toggleItemModal = () =>{
      setMenuItemModal(!menuItemModal)
    }

    const handleIndexClick = (e, idx) =>{
        e.preventDefault();
        const blockId = `block-${idx}`
        document.getElementById(blockId).scrollIntoView({behavior:'smooth'})
    }

    const observer = new IntersectionObserver(entries => {
        console.log(entries)
        console.log(entries[0].target)
        },
        {

        }
    )
    sections.forEach(section=>{
        observer.observe(section)
    })

    return (
    <div className='listings-main'>
        
        <div className='table-of-contents'>
            {Object.keys(menuItems).map((header, idx)=>(
                    <div className='toc-index' onClick={e=> handleIndexClick(e, idx)}> 
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
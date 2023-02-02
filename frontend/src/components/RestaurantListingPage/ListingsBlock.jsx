import React from 'react'
import MenuListingItem from './MenuListingItem'
import './RestaurantListingPage.css'

const ListingsBlock = ({setMenuItem, header, menuItems, toggleItemModal}) => {
   
    return (
        <div className='listings-block'>
            <div className='header-holder'>
                <h2 className='listing-header'>{header}</h2>
            </div>
            
            <ul className='menu-options'>
                {menuItems.map((menuItem, idx)=>
                    <MenuListingItem menuItem={menuItem} 
                    toggleItemModal={toggleItemModal} 
                    setMenuItem = {setMenuItem}
                    key={idx}
                    />
                )}
            </ul>
        </div>
    )
}

export default ListingsBlock;
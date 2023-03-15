import React from 'react'
import MenuListingItem from './MenuListingItem'
import './RestaurantListingPage.css'

const ListingsBlock = ({header, menuItems, toggleItemModal, seeYourCart, setSeeYourCart, id}) => {
    return (
        <div className='listings-block' id={'block-' + id}>
            <div className='header-holder'>
                <h2 className='listing-header'>{header}</h2>
            </div>
            
            <ul className='menu-options'>
                {menuItems.map((menuItem, idx)=>
                    <MenuListingItem menuItem={menuItem} 
                    toggleItemModal={toggleItemModal} 
                    key={idx}
                    seeYourCart={seeYourCart}
                    setSeeYourCart={setSeeYourCart}
                    />
                )}
            </ul>
        </div>
    )
}

export default ListingsBlock;
import React from 'react'
import MenuListingItem from './MenuListingItem'
import './RestaurantListingPage.css'

const ListingsBlock = ({setMenuItem, header, listings, toggleItemModal, usersCart}) => {
   
    return (
        <div className='listings-block'>
            <div className='header-holder'>
                <h2 className='listing-header'>{header}</h2>
            </div>
            
            <ul className='menu-options'>
                {listings.map((listing, idx)=>
                    <MenuListingItem listing={listing} 
                    toggleItemModal={toggleItemModal} 
                    setMenuItem = {setMenuItem}
                    key={idx}
                    usersCart={usersCart}
                    />
                )}
            </ul>
        </div>
    )
}

export default ListingsBlock;
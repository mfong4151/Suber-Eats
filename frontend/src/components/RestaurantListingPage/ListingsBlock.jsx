import React from 'react'
import MenuListing from './MenuListing'
import './RestaurantListingPage.css'


const ListingsBlock = ({header, listings}) => {


    return (
        <div>
            <div className='header-holder'>
                <h2 className='listing-header'>{header}</h2>
            </div>
            
            <ul className='menu-options'>
                {listings.map((listing, idx)=>
                    <MenuListing listing={listing} key={idx}/>
                )}
            </ul>

        </div>
    )
}

export default ListingsBlock
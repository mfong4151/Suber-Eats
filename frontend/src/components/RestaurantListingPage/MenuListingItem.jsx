import React from 'react'
import { useState } from 'react'
import './RestaurantListingPage.css'

const MenuListingItem = ({setMenuItem, listing, toggleItemModal}) => {
    //We need to refactor this to format a certain way based on whats avalible, 
    //image needs to format to the top if theres no description
    //if theres a description and a picture it needs to format to the side
    //button needs to go to the top right of the div, and be formatted on top of whatever is availible

    const menuModalMethods = e => {
        e.preventDefault();
        setMenuItem(listing);
        toggleItemModal();
    }
    return (
        <li className='item-listing' onClick={menuModalMethods}>
            <h4 className='item-name'>{listing.itemName}</h4>
            <p className='item-price'>{`$${listing.price}`}</p>
            <p className='item-description'>{listing?.description}</p>
            <button className='add-to-cart'>+</button>
        </li>
     )
}

export default MenuListingItem;
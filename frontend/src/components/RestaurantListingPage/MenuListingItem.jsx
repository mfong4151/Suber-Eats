import React, { useState } from 'react'
import './RestaurantListingPage.css'
import { useDispatch, useSelector } from 'react-redux'
import { createCart, updateCart, fetchCart, getCartsRestIdKeys} from '../../store/cart'
import { getCartItemRestIds, getCartItemsMap, createCartItem } from '../../store/cartItems'
import { useParams } from 'react-router-dom'
import { getSessionUserId } from '../../store/session'
import { fetchCartItems } from '../../store/cartItems'
import { useEffect } from 'react'

const MenuListingItem = ({setMenuItem, listing, toggleItemModal}) => {
    //We need to refactor this to format a certain way based on whats avalible, 
    const {restaurantId} = useParams()
    const sessionUserId = useSelector(getSessionUserId)
    const usersCart = useSelector(getCartItemsMap)
    const usersCarts = useSelector(getCartsRestIdKeys)
    const dispatch = useDispatch()

    const cartItemFact = (cartItem) =>(
        {  cartItem:{menu_item_id: listing.id,
            cart_id: usersCarts[restaurantId], 
            quantity: usersCart[cartItem] ? usersCart[cartItem]  + 1: 1}
        }
    )
    const menuModalMethods = e => {
        e.preventDefault();
        setMenuItem(listing);
        toggleItemModal();
    }
    


    const addCartItem = e =>{
        e.preventDefault()
        e.stopPropagation()
        dispatch(createCartItem(cartItemFact(), usersCarts[restaurantId]))
        .then(dispatch(fetchCartItems(usersCart[restaurantId])))
        .then(dispatch(fetchCart(sessionUserId)))

    }
    

    
    return (
        <li className='item-listing' >
                <div onClick={menuModalMethods}>
                    <h4 className='item-name' >{listing.itemName}</h4>
                    <p className='item-price'>{`$${listing.price}`}</p>
                    <p className='item-description'>{listing?.description}</p>
                </div>
                <button className='add-to-cart' onClick={addCartItem}>+</button>
        </li>
     )
}

export default MenuListingItem;
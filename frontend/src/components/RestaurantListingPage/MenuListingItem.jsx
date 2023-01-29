import React, { useState } from 'react'
import './RestaurantListingPage.css'
import { useDispatch, useSelector } from 'react-redux'
import { createCart, updateCart, fetchCart, getCartsRestIds} from '../../store/cart'
import { getCartItemRestIds, getCartItemsMap } from '../../store/cartItems'
import { useParams } from 'react-router-dom'
import { getSessionUserId } from '../../store/session'
import { fetchCartItems } from '../../store/cartItems'
import { useEffect } from 'react'

const MenuListingItem = ({setMenuItem, listing, toggleItemModal}) => {
    //We need to refactor this to format a certain way based on whats avalible, 
    const {restaurantId} = useParams()
    const sessionUserId = useSelector(getSessionUserId)
    const cartsRestIds = useSelector(getCartsRestIds)
    const usersCart = useSelector(getCartItemsMap)
    const dispatch = useDispatch()

    const cartFact = () =>(
        {
            userId:sessionUserId,
            restaurantId: restaurantId
        }
    )
    

    const cartItemFact = (cartItem) =>{
        return {  menuItemId: listing.id,
            restaurantId: restaurantId,
            userId: sessionUserId,
            quantity: usersCart[cartItem] ? usersCart[cartItem]  + 1: 1}
        }
    
    const menuModalMethods = e => {
        e.preventDefault();
        setMenuItem(listing);
        toggleItemModal();
    }
    
    const addToCart = () =>{
        dispatch(fetchCartItems())

    }


    const createCartedItem = e =>{
        e.preventDefault()
        e.stopPropagation()
        // if(!cartsRestIds.has(restaurantId)){
        //     dispatch(createCart(cartFact()))
        //     .then(dispatch(fetchCart(sessionUserId)))
        //     .then(dispatch(addToCart()))
        // } else{
        //     dispatch(addToCart())

        // }
     
    }
    

    
    return (
        <li className='item-listing' >
                <div onClick={menuModalMethods}>
                    <h4 className='item-name' >{listing.itemName}</h4>
                    <p className='item-price'>{`$${listing.price}`}</p>
                    <p className='item-description'>{listing?.description}</p>
                </div>
                <button className='add-to-cart' onClick={createCartedItem}>+</button>
        </li>
     )
}

export default MenuListingItem;
import React, { createContext, useState } from 'react'
import './RestaurantListingPage.css';
import { useDispatch, useSelector } from 'react-redux'
import { fetchCart, getCartsRestIdKeys} from '../../store/cart'
import { getCartItemsMap, createCartItem, updateCartItem} from '../../store/cartItems'
import { useParams } from 'react-router-dom'
import { getSessionUserId } from '../../store/session'

const MenuListingItem = ({setMenuItem, menuItem, toggleItemModal}) => {
    //We need to refactor this to format a certain way based on whats avalible, 
    const {restaurantId} = useParams()
    const sessionUserId = useSelector(getSessionUserId)
    const usersCartItems = useSelector(getCartItemsMap)
    const usersCarts = useSelector(getCartsRestIdKeys)
    const dispatch = useDispatch()
    const cartItemFact = (cartItem = null) =>{
        let oldCartItem = usersCartItems[cartItem?.id]
        return{  cartItem:{menu_item_id: menuItem.id,
            cart_id: usersCarts[restaurantId], 
            quantity: oldCartItem?.quantity ? oldCartItem?.quantity  + 1: 1}
        }
    }

    const currentCartItemFact = (cartItem) =>{
    
        return {   menuItemId: cartItem.menuItemId,
            cartId: cartItem.cartId,
            quantity: cartItem.quantity + 1}
    
        }

    const menuModalMethods = e => {
        e.preventDefault();
        setMenuItem(menuItem);
        toggleItemModal();
    }
    


    //this all still needs some edits to be fully functional:
    //first we need to fix the backend show
    //next we need to fix the dispatch
    //then we need to have a conditional to add instead of create a new item if it exists
    
    const addCartItem = e =>{
        e.preventDefault()
        e.stopPropagation()
        // let cartedItem = usersCartItems[menuItem.id]


        // if (cartedItem){
        //     dispatch(updateCartItem(currentCartItemFact(cartedItem) , cartedItem.cartId))
        //     .then(dispatch(fetchCart(sessionUserId)))
        // }else{
            dispatch(createCartItem(cartItemFact(), usersCarts[restaurantId]))
            .then(dispatch(fetchCart(sessionUserId)))
        // }

    }
    

    
    return (
        <li className='item-menuItem'  onClick={menuModalMethods}>
                <h4 className='item-name' >{menuItem.itemName}</h4>
                <p className='item-price'>{`$${menuItem.price}`}</p>
                <p className='item-description'>{menuItem?.description}</p>
                <button className='udc add-to-cart' onClick={addCartItem}>+</button>
        </li>
     )
}

export default MenuListingItem;
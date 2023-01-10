import React, { useEffect, useState } from 'react'
import './RestaurantListingPage.css'
import { useDispatch, useSelector } from 'react-redux'
import { createCart, updateCart, fetchCart, deleteCart, getCart} from '../../store/cart'

const MenuListingItem = ({setMenuItem, listing, toggleItemModal, usersCart}) => {
    //We need to refactor this to format a certain way based on whats avalible, 
    const dispatch = useDispatch()
    const sessionUserId = useSelector(state => state.session.user.id)
    let globalQuantity = 0
    if (usersCart[listing.menuId]) globalQuantity = usersCart[listing.menuId].quantity;
    const [cartQuantity, setCartQuantity] = useState(globalQuantity)
    
    const currentCart = (cartQuant) =>{
        return {  menuItemId: listing.id,
            restaurantId: listing.menuId,
            userId: sessionUserId,
            quantity: cartQuant + 1}
        }
    
    const menuModalMethods = e => {
        e.preventDefault();
        setMenuItem(listing);
        toggleItemModal();
    }

    const createCartedItem = e =>{
        e.preventDefault()
        e.stopPropagation()
        setCartQuantity(prev => prev + 1)
        if (!usersCart[listing.menuId]) dispatch(createCart({cart:currentCart(cartQuantity)}));
        else dispatch(updateCart({cart:currentCart(cartQuantity)}, ));
        dispatch(fetchCart(sessionUserId))
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